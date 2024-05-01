import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../secrects";


export const authentication = async (req : Request ,res : Response , next : NextFunction ) => {

    const token = req.headers.authorization || "";

    try{
    const decodedToken = jwt.verify(token, JWT_SECRET)
    req.userId = (<any>decodedToken).id

    next();
    }catch (e) {
        return res.status(400).json({
            message : "Please login"
        })
    }
}