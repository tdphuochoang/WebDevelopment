import mongoose from "mongoose";

const ArtistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  songs: {
    type: [String],
  },
});

export default mongoose.model("Artist", ArtistSchema);
