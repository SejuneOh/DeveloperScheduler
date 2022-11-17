import { Request, Response } from "express";
import { User } from "../models/index";

// Requset, Response Express Object
export const userLoginCtrl = async (req: Request, res: Response) => {
  const body = req.body;

  try {
    // ID 찾기
    const data = await User.findByEmail(body.email);

    if (!data) {
      res //
        .status(202)
        .json({ success: false, msg: "사용자가 없습니다." });
      return;
    } else {
      // 비밀번호 체크
      const flag = await data.checkPassword(body.password as string);

      if (!flag) {
        res.status(202).json({ success: false, msg: "비밀번호가 틀렸습니다." });
        return;
      }

      // 토큰생성
      data.generateToken();
      // res.setHeader("x_token", JSON.stringify(data.token));
      res.status(200).json({ success: true, token: data.token });
    }
  } catch (error) {
    console.log(`error: ${error}`);
  }
};

export const userLogoutCtrl = async (req: Request, res: Response) => {
  const body = req.body;

  try {
    const user = await User.findByToken(body.token);

    if (!user) {
      res.status(202).json({ success: false, msg: "logout 유저가 없습니다." });
    } else {
      const ret = user.deleteToken();

      if (!ret) {
        res.status(501).json({ success: false, msg: "토큰 삭제 중 에러" });
      } else {
        res.status(200).json({ success: true });
      }
    }
  } catch (err) {
    res.status(500).json({ msg: "sever Error", err: JSON.stringify(err) });
  }
};
