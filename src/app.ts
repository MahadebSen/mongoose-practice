import express, { Application } from "express";
import cors from "cors";
// application routes
import userRoute from "./app/modules/user/user.route";

const app: Application = express();

// using cors
app.use(cors());

// parseing data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/api/v1/user", (req: Request, res: Response) => {
//   /*
//   Step 1: Interface
//   Step 2: Schema
//   Step 3: Model
//   Step 4: Database Query
//   */

//   // Step 1: Interface ------------------------------
//   interface IUser {
//     name: {
//       firstName: string; // small letter type
//       lastName: string;
//     };
//     age: number;
//     address?: string;
//     isVoter: boolean;
//     gender: "male" | "female";
//   }

//   // Step 2: Schema -----------------------------------
//   const userSchema = new Schema<IUser>({
//     name: {
//       firstName: { type: String, required: true },
//       lastName: { type: String, required: true },
//     },
//     age: { type: Number, required: true }, // capital letter type
//     address: { type: String },
//     isVoter: { type: Boolean, required: true },
//     gender: { type: String, enum: ["male", "female"], required: true },
//   });

//   // Step 3: Model --------------------------------------
//   const userModel = model<IUser>("User", userSchema);

//   // Step 4: Database Query ----------------------------
//   const insertDataToDB = async () => {
//     const user = new userModel({
//       name: {
//         firstName: "Krishna",
//         lastName: "Sen",
//       },
//       age: 23,
//       address: "Darika",
//       isVoter: true,
//       gender: "male",
//     });

//     await user.save();
//   };

//   // flow is:
//   // app.ts ---> route.ts ---> controller.ts ---> service.ts ---> model.ts ---> interface.ts

//   insertDataToDB();

//   res.send("Hello world!!!");
// });

app.use("/api/v1/user", userRoute);

export default app;
