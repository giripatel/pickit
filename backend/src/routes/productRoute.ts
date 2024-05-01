import { Request, Response, Router, urlencoded } from "express";
import { PrismaClient } from "@prisma/client";

const productRouter = Router();
const prisma = new PrismaClient();

productRouter.post("/product",async (req : Request, res : Response) => {

    const body = req.body;

    try {
        
        
        const product =await prisma.product.create({
            data : {
                brand : body.brand,
                description : body.description,
                mrp : body.mrp,
                url : {
                   set :  [body.imageUrl]
                },
                currentPrice : body.currentPrice
            }
        })

        res.status(200).json({
            message : "product added successfully"
        })
    }catch (e) {
        console.log(e);
        res.status(500).json({
            message : "Internal server error"
        })
    }

})

productRouter.get("/products", async (req : Request, res : Response) => {

    try {

        const products = prisma.product.findMany({})
    }catch (e) {
        
        
        res.status(500).json({
            message : "Internal server error"
        })
    }

})

productRouter.get("/product/:id", async (req : Request, res : Response) => {

    const productId  = req.query;

    const product = prisma.product.findFirst({
        where : {
            id : Number(productId.id)
        }
    })

    res.status(200).json({
        product : product
    })
})

export default productRouter