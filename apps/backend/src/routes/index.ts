import { Request, Response, Router } from "express";
import prisma, { Prisma } from "@pickit/db/client"

const userRouter = Router()

userRouter.post("/signup",async (req : Request, res : Response) => {

    const body = req.body;
    
    try {
        const user = await prisma.user.create({
            data : {
                name        : body.name,
                phoneNumber : body.phoneNumber,
                email       : body.email,
                password    : body.password
            }
        })
    }catch(e) {
        if(e instanceof Prisma.PrismaClientKnownRequestError ) {
            return res.status(409).json({
                message : "user already exist, a new user cannot be created with this email or phone number"
            })
        }
    }

    return res.status(200).json({
        message : "user is created sucessfully"
    })
})

