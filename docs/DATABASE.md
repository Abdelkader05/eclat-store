# ÉCLAT STORE — DATABASE DOCUMENTATION

Version : 1.1  
Projet : Éclat Store  
Base de données : PostgreSQL  
ORM : Prisma

---

# 1. Introduction

Ce document décrit la structure officielle de la base de données Éclat Store.

Objectifs :

- définir les tables ;
- définir les relations ;
- guider la création du schéma Prisma ;
- éviter les incohérences pendant le développement.

Décisions validées :

- un produit peut appartenir à plusieurs catégories ;
- aucune intégration de paiement n'est prévue pour le moment ;
- aucune table `payments` ne doit être créée dans la première version.

---

# 2. Conventions

Tables :

```text
snake_case
```

Colonnes :

```text
snake_case
```

Identifiants :

```text
UUID
```

Champs communs recommandés :

```text
id
created_at
updated_at
deleted_at
```

`deleted_at` est utilisé pour le soft delete lorsque la table le nécessite.

---

# 3. Vue Relationnelle

```text
users
├── addresses
├── orders
├── reviews
├── favorites
└── notifications

products
├── product_images
├── product_categories
├── reviews
├── favorites
└── order_items

categories
└── product_categories

brands
└── products

orders
├── order_items
└── deliveries
```

---

# 4. Table Users

Nom :

```text
users
```

Rôle :

Stocker les comptes clients et administrateurs.

Champs :

| Champ | Type | Description |
|-|-|-|
| id | UUID | Identifiant unique |
| first_name | VARCHAR | Prénom |
| last_name | VARCHAR | Nom |
| email | VARCHAR | Email unique |
| phone | VARCHAR | Téléphone |
| password | VARCHAR | Mot de passe hashé |
| role | ENUM | CUSTOMER ou ADMIN |
| avatar | TEXT | Image profil |
| is_active | BOOLEAN | Compte actif |
| created_at | TIMESTAMP | Date création |
| updated_at | TIMESTAMP | Date modification |
| deleted_at | TIMESTAMP | Soft delete |

Relations :

- un utilisateur possède plusieurs adresses ;
- un utilisateur possède plusieurs commandes ;
- un utilisateur possède plusieurs avis ;
- un utilisateur possède plusieurs favoris ;
- un utilisateur possède plusieurs notifications.

---

# 5. Table Addresses

Nom :

```text
addresses
```

Rôle :

Stocker les adresses clients.

Champs :

| Champ | Type | Description |
|-|-|-|
| id | UUID | Identifiant |
| user_id | UUID | Propriétaire |
| full_name | VARCHAR | Nom complet |
| phone | VARCHAR | Téléphone |
| city | VARCHAR | Ville |
| region | VARCHAR | Région |
| address | TEXT | Adresse complète |
| is_default | BOOLEAN | Adresse principale |
| created_at | TIMESTAMP | Date création |
| updated_at | TIMESTAMP | Date modification |

---

# 6. Table Brands

Nom :

```text
brands
```

Rôle :

Stocker les marques cosmétiques.

Champs :

| Champ | Type | Description |
|-|-|-|
| id | UUID | Identifiant |
| name | VARCHAR | Nom |
| slug | VARCHAR | Slug unique |
| description | TEXT | Description |
| logo | TEXT | URL du logo |
| logo_public_id | VARCHAR | Identifiant Cloudinary |
| country | VARCHAR | Pays d'origine |
| is_active | BOOLEAN | Marque active |
| created_at | TIMESTAMP | Date création |
| updated_at | TIMESTAMP | Date modification |
| deleted_at | TIMESTAMP | Soft delete |

Relation :

- une marque possède plusieurs produits.

---

# 7. Table Categories

Nom :

```text
categories
```

Rôle :

Organiser les produits.

Champs :

| Champ | Type | Description |
|-|-|-|
| id | UUID | Identifiant |
| name | VARCHAR | Nom |
| slug | VARCHAR | Slug unique |
| description | TEXT | Description |
| image | TEXT | URL image |
| image_public_id | VARCHAR | Identifiant Cloudinary |
| is_active | BOOLEAN | Catégorie active |
| created_at | TIMESTAMP | Date création |
| updated_at | TIMESTAMP | Date modification |
| deleted_at | TIMESTAMP | Soft delete |

Relation :

- une catégorie peut contenir plusieurs produits ;
- un produit peut appartenir à plusieurs catégories ;
- la relation passe par `product_categories`.

---

# 8. Table Products

Nom :

```text
products
```

Rôle :

Stocker le catalogue produit.

Champs :

| Champ | Type | Description |
|-|-|-|
| id | UUID | Identifiant |
| brand_id | UUID | Marque |
| name | VARCHAR | Nom produit |
| slug | VARCHAR | Slug unique |
| description | TEXT | Description |
| price | DECIMAL | Prix normal |
| sale_price | DECIMAL | Prix promotionnel |
| stock | INTEGER | Quantité disponible |
| weight | VARCHAR | Poids |
| skin_type | VARCHAR | Type de peau |
| ingredients | TEXT | Ingrédients |
| usage | TEXT | Conseils d'utilisation |
| is_active | BOOLEAN | Produit actif |
| views | INTEGER | Popularité |
| created_at | TIMESTAMP | Date création |
| updated_at | TIMESTAMP | Date modification |
| deleted_at | TIMESTAMP | Soft delete |

Règles :

- `price` doit être supérieur à 0 ;
- `sale_price` doit être nul ou inférieur à `price` ;
- `stock` ne peut pas être négatif ;
- un produit doit avoir au moins une catégorie via `product_categories`.

Relations :

- un produit appartient à une marque ;
- un produit possède plusieurs images ;
- un produit appartient à plusieurs catégories ;
- un produit peut avoir plusieurs avis ;
- un produit peut être dans plusieurs favoris ;
- un produit peut apparaître dans plusieurs commandes.

---

# 9. Table Product Categories

Nom :

```text
product_categories
```

Rôle :

Lier les produits aux catégories.

Champs :

| Champ | Type | Description |
|-|-|-|
| id | UUID | Identifiant |
| product_id | UUID | Produit |
| category_id | UUID | Catégorie |
| created_at | TIMESTAMP | Date création |

Contraintes :

- unique `product_id` + `category_id` ;
- `product_id` obligatoire ;
- `category_id` obligatoire.

---

# 10. Table Product Images

Nom :

```text
product_images
```

Rôle :

Stocker les images produits hébergées sur Cloudinary.

Champs :

| Champ | Type | Description |
|-|-|-|
| id | UUID | Identifiant |
| product_id | UUID | Produit |
| url | TEXT | URL Cloudinary |
| public_id | VARCHAR | Identifiant Cloudinary |
| alt | VARCHAR | Texte alternatif |
| position | INTEGER | Ordre d'affichage |
| created_at | TIMESTAMP | Date création |
| updated_at | TIMESTAMP | Date modification |

---

# 11. Table Favorites

Nom :

```text
favorites
```

Rôle :

Stocker les produits favoris des utilisateurs.

Champs :

| Champ | Type | Description |
|-|-|-|
| id | UUID | Identifiant |
| user_id | UUID | Utilisateur |
| product_id | UUID | Produit |
| created_at | TIMESTAMP | Date création |

Contrainte :

- unique `user_id` + `product_id`.

---

# 12. Table Reviews

Nom :

```text
reviews
```

Rôle :

Stocker les avis clients.

Champs :

| Champ | Type | Description |
|-|-|-|
| id | UUID | Identifiant |
| user_id | UUID | Utilisateur |
| product_id | UUID | Produit |
| rating | INTEGER | Note de 1 à 5 |
| comment | TEXT | Commentaire |
| is_verified | BOOLEAN | Avis lié à un achat livré |
| created_at | TIMESTAMP | Date création |
| updated_at | TIMESTAMP | Date modification |

Contraintes :

- `rating` doit être compris entre 1 et 5 ;
- unique `user_id` + `product_id`.

---

# 13. Table Carts

Nom :

```text
carts
```

Rôle :

Stocker le panier utilisateur côté backend pour les comptes connectés.

Champs :

| Champ | Type | Description |
|-|-|-|
| id | UUID | Identifiant |
| user_id | UUID | Utilisateur |
| created_at | TIMESTAMP | Date création |
| updated_at | TIMESTAMP | Date modification |

Note :

Le panier invité peut rester côté navigateur dans le MVP, puis être fusionné avec le panier utilisateur après connexion.

---

# 14. Table Cart Items

Nom :

```text
cart_items
```

Rôle :

Stocker les produits du panier.

Champs :

| Champ | Type | Description |
|-|-|-|
| id | UUID | Identifiant |
| cart_id | UUID | Panier |
| product_id | UUID | Produit |
| quantity | INTEGER | Quantité |
| created_at | TIMESTAMP | Date création |
| updated_at | TIMESTAMP | Date modification |

Contraintes :

- `quantity` doit être supérieur ou égal à 1 ;
- unique `cart_id` + `product_id`.

---

# 15. Table Orders

Nom :

```text
orders
```

Rôle :

Stocker les commandes clients.

Champs :

| Champ | Type | Description |
|-|-|-|
| id | UUID | Identifiant |
| user_id | UUID | Client |
| address_id | UUID | Adresse sélectionnée |
| status | ENUM | Statut commande |
| subtotal | DECIMAL | Total produits |
| shipping_cost | DECIMAL | Frais livraison |
| discount | DECIMAL | Réduction |
| total | DECIMAL | Total final |
| tracking_number | VARCHAR | Numéro de suivi |
| customer_note | TEXT | Note client |
| created_at | TIMESTAMP | Date création |
| updated_at | TIMESTAMP | Date modification |

Statuts :

```text
PENDING
PROCESSING
SHIPPED
DELIVERED
CANCELLED
```

Règles :

- aucune colonne de paiement n'est requise ;
- le total est calculé à partir des produits, réductions et frais de livraison ;
- les commandes ne doivent pas être supprimées définitivement.

---

# 16. Table Order Items

Nom :

```text
order_items
```

Rôle :

Stocker les produits achetés dans une commande.

Champs :

| Champ | Type | Description |
|-|-|-|
| id | UUID | Identifiant |
| order_id | UUID | Commande |
| product_id | UUID | Produit |
| quantity | INTEGER | Quantité |
| price | DECIMAL | Prix au moment de l'achat |
| product_name | VARCHAR | Nom produit au moment de l'achat |
| created_at | TIMESTAMP | Date création |

Important :

Le prix et le nom du produit sont sauvegardés au moment de la commande.

---

# 17. Paiements

Aucune table de paiement ne doit être créée pour le moment.

Ne pas modéliser :

- `payments` ;
- `payment_methods` ;
- `transactions` ;
- webhooks de paiement ;
- statuts de transaction.

Le règlement éventuel est traité hors plateforme jusqu'à nouvelle décision projet.

---

# 18. Table Deliveries

Nom :

```text
deliveries
```

Rôle :

Stocker le suivi de livraison.

Champs :

| Champ | Type | Description |
|-|-|-|
| id | UUID | Identifiant |
| order_id | UUID | Commande |
| status | ENUM | Statut livraison |
| tracking_number | VARCHAR | Numéro de suivi |
| delivered_at | TIMESTAMP | Date livraison |
| created_at | TIMESTAMP | Date création |
| updated_at | TIMESTAMP | Date modification |

Statuts :

```text
PREPARING
SHIPPED
OUT_FOR_DELIVERY
DELIVERED
```

---

# 19. Table Coupons

Nom :

```text
coupons
```

Rôle :

Stocker les codes promotionnels.

Champs :

| Champ | Type | Description |
|-|-|-|
| id | UUID | Identifiant |
| code | VARCHAR | Code unique |
| type | ENUM | PERCENTAGE ou FIXED |
| value | DECIMAL | Valeur |
| expiration_date | DATE | Date expiration |
| active | BOOLEAN | Coupon actif |
| created_at | TIMESTAMP | Date création |
| updated_at | TIMESTAMP | Date modification |

---

# 20. Table Notifications

Nom :

```text
notifications
```

Rôle :

Stocker les notifications utilisateurs.

Champs :

| Champ | Type | Description |
|-|-|-|
| id | UUID | Identifiant |
| user_id | UUID | Utilisateur |
| title | VARCHAR | Titre |
| message | TEXT | Message |
| read | BOOLEAN | Lu ou non |
| created_at | TIMESTAMP | Date création |
| updated_at | TIMESTAMP | Date modification |

Types de notifications :

- commande créée ;
- commande expédiée ;
- commande livrée ;
- promotion ;
- nouveauté.

---

# 21. Table Stocks

Nom :

```text
stocks
```

Rôle :

Préparer une gestion avancée du stock.

Champs :

| Champ | Type | Description |
|-|-|-|
| id | UUID | Identifiant |
| product_id | UUID | Produit |
| quantity | INTEGER | Quantité disponible |
| reserved | INTEGER | Quantité réservée |
| created_at | TIMESTAMP | Date création |
| updated_at | TIMESTAMP | Date modification |

Note :

Pour éviter une double source de vérité, la première implémentation peut utiliser `products.stock`. La table `stocks` doit être ajoutée uniquement si une gestion avancée des mouvements de stock est développée.

---

# 22. Table Admin Logs

Nom :

```text
admin_logs
```

Rôle :

Historiser les actions administrateur importantes.

Champs :

| Champ | Type | Description |
|-|-|-|
| id | UUID | Identifiant |
| admin_id | UUID | Administrateur |
| action | VARCHAR | Action réalisée |
| entity | VARCHAR | Entité concernée |
| entity_id | UUID | Identifiant entité |
| details | JSON | Détails |
| created_at | TIMESTAMP | Date création |

---

# 23. Index Recommandés

Créer des index sur :

```text
users.email
users.phone
products.slug
products.name
brands.slug
categories.slug
product_categories.product_id
product_categories.category_id
orders.status
orders.user_id
order_items.order_id
reviews.product_id
favorites.user_id
```

---

# 24. Suppression Des Données

Utiliser soft delete pour :

- produits ;
- utilisateurs ;
- marques ;
- catégories.

Ne jamais supprimer définitivement :

- commandes ;
- historiques administrateur.

---

# 25. Sécurité

Obligatoire :

- mots de passe hashés avec bcrypt ;
- UUID pour les identifiants ;
- validation des données avec Zod ;
- permissions selon rôle ;
- aucune donnée sensible exposée ;
- aucune donnée de paiement stockée.

---

# 26. Évolution Future

La base doit permettre d'ajouter plus tard :

- vendeurs tiers ;
- marketplace ;
- points fidélité ;
- abonnements ;
- recommandations IA ;
- multi-pays ;
- multi-devises.

Les paiements ne sont pas dans le périmètre actuel. Toute future intégration devra faire l'objet d'une décision projet explicite et d'une mise à jour de cette documentation.
