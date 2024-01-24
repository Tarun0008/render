import express from "express";
import { updateUser,deleteUser,getAllUser,getSingleUser, getUserProfile, getMyAppointments } from '../controller/userController.js';

import {authenticate,restrict} from "../auth/verifyToken.js"
const router=express.Router()

router.get('/:id',authenticate,restrict(["patient"]),getSingleUser)
router.get('/',authenticate,restrict(["admin"]),getAllUser)
router.delete('/:id',authenticate,restrict(["patient"]),deleteUser)
router.put('/:id',authenticate,restrict(["patient"]),updateUser)
router.put('/profile/me',authenticate,restrict(["patient"]),getUserProfile)
router.put('/appointments/my-appointments',authenticate,restrict(["patient"]),getMyAppointments)

export default router;