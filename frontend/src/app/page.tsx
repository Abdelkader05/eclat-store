"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Gift,
  Heart,
  Menu,
  MessageCircle,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  UserRound
} from "lucide-react";
import { ProductCard } from "@/features/product/components/ProductCard";
import type { ProductPreview } from "@/features/product/types/product.types";

const whatsappMessage = encodeURIComponent(
  "Bonjour Éclat Store, je veux commander le masque Biodance Bio Collagen Real Deep Mask à 2 000 FCFA."
);

const whatsappUrl = `https://wa.me/22362901424?text=${whatsappMessage}`;

const categories = [
  { name: "Soins visage", icon: Sparkles },
  { name: "Hydratation", icon: ShieldCheck },
  { name: "Éclat", icon: Heart },
  { name: "Routine beauté", icon: Sparkles },
  { name: "Coffrets", icon: Gift }
];

const product: ProductPreview = {
  name: "Biodance Bio Collagen Real Deep Mask",
  brand: "Biodance",
  price: "2 000 FCFA",
  description:
    "Masque hydrogel au collagène pour hydrater, illuminer et donner un effet peau fraîche. Une routine simple pour retrouver un éclat net, maintenant disponible à Bamako.",
  imageSrc: "/biodance-mask.png",
  imageAlt: "Biodance Bio Collagen Real Deep Mask",
  galleryImages: [
    {
      src: "/biodance-glow-result.jpg",
      alt: "Résultat lumineux après le masque Biodance"
    },
    {
      src: "/biodance-mask-application.jpg",
      alt: "Application du masque hydrogel Biodance"
    },
    {
      src: "/biodance-packaging.jpg",
      alt: "Sachets Biodance Bio Collagen Real Deep Mask"
    }
  ],
  whatsappUrl
};

const benefits = [
  { title: "Authenticité", text: "Produit sélectionné avec soin", icon: ShieldCheck },
  { title: "Livraison rapide", text: "Disponible à Bamako", icon: Truck },
  { title: "Commande simple", text: "Directement sur WhatsApp", icon: MessageCircle }
];

const highlights = [
  "Hydratation intense",
  "Éclat naturel",
  "Texture hydrogel",
  "Idéal routine visage"
];

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-5 text-ink sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-white/70 bg-white/60 shadow-soft backdrop-blur">
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-raspberry/10 bg-white/80 px-5 py-4 backdrop-blur lg:px-8">
          <a className="flex items-center gap-2 font-heading text-xl font-semibold tracking-wide text-wine" href="#">
            <Sparkles className="h-6 w-6 text-raspberry" />
            ÉCLAT STORE
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-ink/80 lg:flex">
            <a className="text-raspberry" href="#">Accueil</a>
            <a href="#produit">Produit</a>
            <a href="#categories">Catégories</a>
            <a href="#livraison">Livraison</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-3 text-wine">
            <Search className="h-5 w-5" />
            <UserRound className="hidden h-5 w-5 sm:block" />
            <ShoppingBag className="h-5 w-5" />
            <Menu className="h-5 w-5 lg:hidden" />
          </div>
        </header>

        <section className="grid items-center gap-10 bg-gradient-to-br from-white via-blush to-powder px-6 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-raspberry/15 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-raspberry">
              <Sparkles className="h-4 w-4" />
              Disponible à Bamako
            </p>
            <h1 className="font-heading text-4xl font-semibold leading-tight text-wine sm:text-5xl lg:text-6xl">
              Le Masque Hydrogel N°1 au monde, maintenant à Bamako
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-ink/75">
              Biodance Bio Collagen Real Deep Mask, le soin hydrogel qui aide à révéler une peau plus fraîche, plus lumineuse et mieux hydratée.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-xl bg-white px-5 py-3 text-2xl font-bold text-wine shadow-sm">
                2 000 FCFA
              </span>
              <span className="rounded-xl border border-gold/40 bg-white/70 px-4 py-3 text-sm font-semibold text-ink/70">
                Même éclat. Encore plus rapide.
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-xl bg-raspberry px-6 py-3 text-sm font-bold uppercase text-white shadow-lg shadow-raspberry/25 transition hover:bg-wine"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                Commander sur WhatsApp
              </a>
              <a className="rounded-xl border border-raspberry/30 bg-white/70 px-6 py-3 text-sm font-bold uppercase text-raspberry transition hover:border-raspberry" href="#produit">
                Voir le produit
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <div className="absolute inset-x-10 bottom-4 h-20 rounded-full bg-raspberry/10 blur-2xl" />
            <div className="relative mx-auto max-w-[520px] overflow-hidden rounded-[32px] border border-white bg-white p-3 shadow-soft">
              <div className="relative aspect-square overflow-hidden rounded-[24px] bg-blush">
                <Image
                  src="/biodance-mask.png"
                  alt="Biodance Bio Collagen Real Deep Mask disponible à Bamako"
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </section>

        <section id="categories" className="grid grid-cols-2 gap-4 border-y border-raspberry/10 bg-white/55 px-5 py-6 sm:grid-cols-3 lg:grid-cols-5 lg:px-14">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <a key={category.name} className="group flex flex-col items-center gap-3 rounded-card border border-raspberry/10 bg-blush px-4 py-5 text-center transition hover:-translate-y-1 hover:bg-white hover:shadow-soft" href="#produit">
                <Icon className="h-8 w-8 text-raspberry" />
                <span className="text-sm font-semibold">{category.name}</span>
              </a>
            );
          })}
        </section>

        <section id="produit" className="px-5 py-10 lg:px-14">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-raspberry">Produit du jour</p>
              <h2 className="font-heading text-3xl font-semibold text-wine">Biodance à Bamako</h2>
            </div>
            <a className="text-sm font-semibold text-raspberry" href={whatsappUrl} target="_blank" rel="noreferrer">
              Commander maintenant
            </a>
          </div>

          <ProductCard product={product} />
        </section>

        <section className="grid gap-4 border-y border-raspberry/10 bg-white/50 px-5 py-6 sm:grid-cols-3 lg:px-14">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blush text-raspberry">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-wine">{benefit.title}</p>
                  <p className="text-sm text-ink/65">{benefit.text}</p>
                </div>
              </div>
            );
          })}
        </section>

        <section id="livraison" className="grid gap-8 bg-gradient-to-r from-blush to-white px-5 py-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-raspberry">Pourquoi ce masque ?</p>
            <h2 className="mt-2 font-heading text-3xl font-semibold text-wine">Un soin simple pour une peau lumineuse</h2>
            <p className="mt-4 text-sm leading-7 text-ink/70">
              Commande rapide sur WhatsApp, confirmation directe avec Éclat Store, puis livraison organisée à Bamako.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-3 rounded-2xl border border-raspberry/10 bg-white px-4 py-4">
                <ShieldCheck className="h-5 w-5 text-raspberry" />
                <span className="text-sm font-semibold text-ink/75">{highlight}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="grid gap-6 bg-white/65 px-5 py-8 lg:grid-cols-[1fr_1.2fr] lg:px-14">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-wine">Besoin de confirmer avant de commander ?</h2>
            <p className="mt-2 text-sm text-ink/65">Écris-nous sur WhatsApp, nous te répondons directement.</p>
          </div>
          <a
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-raspberry px-6 text-sm font-bold uppercase text-white shadow-lg shadow-raspberry/20 transition hover:bg-wine"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="h-5 w-5" />
            Ouvrir WhatsApp
          </a>
        </section>
      </section>
    </main>
  );
}
