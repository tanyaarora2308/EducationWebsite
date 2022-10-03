import mongoose from "mongoose";

const querySchema = mongoose.Schema(
  {
    // userId: { type: mongoose.Schema.ObjectId, required: true },
    userId: String,
    desc: String,
    image: String,
    // comments: [
    //   {
    //     userId1: { type: mongoose.Schema.ObjectId},
    //     comment: { type: String},
    //   },
    // ],
    comments: { type: Array },
  },
  { timestamps: true }
);

var QueryModel = mongoose.model("Queries", querySchema);
// var QueryModel = mongoose.model("Queries2", querySchema);
// var QueryModel = mongoose.model("Queries2", querySchema);
// const QueryModel = mongoose.model("Queries4", querySchema);
export default QueryModel;
