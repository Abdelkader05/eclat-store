# ÉCLAT STORE — ÉTAT DU PROJET

Date : 2026-07-07  
Version actuelle : v0.1 — Landing page produit unique

---

# 1. Ce qui a été fait

## Documentation

Les documents du projet ont été lus, corrigés et alignés avec les décisions actuelles :

- aucun paiement en ligne pour le moment ;
- produit pouvant appartenir à plusieurs catégories ;
- backend conservé dans l'architecture mais non nécessaire pour la première publication ;
- publication rapide priorisée avec une landing page produit unique.

Fichiers renommés :

- `ui.md` → `UI_GUIDELINES.md`
- `promp.md` → `PROMPTS.md`

Fichier corrigé :

- `DATABASE.md` a été réécrit proprement pour supprimer les incohérences et ajouter `product_categories`.

---

## Frontend

Le frontend Next.js est initialisé dans :

```text
frontend/
```

Stack :

- Next.js ;
- React ;
- TypeScript ;
- TailwindCSS ;
- Framer Motion ;
- Lucide Icons.

La page actuelle est une landing page de vente centrée sur :

```text
Biodance Bio Collagen Real Deep Mask
```

Détails affichés :

- prix : `2 000 FCFA` ;
- disponibilité : Bamako ;
- livraison : partout à Bamako pour `1 000 FCFA` ;
- total estimé : `3 000 FCFA` ;
- image produit réelle ;
- bouton WhatsApp de commande.

Lien WhatsApp :

```text
https://wa.me/22362901424
```

Message prérempli :

```text
Bonjour Éclat Store, je veux commander le masque Biodance Bio Collagen Real Deep Mask.
Prix produit : 2 000 FCFA.
Livraison partout à Bamako : 1 000 FCFA.
Total estimé : 3 000 FCFA.

Quantité :
Nom :
Quartier :
Téléphone :
Disponibilité souhaitée :
```

---

## Backend

Le backend Express TypeScript est initialisé dans :

```text
backend/
```

Architecture respectée :

```text
Routes
↓
Controllers
↓
Services
↓
Repositories
↓
Database
```

Le backend contient :

- serveur Express ;
- route health ;
- module produits initial ;
- Prisma ;
- schéma PostgreSQL ;
- relation `product_categories`.

Important :

Le backend n'est pas déployé sur Vercel pour le moment.  
La vente actuelle fonctionne sans backend grâce à la landing page et au bouton WhatsApp.

---

## GitHub

Le projet a été mis sur GitHub :

```text
https://github.com/Abdelkader05/eclat-store
```

Branche principale :

```text
main
```

Premier commit :

```text
Initial Eclat Store landing page
```

---

## Vercel

Le frontend est publié sur Vercel :

```text
https://eclat-store-frontend.vercel.app/
```

Configuration utilisée :

```text
Framework : Next.js
Root Directory : frontend
Build Command : pnpm build
Output : automatique Next.js
```

Le projet Vercel déployé est uniquement le frontend.

Ne pas déployer le backend Express tant qu'il n'est pas nécessaire.

---

## Plugin Vercel

Le plugin Vercel est installé et chargé dans Codex.

Commande utilisée :

```text
pnpm dlx plugins add vercel/vercel-plugin --target codex
```

État actuel :

```text
Installé et disponible.
```

---

# 2. Ce qui n'a pas été fait

Non développé volontairement :

- paiement en ligne ;
- panier complet ;
- compte client ;
- dashboard admin ;
- base PostgreSQL en production ;
- déploiement backend ;
- intégration Cloudinary réelle.

Ces éléments viendront après validation des prochaines priorités.

---

# 3. Priorité immédiate

Pour la suite, la priorité est :

1. Garder le MVP WhatsApp clair et fiable.
2. Vérifier régulièrement le site publié sur mobile.
3. Tester le bouton WhatsApp et le message prérempli.
4. Ajouter éventuellement un domaine personnalisé.
5. Ajouter ensuite les fonctionnalités commerciales minimales seulement après validation.
