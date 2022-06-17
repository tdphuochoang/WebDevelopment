import express from "express";
import registerRoute from "../routes/register.js";
import authRoute from "../routes/auth.js";
import songsRoute from "../routes/songs.js";
import artistsRoute from "../routes/artists.js";
import usersRoute from "../routes/users.js";
import cors from "cors";

function createServer() {
  const app = express();
  //Middlewares
  app.use(cors());
  app.use(express.json());
  app.use("/register", registerRoute);
  app.use("/login", authRoute);
  app.use("/user", usersRoute);
  app.use("/songs", songsRoute);
  app.use("/artist", artistsRoute);

  return app;
}

export default createServer;
