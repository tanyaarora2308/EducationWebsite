import mongoose from "mongoose";

const querySchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    desc: String, 
    image: String,
    // comments:[
    //   {
    //     userId:{
    //       type: mongoose.Schema.ObjectId,
    //       required:true
    //     },
    //     comment:{
    //       type:String,
    //       required:true
    //     }
    //   }
    // ]
  },
  {timestamps: true}
);

var QueryModel = mongoose.model("Queries", querySchema);
export default QueryModel;