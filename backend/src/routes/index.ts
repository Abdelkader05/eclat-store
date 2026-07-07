import { Router } from "express";
import { productRouter } from "./product.routes.js";

export const apiRouter = Router();

apiRouter.use("/products", productRouter);
