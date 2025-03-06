import { Request, Response } from "express";
import users from "../data/user.json"

const getUsers = async (req: Request, res: Response) => {
  res.json(users)
}

export { getUsers }
