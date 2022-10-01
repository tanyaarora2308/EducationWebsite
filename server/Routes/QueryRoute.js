import express from "express";
import {
  postQuery,
  getQuery,
  updateQuery,
  deleteQuery,
  showAllQueries,
  // answerQuery
} from "../Controllers/QueryController.js";
// import {protect} from "../middleware/authMiddleware.js"
const router = express.Router();

// router.get('/', async(req,res) => {
//     res.send('Query Route')
// })

router.post("/", postQuery);
router.get("/:id", getQuery);
router.put("/:id", updateQuery);
router.delete("/:id", deleteQuery);
router.get("/", showAllQueries);
// router.post("/answer",answerQuery);
export default router;
