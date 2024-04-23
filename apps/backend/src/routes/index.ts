import { Request, Response, Router } from "express";
import prisma, { Prisma } from "@pickit/db/client";
import { signUpSchema } from "@pickit/zod";
import { BCRYPT_SALT, JWT_SECRET } from '../../secrects';
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userRouter = Router()

userRouter.post("/signup",async (req : Request, res : Response) => {

    const body = req.body;
    
    const isValid = signUpSchema.safeParse({
        name : body.name,
        phoneNumber : body.phoneNumber,
        email : body.email,
        password : body.password
    })

    const passwordSalt = await bcrypt.genSalt(BCRYPT_SALT);
    const passwordHash = await bcrypt.hash(body.password,passwordSalt);

    // TODO : add complete logic of input validation

    try {
        const user = await prisma.user.create({
            data : {
                name        : body.name,
                phoneNumber : body.phoneNumber,
                email       : body.email,
                password    : passwordHash
            },
            select : {
                id : true
            }
        })
        
        const token = jwt.sign({id : user.id},JWT_SECRET);

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


userRouter.post("/signin",async (req : Request, res : Response) => {

    const body = req.body;

    try {
        const user = await prisma.user.findFirst({
            where : {
                phoneNumber : body.phoneNumber || undefined
            },select : {
                password : true,
                id : true
            }
        });

        if(!user) {
            return res.status(401).json({
                message : "Invalid phone number"
            })
        }
        const validPassword = await bcrypt.compare(body.password,user.password);
        
        if(!validPassword){
            return res.status(401).json({
                message : "Invalid Password"
            })
        }

        const token = jwt.sign({id : user.id},JWT_SECRET);

        return res.status(200).json({
            message : "Sign In sucessful",
            token
        })

    }catch(e) {
        res.status(500).json({
            message : "Internal server error"
        })
    }
    
})