import { CallbackError } from "mongoose";
import { Request, Response } from "express";
import { User } from "../models";

export const userRegistCtrl = (req: Request, res: Response) => {
  const body = req.body;

  try {
    const newUser = new User({
      email: body.email,
      name: body.name,
      password: body.password,
    });

    newUser.save((err: CallbackError) => {
      if (err) {
        res.status(500).json({ success: false });
      } else {
        res.status(200).json({ success: true });
      }
    });
  } catch (err) {
    if (err) throw err;
  }
};
