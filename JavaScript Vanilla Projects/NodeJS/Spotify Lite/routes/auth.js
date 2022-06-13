import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const router = express.Router();

//LOGIN
router.post("/", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(400).json({ message: "Invalid email or password" });
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).json({ message: "Invalid email or password" });
  res.status(200).json({ data: user, message: "Successfully Logged In" });
});

export default router;
