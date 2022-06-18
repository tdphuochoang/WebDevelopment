const router = require("express").Router();
const User = require("../models/User.js");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  //hashing password
  const salt = await bcrypt.genSalt(Number(process.env.SALT));
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  //create new user
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashPassword,
  });

  //send to MongoDb
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser); //send to client
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(401).json("Invalid username or password");
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(401).json("Invalid username or password");

    const { password, ...others } = user._doc;

    res.status(200).json({ data: others, message: "Successfully Logged In" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
