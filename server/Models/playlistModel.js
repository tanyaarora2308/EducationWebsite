import mongoose from "mongoose";

const playlistSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    videoUrl: { type: String },
    subject:{type:String}
  },
  { timestamps: true }
);

var PlaylistModel = mongoose.model("Playlists", playlistSchema);
export default PlaylistModel;
