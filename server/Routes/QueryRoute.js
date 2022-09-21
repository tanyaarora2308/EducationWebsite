import express from "express";
import { postQuery,getQuery,updateQuery,deleteQuery,showAllQueries} from "../Controllers/QueryController.js";
const router = express.Router()

// router.get('/', async(req,res) => {
//     res.send('Query Route')
// })

router.post('/', postQuery)
router.get('/:id', getQuery)
router.put('/:id', updateQuery)
router.delete("/:id", deleteQuery)
router.get("/", showAllQueries)
export default router;