import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
  {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    link: { type: String },
  },
  { timestamps: true }
);

var blogModel = mongoose.model("Blogs", blogSchema);
export default blogModel;
