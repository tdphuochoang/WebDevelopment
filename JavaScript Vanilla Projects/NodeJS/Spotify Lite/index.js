import dotenv from "dotenv";
import mongoose from "mongoose";
import createServer from "./utils/server.js";
import connect from "./utils/mongooseCon.js";

dotenv.config();

//Disconnected listener
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

const app = createServer();

const port = 8800;
app.listen(port, () => {
  connect();
  console.log(`Server starts listening to port ${port}`);
});
