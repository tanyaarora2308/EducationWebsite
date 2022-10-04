import express from "express";
import {
  postBlog,
  getBlog,
  deleteBlog,
  showAllBlogs,
} from "../Controllers/BlogController.js";
import {protect} from "../middleware/authMiddleware.js"
const router = express.Router();

// router.get('/', async(req,res) => {
//     res.send('Blogs Route')
// })

router.post("/", protect,postBlog);
router.get("/:id",protect, getBlog);
router.delete("/:id", deleteBlog);
router.get("/",protect, showAllBlogs);

export default router;
