import mongoose from "mongoose";

const assignmentSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    videoUrl: { type: String },
    assignmentUrl: { type: String },
  },
  { timestamps: true }
);

var assignmentModel = mongoose.model("Assignments", assignmentSchema);
export default assignmentModel;
