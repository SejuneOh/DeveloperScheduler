import { THashPassword } from "./../models/userModel";
import { CallbackError } from "mongoose";
import { TCryptPassword } from "../models/userModel";
const crypto = require("crypto");

// salt를 반환하는 함수
const createSalt = () =>
  new Promise<string>((resolve, reject) => {
    crypto.randomBytes(64, (err: CallbackError, buf: any) => {
      if (err) reject(err);
      resolve(buf.toString("base64"));
    });
  });

// 해당 salt로 hash로 암호화를 리턴하는 함수
export const createHashedPassword = (plainPassword: string) =>
  new Promise<TCryptPassword>(async (resolve, reject) => {
    const salt = await createSalt();
    crypto.pbkdf2(
      plainPassword, //password
      salt, // salt
      9999, // interations 반복
      64, // key length
      "sha512", //hash function
      (err: CallbackError, key: any) => {
        if (err) reject(err);
        resolve({ password: key.toString("base64"), salt });
      }
    );
  });

export const comparePassword = (plainPassword: string, salt: string) =>
  new Promise<THashPassword>((resolve, reject) => {
    crypto.pbkdf2(
      plainPassword, //password
      salt, // salt
      9999, // interations 반복
      64, // key length
      "sha512", //function
      (err: CallbackError, key: any) => {
        if (err) reject(err);
        resolve({ hashPassword: key.toString("base64") });
      }
    );
  });
