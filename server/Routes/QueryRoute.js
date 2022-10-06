import express from "express";
import {
  postQuery,
  getQuery,
  updateQuery,
  deleteQuery,
  showAllQueries,
  answerQuery
} from "../Controllers/QueryController.js";
import {protect} from "../middleware/authMiddleware.js"
const router = express.Router();


router.post("/", postQuery);
router.get("/:id", getQuery);
router.put("/:id", updateQuery);
router.delete("/:queryID/:userID/", deleteQuery);
router.get("/", showAllQueries);
router.post("/answer",answerQuery);
export default router;
