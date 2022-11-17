import { comparePassword, createHashedPassword } from "./../API/cryptoAPI";
import mongoose, { Document, Model, Query, Schema } from "mongoose";
import jwt from "jsonwebtoken";

export interface IUser {
  email: string;
  name: string;
  password: string;
  salt: string;
  token: string;
  tokenExp: number;
}

interface IUserDocument extends IUser, Document {
  setPassword: (password: string) => Promise<void>;
  checkPassword: (password: string) => Promise<boolean>;
  generateToken: () => Promise<void>;
  deleteToken: () => Promise<void>;
}

interface IUserModel extends Model<IUserDocument> {
  findByEmail: (userEmail: string) => Promise<IUserDocument>;
  findByToken: (token: string) => Promise<IUserDocument>;
}

export type TCryptPassword = {
  password: string;
  salt: string;
};

export type THashPassword = {
  hashPassword: string;
};

const userSchema: Schema<IUserDocument> = new Schema({
  email: { type: String, required: true, maxlength: 50 },
  name: { type: String, maxlength: 30, trim: true },
  password: { type: String, required: false },
  salt: { type: String },
  token: { type: String },
  tokenExp: { type: Number },
});

userSchema.set("collection", "Users");

//save 이전에 미들웨어 역할로 사용 할 수 있다. next callback function으로  다음 스텝을 이어 갈 수 있다.
userSchema.pre<IUserDocument>("save", async function (next) {
  // 암호화된 페스워드 받기
  const user = this;
  if (user.isModified("password")) {
    const { password, salt }: TCryptPassword = await createHashedPassword(
      this.password //기존 페스워드
    );

    this.password = password;
    this.salt = salt;

    next();
  } else {
    next();
  }
});

userSchema.methods.setPassword = async function (plainPassword: string) {
  const { password, salt } = await createHashedPassword(plainPassword);
  this.password = password;
  this.salt = salt;

  this.save();
};

userSchema.methods.checkPassword = async function (_password: string) {
  const { hashPassword } = await comparePassword(_password, this.salt);

  if (hashPassword === this.password) return true;
  return false;
};

userSchema.methods.generateToken = async function () {
  const _id = this._id;

  this.token = jwt.sign({ _id }, process.env.TOKEN_KEY as string);
  this.save();
};

userSchema.methods.deleteToken = async function () {
  try {
    this.token = "";
    this.save();
    return true;
  } catch (err) {
    return false;
  }
};

userSchema.statics.findByEmail = async function (_email: string) {
  return this.findOne({ email: _email });
};

userSchema.statics.findByToken = async function (_token: string) {
  return this.findOne({ token: _token });
};

// userScjkjjhema.plugin
const User = mongoose.model<IUserDocument, IUserModel>("Users", userSchema);
export default User;
