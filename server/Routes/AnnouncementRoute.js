import express from "express";
import { postAnnouncement,getAnnouncement,showAllAnnouncements} from "../Controllers/AnnouncementController.js";
const router = express.Router()
import {protect} from "../middleware/authMiddleware.js"

// router.get('/', async(req,res) => {
//     res.send('Announcements Route')
// })

router.post('/', protect,postAnnouncement)
router.get('/:id',protect, getAnnouncement)
router.get("/",protect, showAllAnnouncements)

export default router;