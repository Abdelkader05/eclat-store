import { apiRequest } from "@/services/http.service";

export type ProductListItem = {
  id: string;
  name: string;
  slug: string;
  price: number;
  salePrice?: number | null;
  brand: {
    name: string;
  };
  images: Array<{
    url: string;
    alt: string;
  }>;
};

export function getProducts() {
  return apiRequest<ProductListItem[]>("/products");
}
