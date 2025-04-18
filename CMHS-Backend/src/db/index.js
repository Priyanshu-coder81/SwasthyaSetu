import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connect_db = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );

    console.log(
      `\n Database Connected Sucessfully!! DB Host : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Error ", error);
    process.exit(1);
  }
};


export default connect_db;