import UserModel from "../Models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// Registering a new User
export const registerUser = async (req, res) => {
  const { name, email, password, confirmpassword } = req.body;

  try {
    const oldUser = await UserModel.findOne({ email });
    if (password !== confirmpassword)
      return res
        .status(400)
        .json({ message: "Password and confirm password don't match!" });

    if (oldUser)
      return res.status(400).json({ message: "User already exists!" });

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
      name,
      email,
      password: hashedPass,
      confirmpassword,
    });

    const user = await newUser.save();
    
    res.status(200).json({ user});
    // res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// login User
export const loginUser = async (req, res) => {
  const { email, password, userType } = req.body;
  if (!email || !password)
    return res.status(400).json("Email or password not entered.");
  try {
    const user = await UserModel.findOne({ email: email });
    if (user) {
      const validity = await bcrypt.compare(password, user.password);
      if (!validity) {
        res.status(400).json("Wrong password.");
      } else {
        // const token = await user.generateAuthToken();
        res.status(200).json({ user, token });
      }
    } else {
      res.status(404).json("User does not exist.");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  UserModel.find({})
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
