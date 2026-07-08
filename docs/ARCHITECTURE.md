# ÉCLAT STORE — ARCHITECTURE DU PROJET

Version : 1.0  
Projet : Éclat Store  
Type : Plateforme e-commerce cosmétique  
Développeur : Projet individuel

---

# 0. Statut actuel du MVP

La version en production est volontairement plus simple que l'architecture cible :

- frontend Next.js deploye sur Vercel ;
- backend Express conserve dans le depot, mais non deploye ;
- aucune base de donnees utilisee par le parcours d'achat actuel ;
- vente produit unique via WhatsApp ;
- Biodance Bio Collagen Real Deep Mask a 2 000 FCFA ;
- livraison partout a Bamako a 1 000 FCFA ;
- total estime affiche : 3 000 FCFA ;
- pas de paiement en ligne ;
- pas de panier complet.

Les sections backend, base de donnees, panier, compte client et administration decrivent l'evolution future, pas le MVP publie.

---

# 1. Introduction

Ce document décrit l'architecture technique complète du projet Éclat Store.

L'objectif est de définir :

- l'organisation du code ;
- le rôle de chaque dossier ;
- les responsabilités de chaque partie ;
- les règles d'organisation ;
- les choix techniques.

Cette architecture est conçue pour un développement en solo mais avec une structure professionnelle permettant une évolution future.

Le projet doit pouvoir évoluer vers :

- une application mobile ;
- une marketplace ;
- plusieurs pays ;
- plusieurs administrateurs ;
- une équipe de développement.

---

# 2. Vue globale du projet

Éclat Store est une plateforme e-commerce spécialisée dans la vente de produits cosmétiques.

Architecture générale :

```
Client

↓

Frontend Next.js

↓

API Backend Node.js

↓

Services métier

↓

Base PostgreSQL

↓

Services externes

- Stockage images
- Notifications
- Emails
```

---

# 3. Stack technique

## Frontend

Technologies :

- Next.js
- React
- TypeScript
- TailwindCSS
- Framer Motion

Responsabilités :

- Interface utilisateur
- Navigation
- Affichage produits
- Panier
- Compte client
- Dashboard admin

---

## Backend

Technologies :

- Node.js
- Express
- TypeScript

Responsabilités :

- API
- Authentification
- Logique métier
- Gestion commandes
- Sécurité

---

## Base de données

Technologies :

- PostgreSQL
- Prisma ORM

Responsabilités :

- Stockage utilisateurs
- Produits
- Commandes
- Avis
- Stocks

---

# 4. Structure principale

```
eclat-store/

├── frontend/
│
├── backend/
│
├── docs/
│
├── scripts/
│
├── README.md
├── ARCHITECTURE.md
├── DATABASE.md
├── API.md
├── FEATURES.md
├── BUSINESS_RULES.md
├── DEVELOPMENT_GUIDE.md
└── .gitignore
```

---

# 5. Frontend

Chemin :

```
frontend/
```

Le frontend contient toute l'expérience utilisateur.

---

Structure :

```
frontend/

src/

├── app/
├── components/
├── features/
├── hooks/
├── services/
├── lib/
├── utils/
├── constants/
├── config/
├── styles/
├── types/
└── middleware/
```

---

# 6. Dossier app/

Rôle :

Gestion des pages et routes Next.js.

Structure :

```
app/

layout.tsx

page.tsx

loading.tsx

error.tsx

not-found.tsx

catalog/

product/

cart/

checkout/

account/

admin/
```

---

Exemple :

```
app/catalog/page.tsx
```

Correspond à :

```
/catalog
```

---

# 7. Dossier components/

Rôle :

Contient les composants réutilisables.

Exemples :

```
Navbar

Footer

Button

Input

Card

ProductCard

Modal

Loader

Pagination

Carousel
```

Règle :

Un composant doit être indépendant et réutilisable.

---

# 8. Dossier features/

Rôle :

Regrouper chaque fonctionnalité.

Structure :

```
features/

auth/

product/

cart/

checkout/

review/

favorite/
```

Chaque fonctionnalité possède :

```
components/

hooks/

services/

types/

utils/
```

---

Exemple :

```
features/cart/

CartItem.tsx

useCart.ts

cart.service.ts

cart.types.ts
```

---

# 9. Dossier services frontend

Rôle :

Communication avec l'API.

Exemple :

```
product.service.ts

auth.service.ts

order.service.ts

shipping.service.ts
```

Les composants ne doivent jamais appeler directement l'API.

---

# 10. Backend

Chemin :

```
backend/
```

Structure :

```
src/

├── controllers/
├── routes/
├── services/
├── repositories/
├── middlewares/
├── validators/
├── database/
├── config/
├── utils/
├── types/
└── jobs/
```

---

# 11. Controllers

Rôle :

Recevoir les requêtes HTTP.

Exemple :

```
ProductController

OrderController

UserController
```

Ils :

- récupèrent les données ;
- appellent un service ;
- retournent une réponse.

Ils ne contiennent pas de logique métier.

---

# 12. Services backend

Le cœur du système.

Exemple :

```
AuthService

OrderService

ShippingService
```

Ils gèrent :

- calculs ;
- règles métier ;
- traitements complexes.

---

# 13. Repositories

Responsabilité :

Interaction avec la base de données.

Exemple :

```
ProductRepository

UserRepository

OrderRepository
```

Ils utilisent Prisma.

---

# 14. Middlewares

Gestion :

- authentification ;
- permissions ;
- erreurs ;
- sécurité.

Exemple :

```
auth.middleware.ts

admin.middleware.ts

error.middleware.ts
```

---

# 15. Base de données

Gestion :

```
database/

prisma/

schema.prisma

migrations/

seed/
```

---

Tables principales :

```
users

products

brands

categories

orders

order_items

reviews

favorites

stocks

notifications
```

Voir DATABASE.md pour le détail complet.

---

# 16. Services externes

## Images

Cloudinary

Utilisé pour :

- photos produits ;
- logos marques ;
- bannières.

---

## Paiement

Aucune intégration de paiement n'est prévue pour la première version.

Ne pas créer de module, service, route, webhook ou fournisseur de paiement tant qu'une nouvelle décision projet ne le demande pas explicitement.

---

# 17. Gestion des environnements

Fichiers :

```
.env

.env.local

.env.example
```

Les clés privées ne doivent jamais être dans Git.

---

# 18. Règles de code

## Général

- TypeScript obligatoire.
- Code simple et lisible.
- Pas de duplication.
- Fonctions courtes.
- Noms explicites.

---

## Frontend

Les composants doivent être :

- petits ;
- réutilisables ;
- indépendants.

---

## Backend

Séparation obligatoire :

Route

↓

Controller

↓

Service

↓

Repository

↓

Database

---

# 19. Gestion Git

Branches :

```
main

develop

feature/*
fix/*
```

Convention :

```
feature/cart-system

feature/order-checkout

fix/login-error
```

---

# 20. Objectif architectural

Créer une plateforme :

- professionnelle ;
- maintenable ;
- évolutive ;
- sécurisée ;
- compréhensible par une IA ou un nouveau développeur.

L'architecture doit éviter le code désorganisé et permettre à Éclat Store de devenir une vraie plateforme e-commerce.
