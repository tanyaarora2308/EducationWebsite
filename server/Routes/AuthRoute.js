import express from "express";
import { getAllUsers, loginUser, registerUser,updateConfirmedPassword,deleteUser , checkout,updateEnrollment} from "../Controllers/AuthController.js";
const router = express.Router()
  
router.post('/register', registerUser)
// router.post('/emailVerify',emailVerify )
router.post('/login', loginUser)
router.post('/checkout', checkout)
router.get('/users', getAllUsers)
router.get('/confirmation/:token',updateConfirmedPassword);
router.delete("/:id", deleteUser);
router.put('/updateEnrollment', updateEnrollment)
export default router