import { Router } from "express";
import { ProductController } from "../controllers/product.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { productListQuerySchema } from "../validators/product.validator.js";

export const productRouter = Router();
const productController = new ProductController();

productRouter.get("/", validate({ query: productListQuerySchema }), productController.list);
productRouter.get("/popular", productController.popular);
productRouter.get("/new", productController.latest);
productRouter.get("/:slug", productController.detail);
