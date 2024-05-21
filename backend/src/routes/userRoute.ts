import { Request, Response, Router } from "express";
// import prisma from "@pickit/db/client";
import { Prisma, PrismaClient } from "@prisma/client";
// import { signUpSchema } from "@pickit/zod";
import { BCRYPT_SALT, JWT_SECRET } from "../secrects";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authentication } from "../middilewares/auth";

const userRouter = Router();
const prisma = new PrismaClient();

userRouter.post("/signup", async (req: Request, res: Response) => {
  const body = req.body;

  // const isValid = signUpSchema.safeParse({
  //     name : body.name,
  //     phoneNumber : body.phoneNumber,
  //     email : body.email,
  //     password : body.password
  // })

  const passwordSalt = await bcrypt.genSalt(BCRYPT_SALT);
  const passwordHash = await bcrypt.hash(body.password, passwordSalt);

  // TODO : add complete logic of input validation

  try {
    
    const user = await prisma.user.create({
      data: {
        name: body.name,
        phoneNumber: body.phoneNumber,
        email: body.email,
        password: passwordHash,
      },
      select: {
        id: true,
      },
    });

    
    const token = jwt.sign({ id: user.id }, JWT_SECRET);

    res.status(200).json({
      message: "user is created sucessfully",
      token: token,
    });
    
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      return res.status(409).json({
        message:
          "user already exist, a new user cannot be created with this email or phone number",
      });
    }
    

    res.json({
      message: "This is catch block",
    });
  }
  res.status(200).json({
    message: "user is created sucessfully",
  });
});

userRouter.post("/signin", async (req: Request, res: Response) => {
  const body = req.body;

  try {
    const user = await prisma.user.findFirst({
      where: {
        phoneNumber: body.phoneNumber || undefined,
      },
      select: {
        password: true,
        id: true,
      },
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid phone number",
      });
    }
    const validPassword = await bcrypt.compare(body.password, user.password);

    if (!validPassword) {
      return res.status(401).json({
        message: "Invalid Password",
      });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET);

    res.status(200).json({
      message: "Sign In sucessful",
      token,
    });
  } catch (e) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

userRouter.post("/cart",authentication, async (req: Request, res: Response) => {
  const body = req.body;

  try {
    const cart = await prisma.cartItem.create({
      data: {
        quantity: body.quantity,
        userId: req.userId,
        productId: body.productId,
      },
    });


  res.json({
    message: "Added",
  });

  } catch (e) {
    
    
    res.status(500).json({
      message: "Internal server error",
    });
  }

});

userRouter.get("/cart",authentication, async (req: Request, res: Response) => {
  
  try {
    const cart = await prisma.cartItem.findMany({
      where: {
        userId: req.userId,
      },
      select: {
        product: true,
        quantity: true,
      },
    });

    res.json({
      cart,
    });
  } catch (e) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

userRouter.delete("/cart", authentication, async (req : Request, res : Response) => {
  const body = req.body;

  try {
    const deletedItem = await prisma.cartItem.deleteMany({
      where: {
        userId: req.userId,
        productId: body.productId,
      },
    });

  res.json({
    message: "Deleted",
  });

  } catch (e) {
    
    res.status(500).json({
      message: "Internal server error",
    });
  }
})

userRouter.post("/wishlist",authentication, async (req: Request, res: Response) => {
  const body = await req.body;

  try {
    const cart = await prisma.wishList.create({
      data: {
        productId: body.productId,
        userId: req.userId,
      },
    });

    res.status(200).json({
        message : "Product added successfully"
    })
  } catch (e) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
});


userRouter.get("/wishlist",authentication, async (req : Request, res : Response) => {

    const wishList = await prisma.wishList.findMany({
        where : {
            userId : req.userId
        },
        select : {
            product : true
        }
    })

    res.status(200).json(
        wishList
    )
})
export default userRouter;
