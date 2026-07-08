export type ProductPreview = {
  name: string;
  brand: string;
  price: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  galleryImages?: readonly {
    src: string;
    alt: string;
  }[];
  detailUrl?: string;
  whatsappUrl: string;
};
