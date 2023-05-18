import app from "./app";
import mongoose from "mongoose";

const port = 5000;

// database connection
async function dbFunction() {
  try {
    // db
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose-1");
    // app
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
    // checking
    console.log(`Successfully db is connected`);
  } catch (err) {
    console.log(err);
  }
}

dbFunction();
