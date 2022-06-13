import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import registerRoute from "./routes/register.js";
import authRoute from "./routes/auth.js";
import songsRoute from "./routes/songs.js";
import artistsRoute from "./routes/artists.js";
import usersRoute from "./routes/users.js";
import cors from "cors";
const app = express();
dotenv.config();

//Connect to MongoDB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

//Disconnected listener
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

//Middlewares
app.use(cors());
app.use(express.json());
app.use("/register", registerRoute);
app.use("/login", authRoute);
app.use("/user", usersRoute);
app.use("/songs", songsRoute);
app.use("/artist", artistsRoute);

const port = 8800;
app.listen(port, () => {
  connect();
  console.log(`Server starts listening to port ${port}`);
});
