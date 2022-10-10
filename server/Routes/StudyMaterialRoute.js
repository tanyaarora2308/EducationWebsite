import express from "express";
import {upload} from "../middleware/filehelper.js"
import {singleFileUpload,getAllSingleFiles} from '../Controllers/StudyMaterialController.js';
const router = express.Router();


router.post('/singleFile', upload.single('file'), singleFileUpload);
// router.post('/multipleFiles', upload.array('files'), multipleFileUpload);
router.get('/', getAllSingleFiles);
// router.get('/getMultipleFiles', getallMultipleFiles);


export default router;