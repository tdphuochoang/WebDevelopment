const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user.js");
const authRoute = require("./routes/auth.js");

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.log(err);
  });

app.get("/api/test", () => {
  console.log("test is successful");
});

//Middlewares
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

const port = 5000;
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
