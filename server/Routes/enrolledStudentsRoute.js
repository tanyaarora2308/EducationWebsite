import express from "express";
import {
  postStudent,
  getStudent,
//   updateStudent,
  deleteStudent,
  showAllStudents
} from "../Controllers/enrolledStudentsController.js";
const router = express.Router();


router.post("/", postStudent);
router.get("/:id", getStudent);
// router.put("/:id", updateStudent);
router.delete("/:StudentID", deleteStudent);
router.get("/", showAllStudents);
export default router;
