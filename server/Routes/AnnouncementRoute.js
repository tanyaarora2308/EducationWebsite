import express from "express";
import { postAnnouncement,getAnnouncement,showAllAnnouncements} from "../Controllers/AnnouncementController.js";
const router = express.Router()

// router.get('/', async(req,res) => {
//     res.send('Announcements Route')
// })

router.post('/', postAnnouncement)
router.get('/:id', getAnnouncement)
router.get("/", showAllAnnouncements)

export default router;