import express from "express";
import { countByCity, createHotel, deleteHotel, getallHoteluri, getHotel, getHotelRoom, updateHotel } from "../Controllere/hotel.js";
import { VerifyAdmin } from "../util/VerifyToken.js";

const router = express.Router()

//Create
router.post("/", VerifyAdmin, createHotel)
//Update
router.put("/:id", VerifyAdmin, updateHotel)
//Delete
router.delete("/:id", VerifyAdmin, deleteHotel)
//Get
router.get("/find/:id", getHotel)
//Get all
router.get("/", getallHoteluri)
router.get("/countByCity", countByCity)
router.get("/countByType", getallHoteluri)
router.get("/camere/:id", getHotelRoom)


export default router