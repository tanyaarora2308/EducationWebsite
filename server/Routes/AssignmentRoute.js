import express from "express";
import {
  postAssignment,
  getAssignment,
  deleteAssignment,
  showAllAssignments,
} from "../Controllers/AssignmentController.js";
const router = express.Router();

import {protect} from "../middleware/authMiddleware.js"

// router.get('/', async(req,res) => {
//     res.send('Assignments Route')
// })

router.post("/",protect, postAssignment);
router.delete("/:id",protect,deleteAssignment)
router.get("/:id",protect, getAssignment);
router.get("/",protect, showAllAssignments);

export default router;
