import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";

const router = express.Router();

//GET ALL USERS
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json(err);
  }
});

//UPDATE USER's INFO

router.post("/:id", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { username: req.body.username, password: hashPassword },
      { new: true }
    );
    res
      .status(200)
      .json({ data: updatedUser, message: "Updated successfully!" });
  } catch (err) {
    res.status(400).json(err);
  }
});

export default router;
