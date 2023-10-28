import Hotel from "../Models/Hotel.js";
import Room from "../Models/Room.js";

export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (err) {
        next(err)
    }
}

export const updateHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedHotel)
    } catch (err) {
        next(err)
    }
}

export const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotelul a fost sters din baza de date.")
    } catch (err) {
        next(err)
    }
}

export const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (err) {
        next(err)
    }
}

export const getallHoteluri = async (req, res, next) => {
    const { min, max, ...others } = req.query
    try {
        const Hoteluri = await Hotel.find({ ...others, cmipret: { $gt: min | 1, $lt: max || 999 } }).limit(req.query.limit)
        res.status(200).json(Hoteluri)
    } catch (err) {
        next(err)
    }
}

export const countByCity = async (req, res, next) => {
    const orase = req.query.orase.split(",")
    try {
        const list = await Promise.all(orase.map(oras => {
            return Hotel.countDocuments({ oras: oras })
        }))
        res.status(200).json(list)
    } catch (err) {
        next(err)
    }
}

export const getHotelRoom = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        const list = await Promise.all(hotel.camere.map(camera => {
            return Room.findById(camera)
        }))
        res.status(200).json(list)
    } catch (err) {
        next(err)
    }
}