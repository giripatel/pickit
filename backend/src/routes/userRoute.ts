import { Request, Response, Router } from "express";
// import prisma from "@pickit/db/client";
import { Prisma, PrismaClient } from "@prisma/client";
// import { signUpSchema } from "@pickit/zod";
import { BCRYPT_SALT, JWT_SECRET } from '../secrects';
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userRouter = Router();
const prisma = new PrismaClient();

userRouter.post("/signup",async (req : Request, res : Response) => {

    const body = req.body;
    
    // const isValid = signUpSchema.safeParse({
    //     name : body.name,
    //     phoneNumber : body.phoneNumber,
    //     email : body.email,
    //     password : body.password
    // })

    const passwordSalt = await bcrypt.genSalt(BCRYPT_SALT);
    const passwordHash = await bcrypt.hash(body.password,passwordSalt);

    console.log("checkpoint 1......");
    
    // TODO : add complete logic of input validation

    try {

    console.log("checkpoint 2......");
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
        
        console.log("checkpoint 3......");
        const token = jwt.sign({id : user.id},JWT_SECRET);


        res.status(200).json({
            message : "user is created sucessfully",
            token : token
        })
    console.log("checkpoint 3......");

    }catch(e) {
        if(e instanceof Prisma.PrismaClientKnownRequestError ) {
            return res.status(409).json({
                message : "user already exist, a new user cannot be created with this email or phone number"
            })
        }
        console.log(e);
        
        res.json({
            message : "This is catch block"
        })
    }
    res.status(200).json({
        message : "user is created sucessfully",
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

        res.status(200).json({
            message : "Sign In sucessful",
            token
        })

    }catch(e) {
        res.status(500).json({
            message : "Internal server error"
        })
    }
    
})

userRouter.post("/cart",async (req : Request, res : Response) => {

    const body = req.body;

    try {

        const cart = prisma.cartItem.create({
            data : {
                quantity : body.quantity,
                userId : body.userId,
                productId : body.productId
            }
        })


    }catch (e) {
        res.status(500).json({
            message : "Internal server error"
        })
    }

    res.json({
        message : "Added"
    })

})


userRouter.get("/cart",async (req : Request, res : Response) => {

    const body = req.body;

    try {

        const cart = prisma.cartItem.findMany({
            where : {
                userId : body.userId
            },select : {
                product : true,
                quantity : true
            }
        })

        res.json({
            cart
        })

    }catch (e) {
        res.status(500).json({
            message : "Internal server error"
        })
    }

})

export default userRouter