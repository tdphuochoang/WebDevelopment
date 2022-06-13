import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  likedSongs: {
    type: [String],
    default: [],
  },
  followedArtists: {
    type: [String],
    default: [],
  },
});

export default mongoose.model("User", UserSchema);
