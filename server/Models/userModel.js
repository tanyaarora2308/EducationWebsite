import mongoose from "mongoose";
import jwt from "jsonwebtoken"

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
    // tokens: [
    //   {
    //     token: {
    //       required: true,
    //       type: String,
    //     },
    //   },
    // ],
  },
  { timestamps: true }
);

// UserSchema.methods.generateAuthToken = async function () {
//   const user = this; 
//   const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_KEY, {
//   });
//   user.tokens = user.tokens.concat({ token });
//   await user.save();
//   return token;
// };

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
