import mongoose from "mongoose";

const SongSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Song", SongSchema);
