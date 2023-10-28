import mongoose from 'mongoose';
const { Schema } = mongoose;

const RoomSchema = new mongoose.Schema({
    titlu: {
        type: String,
        required: true
    },
    pret: {
        type: Number,
        required: true
    },
    maxPersoane: {
        type: Number,
        required: true
    },
    descriere: {
        type: String,
        required: true
    },
    numarcamere: [{ numar: Number, unavailableDate: { type: [Date] } }],

},
    { timestamps: true })

export default mongoose.model("Room", RoomSchema)