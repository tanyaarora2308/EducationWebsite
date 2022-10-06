import mongoose from "mongoose";

const querySchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.ObjectId, required: true, ref:"Users" },
    desc: String,
    image: String,
    answers: [
      {
        userId: { type: mongoose.Schema.ObjectId, ref:"Users"},
        answer: { type: String},
        
      },
    ],
  },
  { timestamps: true }
);

var QueryModel = mongoose.model("Queries", querySchema);
// var QueryModel = mongoose.model("Queries2", querySchema);
// var QueryModel = mongoose.model("Queries2", querySchema);
export default QueryModel;
