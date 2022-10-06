import express from "express";
// import fs from "fs";
// import { getUser, showAllUser} from "../Controllers/UserController.js";
const router = express.Router();
//const fs = require("fs");
import UserDetailModel from "../Models/userDetailModel.js";

// const showAllUser = async (req, res) => {
//   try {
//     fs.readFile("users.json", function(err, data) {
//     if (err) throw err;
//     const users = JSON.parse(data);
//     console.log(users); // Print users
//     console.log(req.params.id);
//     res.status(200).json(users);
//     });

//   } catch (error) {
//     res.status(500).json(error);
//   }
//   };

const createUser = async (req, res) => {
  //save data
  const y = {
    name: "tanya",
    comments: [
      {
        comment: "tanya comments",
        userId: "12sdsds3",
      },
    ],
  };

  const x = new UserDetailModel(y);
  await x.save();
  res.status(200).json(x);
};
const getUser = async (req, res) => {
  UserDetailModel.findById("633a8bf27db9ced8cd353936")
    .then((announcements) => {
      console.log(
        "announcements ***********************",
        announcements.comments[0].comment
      );
      res.status(200).json(announcements);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

router.get("/:id", getUser);
router.get("/",createUser);
// router.get("/get/all", showAllUser);

export default router;
