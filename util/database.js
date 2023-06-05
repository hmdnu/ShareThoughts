import mongoose from "mongoose";

let isConnected = false;

export async function connectToDB() {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Mongodb is already connected");
  }

  try {
    mongoose.connect(process.env.MONGODB_URI, {
      dbName: "training_db",
    });

    isConnected = true;
    console.log("connected to database");
  } catch (error) {
    console.error(error);
  }
}
