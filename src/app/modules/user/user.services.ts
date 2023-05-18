import { IUser } from "./user.interface";
import { userModel } from "./user.model";

// Step 4: Database Query ----------------------------
export const insertUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = new userModel(payload);

  await user.save();
  console.log(user.fullName); // custome method
  return user;
};

export const getUserFromDB = async (): Promise<IUser[]> => {
  const users = userModel.find();

  return users;
};

export const getOneUserFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = userModel.findOne({ _id: payload }, { name: 1, isVoter: 1 }); // field filtering

  return user;
};
