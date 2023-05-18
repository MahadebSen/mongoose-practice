import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethod } from "./user.interface";

// Custom method step: 2 -----------------------------
type UserModelType = Model<IUser, {}, IUserMethod>;

// Step 2: Schema -----------------------------------
const userSchema = new Schema<IUser, UserModelType, IUserMethod>({
  // Custom method step: 3 --> adding UserModelType and IUserMethod to schema
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  age: { type: Number, required: true }, // capital letter type // for mongoose
  address: { type: String },
  isVoter: { type: Boolean, required: true },
  gender: { type: String, enum: ["male", "female"], required: true },
});

// Step 3: Model --------------------------------------
export const userModel = model<IUser, UserModelType>("User", userSchema); // Custom method step: 5 --> adding UserModelType to model<>

// Custom method step: 4 ------------------------------
userSchema.method("fullName", function fullName() {
  return this.name.firstName + " " + this.name.lastName;
});
