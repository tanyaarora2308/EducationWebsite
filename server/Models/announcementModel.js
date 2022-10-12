import mongoose from "mongoose";

const announcementSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

var announcementModel = mongoose.model("Announcements", announcementSchema);
export default announcementModel;
