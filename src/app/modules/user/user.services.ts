import { IUser } from "./user.interface";
import { userModel } from "./user.model";

// Step 4: Database Query ----------------------------
// inser a new data to DB
export const insertUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = new userModel(payload);

  await user.save();
  console.log(await user.fullName); // custome instance method
  return user;
};

// Get all data from DB
export const getUserFromDB = async (): Promise<IUser[]> => {
  const users = userModel.find();

  return users;
};

// Get a spacific data from DB
export const getOneUserFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = userModel.findOne({ _id: payload }, { name: 1, isVoter: 1 }); // field filtering

  return user;
};

// Get only voter users
// Statics step: 5
export const getVoterUserFromDB = async () => {
  const users = await userModel.getVoterUser();
  return users;
};
