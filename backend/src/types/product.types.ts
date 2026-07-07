import type { z } from "zod";
import type { productListQuerySchema } from "../validators/product.validator.js";

export type ProductListQuery = z.infer<typeof productListQuerySchema>;
