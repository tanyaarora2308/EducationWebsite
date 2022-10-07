import express from "express";
import { getAllUsers, loginUser, registerUser,updateConfirmedPassword,deleteUser } from "../Controllers/AuthController.js";
const router = express.Router()
  
router.post('/register', registerUser)
// router.post('/emailVerify',emailVerify )
router.post('/login', loginUser)
router.get('/users', getAllUsers)
router.get('/confirmation/:token',updateConfirmedPassword);
router.delete("/:id", deleteUser);
export default router