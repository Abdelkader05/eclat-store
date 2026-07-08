import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { biodanceProduct, formatFcfa, siteUrl, totalPrice } from "@/data/biodance-product";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Éclat Store | Masque Biodance à Bamako",
  description: `Commandez le ${biodanceProduct.name} à Bamako. Produit ${formatFcfa(biodanceProduct.price)}, livraison ${formatFcfa(biodanceProduct.deliveryFee)}, total estimé ${formatFcfa(totalPrice)}.`,
  openGraph: {
    title: "Éclat Store | Masque Biodance à Bamako",
    description: "Commande simple sur WhatsApp, livraison partout à Bamako.",
    url: siteUrl,
    siteName: "Éclat Store",
    images: [
      {
        url: biodanceProduct.mainImage.src,
        width: 1200,
        height: 1200,
        alt: biodanceProduct.mainImage.alt
      }
    ],
    locale: "fr_ML",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
