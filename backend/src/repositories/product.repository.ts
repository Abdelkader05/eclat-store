import { prisma } from "../database/prisma.js";
import type { ProductListQuery } from "../types/product.types.js";

const productInclude = {
  brand: true,
  images: {
    orderBy: {
      position: "asc" as const
    }
  },
  categories: {
    include: {
      category: true
    }
  }
};

export class ProductRepository {
  findMany(query: ProductListQuery) {
    return prisma.product.findMany({
      where: {
        isActive: true,
        deletedAt: null,
        name: query.search
          ? {
              contains: query.search,
              mode: "insensitive"
            }
          : undefined,
        brand: query.brand
          ? {
              slug: query.brand
            }
          : undefined,
        categories: query.category
          ? {
              some: {
                category: {
                  slug: query.category
                }
              }
            }
          : undefined
      },
      include: productInclude,
      take: query.limit,
      skip: (query.page - 1) * query.limit,
      orderBy: {
        createdAt: "desc"
      }
    });
  }

  findBySlug(slug: string) {
    return prisma.product.findFirst({
      where: {
        slug,
        isActive: true,
        deletedAt: null
      },
      include: productInclude
    });
  }

  findPopular() {
    return prisma.product.findMany({
      where: {
        isActive: true,
        deletedAt: null
      },
      include: productInclude,
      orderBy: {
        views: "desc"
      },
      take: 8
    });
  }

  findLatest() {
    return prisma.product.findMany({
      where: {
        isActive: true,
        deletedAt: null
      },
      include: productInclude,
      orderBy: {
        createdAt: "desc"
      },
      take: 8
    });
  }
}
