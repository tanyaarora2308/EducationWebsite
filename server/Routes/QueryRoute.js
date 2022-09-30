import express from "express";
import { postQuery,getQuery,updateQuery,deleteQuery,showAllQueries} from "../Controllers/QueryController.js";
import {protect} from "../middleware/authMiddleware.js"
const router = express.Router()

// router.get('/', async(req,res) => {
//     res.send('Query Route')
// })

router.post('/',protect, postQuery)
router.get('/:id',protect, getQuery)
router.put('/:id',protect, updateQuery)
router.delete("/:id",protect, deleteQuery)
router.get("/",protect, showAllQueries)
export default router;