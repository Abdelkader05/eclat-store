# Éclat Store

Éclat Store est une boutique beauté pensée pour le marché malien.

La version actuellement publiée est un MVP WhatsApp centré sur un seul produit :

- Produit : Biodance Bio Collagen Real Deep Mask
- Prix : 2 000 FCFA
- Livraison : partout à Bamako pour 1 000 FCFA
- Total estimé : 3 000 FCFA
- Commande : WhatsApp vers +223 62901424

Le backend Express est conservé dans le dépôt pour les évolutions futures, mais il n'est pas déployé pour cette version. Aucun paiement en ligne et aucun panier complet ne doivent être ajoutés dans le périmètre actuel.

## Stack

- Frontend : Next.js, React, TypeScript, TailwindCSS, Framer Motion
- Backend : Node.js, Express, TypeScript
- Base de données prévue : PostgreSQL, Prisma ORM
- Déploiement actuel : frontend sur Vercel

## Structure

```text
frontend/
backend/
docs/
```

## Commandes

Installer les dépendances :

```bash
pnpm install
```

Vérifier le frontend :

```bash
pnpm --filter frontend lint
pnpm --filter frontend typecheck
pnpm --filter frontend build
```

Vérifier le backend :

```bash
pnpm --filter backend typecheck
pnpm --filter backend build
```

Lancer le frontend en local :

```bash
pnpm --filter frontend dev
```

Lancer le backend en local, seulement si nécessaire :

```bash
pnpm --filter backend dev
```

## Publication

Le frontend est publié sur Vercel depuis la branche `main` :

```text
https://eclat-store-frontend.vercel.app/
```

Après une modification frontend :

1. Lancer lint, typecheck et build.
2. Commit.
3. Push sur GitHub.
4. Vérifier le déploiement Vercel.
