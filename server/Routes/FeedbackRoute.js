import express from "express";
import { postFeedback,getFeedback,showAllFeedback} from "../Controllers/FeedbackController.js";
import {protect} from "../middleware/authMiddleware.js"
const router = express.Router()

// router.get('/', async(req,res) => {
//     res.send('Feedback Route')
// })

router.post('/', protect,postFeedback)
router.get('/:id',protect, getFeedback)
router.get("/",protect, showAllFeedback)

export default router;