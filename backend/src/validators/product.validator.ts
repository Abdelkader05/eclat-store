import { z } from "zod";

export const productListQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(50).default(20),
  search: z.string().trim().optional(),
  category: z.string().trim().optional(),
  brand: z.string().trim().optional(),
  minPrice: z.coerce.number().positive().optional(),
  maxPrice: z.coerce.number().positive().optional(),
  sort: z.enum(["popular", "new", "price_asc", "price_desc"]).optional()
});
