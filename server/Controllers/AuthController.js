import UserModel from "../Models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer"

// Registering a new User
export const registerUser = async (req, res,{ transporter }) => {
  const { name, email, password, confirmpassword,userType } = req.body;
  console.log(req.body);
  try {
    const oldUser = await UserModel.findOne({ email });
    if (password !== confirmpassword)
      return res
        .status(400)
        .json({ message: "Password and confirm password don't match!" });

    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
      name,
      email,
      password: hashedPass,
      confirmpassword,
      userType
    });

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    if (newUser) {
      await newUser.save();
      if(!newUser.confirmed){

        jwt.sign(newUser._id, process.env.JWT_KEY, (err, emailToken) => {
            const url = `http://localhost:3000/confirmation/${emailToken}`;
      
            transporter.sendMail({
              to: email,
              subject: 'Confirm your email to register at Coachify',
              html: `Please click this email to confirm your email: <a href="${url}">${url}</a>`,
            });
          },
        );
  
        res.status(400).json({ message: "Please confirm your email to register" });
      }


      res.status(201).json({
        _id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        confirmpassword: newUser.confirmpassword,
        userType:newUser.userType,
        token: generateToken(newUser._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Login User
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  // console.log(req.body);
  if (!email || !password)
    return res.status(400).json("Email or password not entered");
  try {
    const user = await UserModel.findOne({ email: email });
    if (user) {
      const validity = await bcrypt.compare(password, user.password);
      validity
        ? res.status(200).json({
            // user
            _id: user.id,
            name: user.name,
            email: user.email,
            userType: user.userType,
            token: generateToken(user._id),
          })
        : res.status(401).json("Invalid credentials!");
    } else {
      res.status(404).json("User does not exist");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//Get All Users
export const getAllUsers = async (req, res) => {
  UserModel.find({})
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};







export const updateConfirmedPassword = async (req, res) => {
  try {
    const { user: { id } } = jwt.verify(req.params.token, EMAIL_SECRET);
    await models.User.update({ confirmed: true }, { where: { id } });
  } catch (e) {
    res.send('error');
  }

  return res.redirect('http://localhost:3000/auth');
}

//Generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_KEY,
    //  { expiresIn: "2m" }
     );
};