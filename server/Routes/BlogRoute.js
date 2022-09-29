import express from "express";
import {
  postBlog,
  getBlog,
  showAllBlogs,
} from "../Controllers/BlogController.js";
const router = express.Router();

// router.get('/', async(req,res) => {
//     res.send('Blogs Route')
// })

router.post("/", postBlog);
router.get("/:id", getBlog);
router.get("/", showAllBlogs);

export default router;
