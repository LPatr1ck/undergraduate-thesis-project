import express from "express";
import { createRoom, deleteRoom, getallRooms, getRoom, updateRoom, updateRoomAvailability } from "../Controllere/room.js";
import { VerifyAdmin } from "../util/VerifyToken.js";

const router = express.Router()

//Create
router.post("/:hotelid", VerifyAdmin, createRoom)
//Update
router.put("/availability/:id", updateRoomAvailability)
router.put("/:id", VerifyAdmin, updateRoom)
//Delete
router.delete("/:id/:hotelid", VerifyAdmin, deleteRoom)
//Get
router.get("/:id", getRoom)
//Get all
router.get("/", getallRooms)

export default router