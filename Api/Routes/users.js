import express from "express";
import { deleteUser, getallUsers, getUser, updateUser } from "../Controllere/user.js";
import { VerifyAdmin, VerifyToken, VerifyUser } from "../util/VerifyToken.js";

const router = express.Router()

//Update
router.put("/:id", VerifyUser, updateUser)
//Delete
router.delete("/:id", VerifyUser, deleteUser)
//Get
router.get("/:id", VerifyUser, getUser)
//Get all
router.get("/", VerifyAdmin, getallUsers)

export default router