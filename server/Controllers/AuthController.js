import UserModel from "../Models/userModel.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";

// Registering a new User
export const registerUser = async (req, res) => {
  // const { name, email, password, confirmpassword, userType } = req.body;
  // // console.log(req.body);
  // try {
  //   const oldUser = await UserModel.findOne({ email });
  //   if (password !== confirmpassword)
  //     return res
  //       .status(400)
  //       .json({ message: "Password and confirm password don't match!" });

  //   if (oldUser)
  //     return res.status(400).json({ message: "User already exists" });

  //   const salt = await bcrypt.genSalt(10);
  //   const hashedPass = await bcrypt.hash(password, salt);

  //   const newUser = new UserModel({
  //     name,
  //     email,
  //     password: hashedPass,
  //     confirmpassword,
  //     userType,
  //   });

  //   console.log("Please verify your account to register at coachify");
  //   const output = `
  //   <p>Hello Future Achiever, </p>
  //   <h3>Please verify your account to register at coachify</h3>
  //   <p>Please click this link to confirm your email:
  //   </p>
  // `;

  //   // create reusable transporter object using the default SMTP transport
  //   let transporter = nodemailer.createTransport({
  //     host: "mail.google.com",
  //     port: 587,
  //     secure: true, // true for 465, false for other ports
  //     auth: {
  //       user: "coachify02@gmail.com", // generated ethereal user
  //       pass: "gocuyxwjbbosnlwm", // generated ethereal password
  //     },
  //     tls: {
  //       // rejectUnauthorized: false,
  //       ciphers: 'SSLv3'
  //     },
  //   });

  //   // setup email data with unicode symbols
  //   let mailOptions = {
  //     from: "coachify02@gmail.com", // sender address
  //     to: "tanya.arora2308@gmail.com", // list of receivers
  //     subject: "Confirm your email to register at Coachify", // Subject line
  //     html: output, // html body
  //   };

  //   // send mail with defined transport object
  //   transporter.sendMail(mailOptions, (error, info) => {
  //     console.log("Inside transporter");
  //     console.log("Hi", info);
  //     if (error) {
  //       console.log("hello");
  //       return console.log(error);
  //     }
  //     console.log("Message sent: %s", info.messageId);
  //     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  //   });

  //   res.send("Mail done");

  let transporter = nodemailer.createTransport({
    host: "mail.google.com",
    port: 587,
    secure: true,
    tls: {
      rejectUnauthorized: false,
    },
  });

  Emailsender();

  function Emailsender() {
    let mailOption = {
      from: "coacify02@gmail.com",
      to: "tanya.arora2308@gmail.com",
      subject: "News",
      html:`<p>Hi</p>`
    };
    transporter.sendMail(mailOption, function (err, data) {
      if (err) {
        console.log("error cannot sendmail:", err);
      } else {
        console.log("Email has been sent");
      }
    });
  }

  //   if (newUser) {
  //     // console.log("New user made");
  //     await newUser.save();
  //     res.status(201).json({
  //       _id: newUser.id,
  //       name: newUser.name,
  //       email: newUser.email,
  //       password: newUser.password,
  //       confirmpassword: newUser.confirmpassword,
  //       userType: newUser.userType,
  //       token: generateToken(newUser._id),
  //     });
  //   } else {
  //     res.status(400);
  //     throw new Error("Invalid user data");
  //   }

  //   //   res.status(200).json(newUser);
  // } catch (error) {
  //   res.status(500).json({ message: error.message });
  // }
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

//Logout User
export const logoutUser = (req, res) => {
  sessionStorage.removeItem("UserDetails");
  res.redirect("/");
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
