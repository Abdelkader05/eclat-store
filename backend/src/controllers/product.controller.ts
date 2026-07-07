import type { RequestHandler } from "express";
import { ProductService } from "../services/product.service.js";
import { sendSuccess } from "../utils/api-response.js";
import { productListQuerySchema } from "../validators/product.validator.js";

export class ProductController {
  private readonly productService = new ProductService();

  list: RequestHandler = async (request, response, next) => {
    try {
      const query = productListQuerySchema.parse(request.query);
      const products = await this.productService.list(query);
      sendSuccess(response, products);
    } catch (error) {
      next(error);
    }
  };

  detail: RequestHandler = async (request, response, next) => {
    try {
      const product = await this.productService.detail(String(request.params.slug));
      sendSuccess(response, product);
    } catch (error) {
      next(error);
    }
  };

  popular: RequestHandler = async (_request, response, next) => {
    try {
      const products = await this.productService.popular();
      sendSuccess(response, products);
    } catch (error) {
      next(error);
    }
  };

  latest: RequestHandler = async (_request, response, next) => {
    try {
      const products = await this.productService.latest();
      sendSuccess(response, products);
    } catch (error) {
      next(error);
    }
  };
}
