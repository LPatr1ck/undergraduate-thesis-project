import jwt from "jsonwebtoken";
import { createError } from "../util/error.js";

export const VerifyToken = (req, res, next) => {
    const token = req.cookies.access_token
    if (!token) {
        return next(createError(401, "Nu esti autentificat!"))
    }

    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
        if (err) return next(createError(403, "Token-ul nu este valid."))
        req.user = user
        next()
    })
}

export const VerifyUser = (req, res, next) => {
    VerifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            return next(createError(403, "Nu ai autorizatie!"))
        }
    })
}

export const VerifyAdmin = (req, res, next) => {
    VerifyToken(req, res, next, () => {
        if (req.user.isAdmin) {
            next()
        } else {
            return next(createError(403, "Nu ai autorizatie!"))
        }
    })
}

