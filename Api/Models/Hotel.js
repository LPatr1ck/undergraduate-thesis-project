import mongoose from 'mongoose';
const { Schema } = mongoose;

const HotelSchema = new mongoose.Schema({
    nume: {
        type: String,
        required: true
    },
    tip: {
        type: String,
        required: true
    },
    oras: {
        type: String,
        required: true
    },
    adresa: {
        type: String,
        required: true
    },
    distanta: {
        type: String,
        required: true
    },
    imagini: {
        type: [String],
    },
    titlu: {
        type: String,
        required: true
    },
    descriere: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    camere: {
        type: [String],
    },
    cmipret: {
        type: Number,
        required: true
    },
    featured: {
        type: Boolean,
        default: false,
    },
})

export default mongoose.model("Hotel", HotelSchema)