import mongoose from "mongoose";
import jwt from "jsonwebtoken";

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
    },
  },
  { timestamps: true }
);

// UserSchema.methods.generateAuthToken = async function () {
//   try {
//     console.log(this._id);
//     const token = jwt.sign({ _id: this._id.toString() }, process.env.JWT_KEY);
//     this.tokens = this.tokens.concat({ token: token });
//     await this.save();
//     return token;
//   } catch (err) {
//     console.log(err);
//   }
// };

// UserSchema.methods.generateAuthToken = async function () {
//   const user = this; //user being generate
//   const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, {
//     expiresIn: "2 minutes",
//   });
//   user.tokens = user.tokens.concat({ token });
//   await user.save();
//   return token;
// };

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
