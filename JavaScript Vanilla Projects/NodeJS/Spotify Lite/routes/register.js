import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";

const router = express.Router();

//REGISTER
router.post("/", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) return res.status(403).json({ message: "User already exists" });
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    let newUser = await new User({
      ...req.body,
      password: hashPassword,
    }).save();

    newUser.password = undefined;
    newUser.__v = undefined;

    res
      .status(200)
      .json({ data: newUser, message: "Account created successfully!" });
  } catch (err) {
    res.status(400).json(err);
  }
});

export default router;
