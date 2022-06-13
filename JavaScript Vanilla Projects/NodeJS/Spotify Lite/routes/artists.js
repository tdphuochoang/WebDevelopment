import express from "express";
import Artist from "../models/Artist.js";
import Song from "../models/Song.js";
import User from "../models/User.js";

const router = express.Router();

//CREATE
router.post("/", async (req, res) => {
  const newArtist = new Artist(req.body);
  try {
    const savedArtist = await newArtist.save();
    res.status(200).json(savedArtist);
  } catch (err) {
    res.status(500).json(err);
  }
});

//FollowedArtist
router.post("/:artist_name", async (req, res) => {
  const inputName = req.params.artist_name;
  const song = await Song.find({ artist: inputName });

  let res_message = "";
  if (!song) return res.status(400).json({ message: "Artist doesn't exist" });
  const user = await User.findOne();
  const index = user.followedArtists.indexOf(inputName);
  if (index === -1) {
    //push to followedArtists list if the artist doesn't exist
    user.followedArtists.push(inputName);
    res_message = `You followed ${inputName}`;
    user.save();
  } else {
    //if the artist exists, remove it from followedArtists list
    user.followedArtists.splice(index, 1);
    res_message = `You unfollowed ${inputName}`;
    user.save();
  }

  res.status(200).json({ data: user, message: res_message });
});

export default router;
