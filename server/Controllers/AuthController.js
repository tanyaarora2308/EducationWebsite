import UserModel from "../Models/userModel.js";
import enrolledStudentModel from "../Models/enrolledStudentModel.js";
import jwt from "jsonwebtoken";
import {uuid} from "uuidv4"
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";
import Stripe from "stripe";


const stripe = Stripe(process.env.stripeSecretKey)
export const checkout =  async (req, res) => {
  console.log("Request:", req.body);
 
  let error;
  let status;
  try {
    const { product, token } = req.body;
 
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
 
    const idempotency_key = uuid();
    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${product.name}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip,
          },
        },
      },
      {
        idempotency_key,
      }
    );
    status = "success";
    console.log("success");
    res.json({status});
    return res.redirect("http://localhost:3000/Auth");
    console.log("Charge:", { charge });
    status = "success";
  }catch (error) {
    // console.error("Error:", error);
    // res.json({ error });
    // status = "failure";
  }
  res.json({status });
  
};


// Registering a new User
export const registerUser = async (req, res) => {
  const { name, email, password, confirmpassword, userType } = req.body;
  try {
    // const enrolledUser = await enrolledStudentModel.findOne({ email });
    // if (!enrolledUser)
    //   return res
    //     .status(400)
    //     .json({ message: "Please enroll offline first to register! 🙁" });
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
      confirmed: false,
    });

    if (newUser) await newUser.save();
    console.log("user saved in DB");
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
      html: output,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      // console.log("Email came: ");
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    console.log("Mail sent");

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
        confirmed: newUser.confirmed,
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
    // const enrolledUser = await enrolledStudentModel.findOne({ email: email });
    console.log(user);
    if (user) {
      let validity;
      if (user.userType === "teacher") validity = password === user.password;
      else validity = await bcrypt.compare(password, user.password);

      if (validity) {
        if (user.userType === "student") {
          res.status(200).json({
            // user
            _id: user.id,
            name: user.name,
            email: user.email,
            userType: user.userType,
            token: generateToken(user._id),
            confirmed: user.confirmed,
            // courses: enrolledUser.courses,
          });
        } else if (user.userType === "teacher") {
          res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            subject: user.subject,
            token: generateToken(user._id),
            userType: user.userType,
          });
        } else if (user.userType === "admin") {
          res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            token: generateToken(user._id),
            userType: user.userType,
          });
        }
      } else res.status(401).json("Invalid credentials!");
    } else res.status(404).json("User does not exist");
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
    const decoded = jwt.verify(req.params.token, process.env.JWT_KEY);
    req.user = await UserModel.findById(decoded.id).select("-password");
    console.log("User is", req.user);
    // await UserModel.updateOne({ confirmed: true }, { where: { id } });
    await UserModel.updateOne(
      { _id: req.user.id },
      { $set: { confirmed: true } }
    );
    console.log("User confirmed updated");
    return res.redirect("http://localhost:3000/Auth");
  } catch (e) {
    console.log(e);
    res.send("error");
  }
};

