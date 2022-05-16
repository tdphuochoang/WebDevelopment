const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

const connect = async () => {
  const uri = process.env.ATLAS_URI;
  try {
    await mongoose.connect(uri);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

//mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

//Routes
const exercisesRouter = require("./routes/exercises");
const userRouter = require("./routes/users");
app.use("/exercises", exercisesRouter);
app.use("/users", userRouter);

//Start the server
app.listen(port, () => {
  connect();
  console.log(`Server is running on port: ${port}`);
});
