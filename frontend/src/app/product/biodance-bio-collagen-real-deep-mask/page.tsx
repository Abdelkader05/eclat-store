import Image from "next/image";
import type { Metadata } from "next";
import {
  Check,
  Heart,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Truck
} from "lucide-react";

const whatsappMessage = encodeURIComponent(
  "Bonjour Éclat Store, je veux commander le masque Biodance Bio Collagen Real Deep Mask à 2 000 FCFA. La livraison à Bamako est à 1 000 FCFA."
);

const whatsappUrl = `https://wa.me/22362901424?text=${whatsappMessage}`;

const galleryImages = [
  {
    src: "/biodance-mask.png",
    alt: "Biodance Bio Collagen Real Deep Mask"
  },
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
];

const benefits = [
  "Hydratation intense",
  "Aide à révéler l'éclat naturel",
  "Texture hydrogel confortable",
  "Idéal pour une routine visage premium"
];

const steps = [
  "Appliquer le masque sur une peau propre.",
  "Laisser poser selon ta routine et ton confort.",
  "Retirer puis masser doucement l'excédent sur le visage."
];

export const metadata: Metadata = {
  title: "Biodance Bio Collagen Real Deep Mask | Éclat Store",
  description:
    "Page produit du masque Biodance Bio Collagen Real Deep Mask, disponible à Bamako chez Éclat Store."
};

export default function BiodanceProductPage() {
  return (
    <main className="min-h-screen px-4 py-5 text-ink sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-white/70 bg-white/65 shadow-soft backdrop-blur">
        <header className="flex items-center justify-between border-b border-raspberry/10 bg-white/80 px-5 py-4 backdrop-blur lg:px-8">
          <a className="flex items-center gap-2 font-heading text-xl font-semibold tracking-wide text-wine" href="/">
            <Sparkles className="h-6 w-6 text-raspberry" />
            ÉCLAT STORE
          </a>
          <a
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-raspberry px-4 text-xs font-bold uppercase text-white shadow-lg shadow-raspberry/20 transition hover:bg-wine sm:px-5"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="h-4 w-4" />
            Commander
          </a>
        </header>

        <section className="grid gap-8 bg-gradient-to-br from-white via-blush to-powder px-5 py-8 lg:grid-cols-[1fr_0.95fr] lg:px-14 lg:py-12">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-raspberry">
              Accueil / Produit / Biodance
            </p>

            <div className="grid gap-3 sm:grid-cols-4">
              <div className="relative aspect-square overflow-hidden rounded-[26px] border border-white bg-white shadow-soft sm:col-span-4">
                <Image
                  src="/biodance-mask.png"
                  alt="Biodance Bio Collagen Real Deep Mask"
                  fill
                  priority
                  sizes="(min-width: 1024px) 620px, 100vw"
                  className="object-cover"
                />
              </div>

              {galleryImages.map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-square overflow-hidden rounded-2xl border border-raspberry/10 bg-white"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 140px, 25vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <article className="flex flex-col justify-center">
            <p className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-raspberry">
              <ShieldCheck className="h-4 w-4" />
              Disponible à Bamako
            </p>
            <p className="text-sm font-semibold text-raspberry">Biodance</p>
            <h1 className="mt-2 font-heading text-4xl font-semibold leading-tight text-wine lg:text-5xl">
              Bio Collagen Real Deep Mask
            </h1>
            <p className="mt-4 text-sm leading-7 text-ink/70">
              Masque hydrogel au collagène pour hydrater, illuminer et donner un effet peau fraîche. Une routine simple pour retrouver un éclat net.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <p className="rounded-xl bg-white px-5 py-3 text-3xl font-bold text-ink shadow-sm">
                2 000 FCFA
              </p>
              <span className="rounded-xl border border-gold/40 bg-white/70 px-4 py-3 text-sm font-semibold text-ink/70">
                Livraison Bamako : 1 000 FCFA
              </span>
            </div>

            <div className="mt-6 grid gap-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 text-sm font-semibold text-ink/75">
                  <Check className="h-5 w-5 text-raspberry" />
                  {benefit}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-raspberry px-6 text-sm font-bold uppercase text-white shadow-lg shadow-raspberry/25 transition hover:bg-wine"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                Commander sur WhatsApp
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-raspberry/25 bg-white/70 px-6 text-sm font-bold uppercase text-raspberry transition hover:border-raspberry"
                href="/#produit"
              >
                Retour à l'accueil
              </a>
            </div>
          </article>
        </section>

        <section className="grid gap-4 border-y border-raspberry/10 bg-white/60 px-5 py-6 sm:grid-cols-3 lg:px-14">
          <div className="flex items-center gap-4">
            <Truck className="h-8 w-8 text-raspberry" />
            <div>
              <p className="font-semibold text-wine">Livraison rapide</p>
              <p className="text-sm text-ink/65">Partout à Bamako : 1 000 FCFA</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ShieldCheck className="h-8 w-8 text-raspberry" />
            <div>
              <p className="font-semibold text-wine">Produit authentique</p>
              <p className="text-sm text-ink/65">Sélectionné avec soin</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Heart className="h-8 w-8 text-raspberry" />
            <div>
              <p className="font-semibold text-wine">Conseil simple</p>
              <p className="text-sm text-ink/65">Échange direct sur WhatsApp</p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 bg-gradient-to-r from-blush to-white px-5 py-10 lg:grid-cols-2 lg:px-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-raspberry">
              Conseils d'utilisation
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold text-wine">
              Une routine facile à ajouter à ton soin visage
            </h2>
          </div>
          <div className="grid gap-3">
            {steps.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-2xl border border-raspberry/10 bg-white px-4 py-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blush text-sm font-bold text-raspberry">
                  {index + 1}
                </span>
                <p className="text-sm leading-7 text-ink/75">{step}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
