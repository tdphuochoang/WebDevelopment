import express from "express";
import Song from "../models/Song.js";
import User from "../models/User.js";

const router = express.Router();

//CREATE SONGS
router.post("/", async (req, res) => {
  try {
    const song = await Song(req.body).save();
    res
      .status(201)
      .json({ data: song, message: "Song is created successfully!" });
  } catch {
    res.status(500).json(err);
  }
});

//liked songs
router.post("/:id", async (req, res) => {
  const song = await Song.findById(req.params.id);
  let res_message = "";
  if (!song) return res.status(400).json({ message: "Song doesn't exist" });
  const user = await User.findOne();
  //const user = await User.findById(req.params.userid);
  const index = user.likedSongs.indexOf(song._id);

  if (index === -1) {
    //push to likedSongs if song doesn't exist
    user.likedSongs.push(song._id);
    res_message = "Song is added to your liked list";
    user.save();
  } else {
    //if song exists, remove it from likedSongs
    user.likedSongs.splice(index, 1);
    res_message = "Song is removed from your liked list";
    user.save();
  }

  res.status(200).json({ data: user, message: res_message });
});

//Display all liked songs OR search songs based on languages
router.get("/", async (req, res) => {
  const user = await User.findOne();
  const songs = await Song.find({ _id: user.likedSongs });
  const inputLanguage = req.query.language;
  //Return searched songs if there is a language query, else return the list of liked songs
  if (inputLanguage !== undefined) {
    const searchedSongs = await Song.find({
      language: inputLanguage,
    });
    const result = { searchedSongs };
    res.status(200).json({ data: result });
  } else {
    res.status(200).json({ data: songs });
  }
});

//Search songs based on category
router.get("/:category", async (req, res) => {
  const inputCategory = req.params.category;
  if (inputCategory !== undefined) {
    let re = new RegExp(inputCategory, "i"); //Ignore case sensitivity
    const searchedSongs = await Song.find({
      category: { $regex: re },
    });
    const result = { searchedSongs };
    res.status(200).json({ data: result });
  } else {
    res.status(200).json({});
  }
});

export default router;
