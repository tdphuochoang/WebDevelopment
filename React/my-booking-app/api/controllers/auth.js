import User from "../models/User.js";

export const register = async (req, res, next) => {
  try {
    const newUSer = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    await newUSer.save();
    res.status(200).send("User has been created");
  } catch (err) {
    next(err);
  }
};
