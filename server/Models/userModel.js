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
    },
    userType: {
      type: String,
      default:"student"
    },
    confirmed: {
      type: Boolean,
      defaultValue: false,
    },
    subject:{
      type: String,
    }
  },
  { timestamps: true }
);



const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
