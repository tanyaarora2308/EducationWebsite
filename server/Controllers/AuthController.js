import UserModel from "../Models/userModel.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";

// Registering a new User
export const registerUser = async (req, res) => {
  const { name, email, password, confirmpassword, userType } = req.body;
  // console.log(req.body);
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

    console.log("Please verify your account to register at coachify");
    const emailToken = generateToken(newUser._id);
    const url = `http://localhost:3000/confirmation/hello`;
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
      to: "tanya.arora2308@gmail.com",
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
    // res.send("sai");

    if (newUser) {
      // console.log("New user made");
      await newUser.save();
      res.status(201).json({
        _id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        confirmpassword: newUser.confirmpassword,
        userType: newUser.userType,
        token: generateToken(newUser._id),
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
  const { email, password, userType } = req.body;
  // console.log(req.body);
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
    const { user: { id } } = jwt.verify(req.params.token, "hello");
    await models.User.update({ confirmed: true }, { where: { id } });
  } catch (e) {
    res.send('error');
  }

  return res.redirect('http://localhost:3000/auth');
}
