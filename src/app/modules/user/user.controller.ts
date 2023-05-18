import { Request, Response } from "express";
import {
  getOneUserFromDB,
  getUserFromDB,
  getVoterUserFromDB,
  insertUserToDB,
} from "./user.services";

// Create new user
export const createUser = async (req: Request, res: Response) => {
  const userData = await req.body;
  const user = await insertUserToDB(userData);

  res.status(200).json({
    status: "Success",
    user: user,
  });
};

// Get all users
export const getUsers = async (req: Request, res: Response) => {
  const users = await getUserFromDB();

  res.status(200).json(users);
};

// Get specific user
export const getOneUser = async (req: Request, res: Response) => {
  const { id } = await req.params;
  const user = await getOneUserFromDB(id);

  res.status(200).json(user);
};

// Get voter users
export const getVoterUser = async (req: Request, res: Response) => {
  const data = await getVoterUserFromDB();

  res.status(200).json({
    status: "Success",
    user: data,
  });
};
