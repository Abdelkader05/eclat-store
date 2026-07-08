import Image from "next/image";
import { MessageCircle, ShieldCheck } from "lucide-react";
import type { ProductPreview } from "@/features/product/types/product.types";

type ProductCardProps = {
  product: ProductPreview;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="grid gap-6 rounded-card border border-raspberry/10 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-soft lg:grid-cols-[0.9fr_1.1fr] lg:p-6">
      <div className="space-y-3">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-blush">
          <Image
            src={product.imageSrc}
            alt={product.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 360px, 100vw"
            className="object-cover"
          />
        </div>

        {product.galleryImages && product.galleryImages.length > 0 ? (
          <div className="grid grid-cols-3 gap-3">
            {product.galleryImages.map((image) => (
              <div
                key={image.src}
                className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-raspberry/10 bg-blush"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 120px, 30vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col justify-center">
        <p className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-blush px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-raspberry">
          <ShieldCheck className="h-4 w-4" />
          Disponible à Bamako
        </p>
        <p className="text-sm font-semibold text-raspberry">{product.brand}</p>
        <h3 className="mt-2 font-heading text-2xl font-semibold leading-tight text-wine sm:text-3xl">
          {product.name}
        </h3>
        <p className="mt-4 text-sm leading-7 text-ink/70">{product.description}</p>
        <p className="mt-5 text-3xl font-bold text-ink">{product.price}</p>
        <a
          className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-raspberry px-5 text-sm font-bold uppercase text-white shadow-lg shadow-raspberry/25 transition hover:bg-wine sm:w-fit"
          href={product.whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle className="h-5 w-5" />
          Commander sur WhatsApp
        </a>
      </div>
    </article>
  );
}
