import mongoose from "mongoose";

const feedbackSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
    },
    message: String,
  },
  { timestamps: true }
);

var FeedbackModel = mongoose.model("Feedbacks", feedbackSchema);
export default FeedbackModel;
