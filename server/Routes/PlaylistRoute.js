import express from "express";
import {
  postPlaylist,
  getPlaylist,
  deletePlaylist,
  showAllPlaylists,
} from "../Controllers/PlaylistController.js";
const router = express.Router();

import {protect} from "../middleware/authMiddleware.js"

// router.get('/', async(req,res) => {
//     res.send('Playlists Route')
// })

router.post("/",protect, postPlaylist);
router.delete("/:id",protect,deletePlaylist)
router.get("/:id",protect, getPlaylist);
router.get("/",protect, showAllPlaylists);

export default router;
