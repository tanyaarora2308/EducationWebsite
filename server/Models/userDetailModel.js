import mongoose from "mongoose";

const UserDetailSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    comments:{type: Array},
  },
  { timestamps: true }
);

const UserDetailModel = mongoose.model("UserDetail", UserDetailSchema);
export default UserDetailModel;