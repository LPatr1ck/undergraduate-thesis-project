import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    tara: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    oras: {
        type: String,
        required: true,
    },
    telefon: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true })

export default mongoose.model("User", UserSchema)