import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmpassword: {
      type: String,
      required: true,
    },
    userType: {
      type: String,
      default:"student"
    },
    confirmed: {
      type: Boolean,
      defaultValue: false,
    },
  },
  { timestamps: true }
);


const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
