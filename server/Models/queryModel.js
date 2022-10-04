import mongoose from "mongoose";

const querySchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.ObjectId, required: true },
    userId: String,
    desc: String,
    image: String,
    // comments: [
    //   {
    //     userId1: { type: mongoose.Schema.ObjectId},
    //     comment: { type: String},
    //   },
    // ],
  },
  { timestamps: true }
);

var QueryModel = mongoose.model("Queries", querySchema);
// var QueryModel = mongoose.model("Queries2", querySchema);
// var QueryModel = mongoose.model("Queries2", querySchema);
export default QueryModel;
