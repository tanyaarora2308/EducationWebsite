import express from "express";
import {
  postAssignment,
  getAssignment,
  showAllAssignments,
} from "../Controllers/AssignmentController.js";
const router = express.Router();

// router.get('/', async(req,res) => {
//     res.send('Assignments Route')
// })

router.post("/", postAssignment);
router.get("/:id", getAssignment);
router.get("/", showAllAssignments);

export default router;
