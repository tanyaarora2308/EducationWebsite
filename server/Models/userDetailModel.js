import mongoose from "mongoose";

const userDetailSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    comments:{type: Array},
  },
  { timestamps: true }
);

var UserDetailModel = mongoose.model("UserDetail", userDetailSchema);
export default UserDetailModel;
