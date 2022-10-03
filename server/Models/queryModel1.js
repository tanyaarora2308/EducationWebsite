import mongoose from "mongoose";

const querySchema1 = mongoose.Schema(
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

// // var QueryModel = mongoose.model("Queries", querySchema);
// // var QueryModel = mongoose.model("Queries2", querySchema);
// // var QueryModel = mongoose.model("Queries2", querySchema);
const QueryModel1 = mongoose.model("Queries4", querySchema1);
export default QueryModel1;
