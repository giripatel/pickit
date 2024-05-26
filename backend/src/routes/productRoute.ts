import { Request, Response, Router, urlencoded } from "express";
import { PrismaClient } from "@prisma/client";

const productRouter = Router();
const prisma = new PrismaClient();

productRouter.post("/", async (req: Request, res: Response) => {
  const body = req.body;

  try {
    const product = await prisma.product.create({
      data: {
        brand: body.brand,
        description: body.description,
        mrp: body.mrp,
        url: {
          set: [body.imageUrl],
        },
        currentPrice: body.currentPrice,
      },
    });

    res.status(200).json({
      message: "product added successfully",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

productRouter.get("/serachproducts", async (req: Request, res: Response) => {
  const body = req.body;

  try {
    const products = await prisma.product.findMany({
      where: {
        OR: [
          {
            description: { contains: body.search },
          },
          {
            brand : { contains : body.search }
          },
          {
            description : { contains : body.search }
          }
        ],
      },
    });
    return res.json(products);
  } catch (e) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

productRouter.get("/serachbybrand", async (req: Request, res: Response) => {
  const body = req.body;

  try {
    const products = await prisma.product.findMany({
      where: {
        brand : body.search 
      },
    });
    return res.json(products);
  } catch (e) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

productRouter.get("/pricerange", async (req: Request, res: Response) => {
    const body = req.body;
  
    try {
      const products = await prisma.product.findMany({
        where: {
            AND: [{
                currentPrice : { gte : body.min }
            },{
                currentPrice : {lte : body.max}
            }]
        },
      });
      return res.json(products);
    } catch (e) {
      res.status(500).json({
        message: "Internal server error",
      });
    }
  });


productRouter.get("/allproducts", async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany({});
    return res.json(products);
  } catch (e) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

productRouter.get("/:id", async (req: Request, res: Response) => {
  const productId = req.query;

  const product = prisma.product.findFirst({
    where: {
      id: Number(productId.id),
    },
  });

  res.status(200).json({
    product: product,
  });
});

export default productRouter;
