import UserModel from "../Models/userModel.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";

// Registering a new User
export const registerUser = async (req, res) => {
  const { name, email, password, confirmpassword, userType } = req.body;
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
      userType,
      confirmed:false
    });

    if (newUser) await newUser.save();
    console.log("user saved in DB")
    console.log("Please verify your account to register at coachify");
    const emailToken = generateToken(newUser._id);
    const url = `http://localhost:5000/auth/confirmation/${emailToken}`;
    const output = `
    <p>Hello Future Achiever, </p>
    <h3>Please verify your account to register at coachify.</h3>
    <p>Please click this link to confirm your email: <a href="${url}">${url}</a>
    </p>
  `;

    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "coachify02@gmail.com",
        pass: "gocuyxwjbbosnlwm",
      },
      tls: { rejectUnauthorized: false },
    });
  
    // console.log("Email came: 1 ");
  
    var mailOptions = {
      from: "coachify02@gmail.com",
      to: email,
      subject: "Verification code to register at Coachify",
      html:output,
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      // console.log("Email came: ");
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    console.log("Mail sent")

    if (newUser) {
      // console.log("New user made");
      // await newUser.save();
      res.status(201).json({
        _id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        confirmpassword: newUser.confirmpassword,
        userType: newUser.userType,
        token: emailToken,
        confirmed:newUser.confirmed
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }

    //   res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  
};

// Login User
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json("Email or password not entered");
  try {
    const user = await UserModel.findOne({ email: email });
    console.log(user);
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
            confirmed:user.confirmed
          })
        : res.status(401).json("Invalid credentials!");
    } else {
      res.status(404).json("User does not exist");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete User
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await UserModel.findById(id);
      await user.deleteOne();
      res.status(200).json("User deleted successfully");
  } catch (error) {
    res.status(500).json(error);
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

const generateToken = (id) => {
  return jwt.sign(
    { id },
    process.env.JWT_KEY
    //  { expiresIn: "2m" }
  );
};

export const updateConfirmedPassword = async (req, res) => {
  try {
    console.log("Inside updateConfirmedPassword")
    const decoded = jwt.verify(req.params.token, process.env.JWT_KEY)
    req.user = await UserModel.findById(decoded.id).select('-password')
    // const { user: { id } } = jwt.verify(req.params.token,process.env.JWT_KEY);
    console.log("User is", req.user)
    // await UserModel.updateOne({ confirmed: true }, { where: { id } });
    await UserModel.updateOne({ _id: req.user.id },{ $set: { confirmed: true } },);
    console.log("User confirmed updated")
  } catch (e) {
    console.log(e)
    res.send('error');
  }

  // return res.redirect('http://localhost:3000/auth');
}
