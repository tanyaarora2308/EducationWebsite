import express from "express";
import {
  postTeacher,
  getTeacher,
//   updateTeacher,
  deleteTeacher,
  showAllTeachers
} from "../Controllers/TeacherController.js";
const router = express.Router();


router.post("/", postTeacher);
router.get("/:id", getTeacher);
// router.put("/:id", updateTeacher);
router.delete("/:TeacherID", deleteTeacher);
router.get("/", showAllTeachers);
export default router;
