export const siteUrl = "https://eclat-store-frontend.vercel.app";

export const whatsappPhone = "22362901424";

export const biodanceProduct = {
  name: "Biodance Bio Collagen Real Deep Mask",
  shortName: "Bio Collagen Real Deep Mask",
  brand: "Biodance",
  slug: "biodance-bio-collagen-real-deep-mask",
  productUrl: "/product/biodance-bio-collagen-real-deep-mask",
  officialProductUrl: "https://biodance.com/products/biodance-bio-collagen-real-deep-mask",
  price: 2000,
  deliveryFee: 1000,
  currency: "FCFA",
  availability: "Disponible à Bamako",
  location: "Bamako",
  description:
    "Masque hydrogel au collagène pour hydrater en profondeur, soutenir l'élasticité et donner un effet peau fraîche.",
  shortDescription:
    "Le soin hydrogel Biodance pour une peau plus fraîche, plus lumineuse et mieux hydratée.",
  mainImage: {
    src: "/biodance-mask.png",
    alt: "Biodance Bio Collagen Real Deep Mask disponible à Bamako"
  },
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
  benefits: [
    "Hydratation profonde avec acide hyaluronique oligo",
    "Aide à lisser l'apparence des pores",
    "Soutient l'élasticité et l'éclat de la peau",
    "Formule pensée aussi pour les peaux sensibles"
  ],
  landingHighlights: [
    "Hydratation intense",
    "Éclat naturel",
    "Texture hydrogel",
    "Idéal routine visage"
  ],
  officialBenefits: [
    {
      title: "Hydratation profonde",
      text: "L'acide hyaluronique oligo aide à hydrater la surface de la peau et à apporter une sensation de confort plus durable."
    },
    {
      title: "Pores et fermeté",
      text: "Le collagène de faible poids moléculaire est mis en avant par Biodance pour aider à améliorer l'apparence des pores et l'élasticité."
    },
    {
      title: "Barrière cutanée",
      text: "La formule contient des probiotiques, pensés pour accompagner l'équilibre de la barrière de la peau."
    },
    {
      title: "Peaux sensibles",
      text: "Biodance présente ce masque comme hypoallergénique et formulé sans ingrédients irritants controversés."
    }
  ],
  keyIngredients: [
    "Low-Molecular Weight Collagen Peptide",
    "Galactomyces",
    "Oligo Hyaluronic Acid",
    "Niacinamide"
  ],
  customerResults: [
    "100% ont constaté une amélioration de l'apparence des pores",
    "95% ont trouvé leur peau plus hydratée",
    "90% ont trouvé leur peau plus lumineuse",
    "100% ont constaté une amélioration des rougeurs"
  ],
  usageSteps: [
    "Appliquer le masque sur une peau propre.",
    "Laisser poser selon ta routine et ton confort.",
    "Retirer puis masser doucement l'excédent sur le visage."
  ]
} as const;

export const totalPrice = biodanceProduct.price + biodanceProduct.deliveryFee;

export function formatFcfa(amount: number) {
  return `${new Intl.NumberFormat("fr-FR").format(amount)} ${biodanceProduct.currency}`;
}

export const whatsappMessage = [
  `Bonjour Éclat Store, je veux commander le ${biodanceProduct.name}.`,
  `Prix produit : ${formatFcfa(biodanceProduct.price)}.`,
  `Livraison partout à Bamako : ${formatFcfa(biodanceProduct.deliveryFee)}.`,
  `Total estimé : ${formatFcfa(totalPrice)}.`,
  "",
  "Quantité :",
  "Nom :",
  "Quartier :",
  "Téléphone :",
  "Disponibilité souhaitée :"
].join("\n");

export const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappMessage)}`;
