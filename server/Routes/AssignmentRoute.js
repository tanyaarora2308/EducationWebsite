import express from "express";
import {
  postAssignment,
  getAssignment,
  showAllAssignments,
} from "../Controllers/AssignmentController.js";
const router = express.Router();

import {protect} from "../middleware/authMiddleware.js"

// router.get('/', async(req,res) => {
//     res.send('Assignments Route')
// })

router.post("/",protect, postAssignment);
router.get("/:id",protect, getAssignment);
router.get("/",protect, showAllAssignments);

export default router;
