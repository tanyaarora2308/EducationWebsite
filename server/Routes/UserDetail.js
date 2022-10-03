import express from "express";
// import fs from "fs";
// import { getUser, showAllUser} from "../Controllers/UserController.js";
const router = express.Router();
//const fs = require("fs");
import UserDetailModel from "../Models/userDetailModel.js";

const getUser = async (req, res) => {
  //save data
//   const y = {
//     name: "tanya",
//     comments: [
//       {
//         comment: "tanya commnets",
//         userId: "12sdsds3",
//       },
//     ],
//   };
//   const x = new UserDetailModel(y);
//   await x.save();
//   res.status(200).json(x);

//get data
    UserDetailModel.findById("633aa4ce8322937b06281a7a")
    .then((announcements) => {
      console.log("announcements ***********************", announcements.comments[0].comment);
      res.status(200).json(announcements);
    })
    .catch((error) => {
      res.status(500).json(error);
    });


  // res.send("About this wiki");
};

router.get("/all", getUser);
//   router.get("/get/all", showAllUser);

export default router;
