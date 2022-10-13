import express from "express";
import {
  postTeacher,
  getTeacher,
//   updateTeacher,
  deleteTeacher,
  showAllTeachers
} from "../Controllers/TeacherController.js";
const router = express.Router();


router.post("/teacher", postTeacher);
router.get("/teacher/:id", getTeacher);
// router.put("/:id", updateTeacher);
router.delete("/teacher/:TeacherID", deleteTeacher);
router.get("/teacher/", showAllTeachers);
export default router;
