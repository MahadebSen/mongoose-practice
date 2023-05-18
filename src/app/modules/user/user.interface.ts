import { HydratedDocument, Model } from "mongoose";

// Step 1: Interface ------------------------------
export interface IUser {
  name: {
    firstName: string; // small letter type
    lastName: string;
  };
  age: number;
  address?: string;
  isVoter: boolean;
  gender: "male" | "female";
}

// Custom instance method step: 1 --------------
export interface IUserMethod {
  fullName(): string;
}

// Statics step: 1 -------------------------------------
export interface IUserStaticModel extends Model<IUser, {}, IUserMethod> {
  getVoterUser(): Promise<HydratedDocument<IUser, IUserMethod>>;
}
