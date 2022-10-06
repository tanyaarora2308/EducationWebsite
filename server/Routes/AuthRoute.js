import express from "express";
import { getAllUsers, loginUser, registerUser } from "../Controllers/AuthController.js";
const router = express.Router()
  
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/users', getAllUsers)
// router.get('/confirmation/:token',updateConfirmedPassword );
export default router