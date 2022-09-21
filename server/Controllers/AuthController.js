import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";

// Registering a new User
export const registerUser = async (req, res) => {
  const { name,email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  const newUser = new UserModel({
    name,
    email,
    password: hashedPass,
  });

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// login User

export const loginUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await UserModel.findOne({email: email})


        if(user)
        {
            const validity = await bcrypt.compare(password, user.password)
            validity? res.status(200).json(user): res.status(400).json("Wrong Password")
        }
        else{
            res.status(404).json("User does not exist")
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}