import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethod, IUserStaticModel } from "./user.interface";

// Custom instance method step: 2 -----------------------------
type UserModelType = Model<IUser, {}, IUserMethod>;

// Step 2: Schema ---------------------------------------------
const userSchema = new Schema<IUser, IUserStaticModel, IUserMethod>({
  // Custom instance method step: 3 --> adding UserModelType and IUserMethod to schema
  // Static step: 2 ---> use IUserStaticModel insted of UserModelType
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  age: { type: Number, required: true }, // capital letter type // for mongoose
  address: { type: String },
  isVoter: { type: Boolean, required: true },
  gender: { type: String, enum: ["male", "female"], required: true },
});

// Step 3: Model ------------------------------------------------
// Custom instance method step: 5 --> adding UserModelType to model<>
// Statics step: 3 ---> use IUserStaticModel insted of UserModelType in model<IUser,here-static-type>
export const userModel = model<IUser, IUserStaticModel>("User", userSchema);

// Custom instance method step: 4 --------------------------------
userSchema.method("fullName", async function fullName(): Promise<string> {
  const data = (await this.name.firstName) + " " + (await this.name.lastName);
  return data;
});

// Statics step: 4 ---> create method
userSchema.static("getVoterUser", async function getVoterUser() {
  const data = await this.find({ isVoter: true });
  return data;
});
