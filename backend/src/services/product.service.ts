import { ProductRepository } from "../repositories/product.repository.js";
import type { ProductListQuery } from "../types/product.types.js";
import { AppError } from "../utils/app-error.js";

export class ProductService {
  private readonly productRepository = new ProductRepository();

  list(query: ProductListQuery) {
    return this.productRepository.findMany(query);
  }

  async detail(slug: string) {
    const product = await this.productRepository.findBySlug(slug);

    if (!product) {
      throw new AppError("Produit introuvable.", 404, "PRODUCT_NOT_FOUND");
    }

    return product;
  }

  popular() {
    return this.productRepository.findPopular();
  }

  latest() {
    return this.productRepository.findLatest();
  }
}
