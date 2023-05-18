import { Request, Response } from "express";
import {
  getOneUserFromDB,
  getUserFromDB,
  insertUserToDB,
} from "./user.services";

export const createUser = async (req: Request, res: Response) => {
  const userData = await req.body;
  const user = await insertUserToDB(userData);

  res.status(200).json({
    status: "Success",
    user: user,
  });
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await getUserFromDB();

  res.status(200).json(users);
};

export const getOneUser = async (req: Request, res: Response) => {
  const { id } = await req.params;
  const user = await getOneUserFromDB(id);

  res.status(200).json(user);
};
