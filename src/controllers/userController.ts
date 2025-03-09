import { Request, Response } from "express";
import users from "../data/user.json"

export const getUsers = async (req: Request, res: Response) => {
  res.json(users)
};
