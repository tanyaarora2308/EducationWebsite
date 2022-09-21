import express from "express";
import { postFeedback,getFeedback,showAllFeedback} from "../Controllers/FeedbackController.js";
const router = express.Router()

// router.get('/', async(req,res) => {
//     res.send('Feedback Route')
// })

router.post('/', postFeedback)
router.get('/:id', getFeedback)
router.get("/", showAllFeedback)

export default router;