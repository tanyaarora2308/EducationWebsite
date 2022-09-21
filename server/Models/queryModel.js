import mongoose from "mongoose";

const querySchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    desc: String, 
    image: String,
  },
  {timestamps: true}
);

var QueryModel = mongoose.model("Queries", querySchema);
export default QueryModel;