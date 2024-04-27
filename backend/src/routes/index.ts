import { Router } from "express";
import userRouter from "./userRoute";
import productRouter from "./productRoute";

const router = Router();

router.use("/api/v1/user",userRouter);
router.use("/api/v1/product",productRouter);

export default router;