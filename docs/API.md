# ÉCLAT STORE — API DOCUMENTATION

Version : 1.0  
Projet : Éclat Store  
Architecture : REST API  
Backend : Node.js + Express + TypeScript  
Base de données : PostgreSQL + Prisma

---

# 0. Statut actuel du MVP

La version publiee fonctionne comme une landing page Next.js de vente directe via WhatsApp.

- Frontend publie sur Vercel : `https://eclat-store-frontend.vercel.app/`
- Backend Express present dans le depot, mais non deploye.
- Aucune API n'est requise par le parcours d'achat actuel.
- Produit vendu : Biodance Bio Collagen Real Deep Mask.
- Prix produit : 2 000 FCFA.
- Livraison partout a Bamako : 1 000 FCFA.
- Total estime : 3 000 FCFA.
- Commande via WhatsApp : +223 62901424.
- Ne pas ajouter de paiement en ligne.
- Ne pas ajouter de panier complet pour le MVP actuel.

Le reste de ce document decrit la cible technique future du backend, a utiliser seulement quand le projet passera a une vraie API de commandes.

---

# 1. Introduction

Ce document définit toutes les API utilisées par Éclat Store.

L'API permet au frontend de communiquer avec le backend pour :

- gérer les utilisateurs ;
- afficher les produits ;
- gérer les commandes ;
- gérer l'administration.

---

# 2. Convention API

Base URL :


/api/v1


Exemple :


GET /api/v1/products


---

# 3. Format des réponses

## Succès

Format :

```json
{
  "success": true,
  "data": {}
}
Erreur

Format :

{
  "success": false,
  "message": "Erreur",
  "code": "ERROR_CODE"
}
4. Authentification

Méthode :

JWT Bearer Token

Header :

Authorization: Bearer TOKEN
5. Codes HTTP
Code	Signification
200	Succès
201	Création réussie
400	Données invalides
401	Non authentifié
403	Accès interdit
404	Non trouvé
500	Erreur serveur
6. AUTH API
Inscription
POST
/auth/register

Objectif :

Créer un compte utilisateur.

Body :

{
"firstName":"Abdel",
"lastName":"Sam",
"email":"user@email.com",
"phone":"76000000",
"password":"password"
}

Réponse :

{
"user":{
"id":"",
"email":"",
"role":"CUSTOMER"
},
"token":""
}
Connexion
POST
/auth/login

Body :

{
"email":"",
"password":""
}

Réponse :

{
"user":{},
"token":""
}
Déconnexion
POST
/auth/logout
7. UTILISATEURS
Profil utilisateur
GET
/users/me

Authentification obligatoire.

Réponse :

{
"id":"",
"name":"",
"email":"",
"phone":""
}
Modifier profil
PATCH
/users/me

Body :

{
"firstName":"",
"lastName":"",
"phone":""
}
Changer mot de passe
PATCH
/users/password
8. PRODUITS
Liste produits
GET
/products

Paramètres :

?page=1

?limit=20

?search=serum

?category=face

?brand=ordinary

?minPrice=1000

?maxPrice=50000

?sort=popular

Réponse :

{
"products":[],
"pagination":{
"page":1,
"total":100
}
}
Détail produit
GET
/products/:slug

Réponse :

{
"id":"",
"name":"",
"description":"",
"price":0,
"images":[],
"reviews":[]
}
Produits populaires
GET
/products/popular
Nouveautés
GET
/products/new
9. CATÉGORIES
Liste catégories
GET
/categories
Produits d'une catégorie
GET
/categories/:slug/products
10. MARQUES
Liste marques
GET
/brands
Détails marque
GET
/brands/:slug
11. FAVORIS

Authentification obligatoire.

Ajouter favori
POST
/favorites/:productId
Retirer favori
DELETE
/favorites/:productId
Liste favoris
GET
/favorites
12. PANIER
Voir panier
GET
/cart
Ajouter produit
POST
/cart/items

Body :

{
"productId":"",
"quantity":1
}
Modifier quantité
PATCH
/cart/items/:id

Body :

{
"quantity":2
}
Supprimer produit
DELETE
/cart/items/:id
Vider panier
DELETE
/cart
13. COMMANDES
Créer commande
POST
/orders

Body :

{
"addressId":"",
"deliveryNotes":""
}
Liste commandes utilisateur
GET
/orders
Détail commande
GET
/orders/:id
14. PAIEMENTS
Aucune intégration de paiement n'est prévue pour le moment.

Les routes de paiement ne doivent pas être créées dans la première version :

- POST /payments
- GET /payments/:id/status
- POST /payments/webhook

Une commande est créée sans paiement en ligne. Le règlement est traité hors plateforme jusqu'à nouvelle décision projet.

15. LIVRAISON
Suivi livraison
GET
/deliveries/:orderId

Réponse :

{
"status":"SHIPPED",
"trackingNumber":""
}
16. AVIS
Ajouter avis
POST
/products/:productId/reviews

Body :

{
"rating":5,
"comment":"Excellent produit"
}
Voir avis produit
GET
/products/:productId/reviews
17. NOTIFICATIONS
Liste notifications
GET
/notifications
Marquer comme lu
PATCH
/notifications/:id/read
18. ADMIN API

Toutes les routes admin nécessitent :

role = ADMIN
PRODUITS ADMIN
Créer produit

POST

/admin/products

Body :

{
"name":"",
"description":"",
"price":0,
"stock":10,
"brandId":"",
"categoryIds":[]
}
Modifier produit

PATCH

/admin/products/:id
Supprimer produit

DELETE

/admin/products/:id
STOCK ADMIN
Voir stocks

GET

/admin/stocks
Modifier stock

PATCH

/admin/stocks/:productId
COMMANDES ADMIN
Toutes les commandes

GET

/admin/orders
Modifier statut commande

PATCH

/admin/orders/:id/status

Body :

{
"status":"SHIPPED"
}
UTILISATEURS ADMIN
Liste utilisateurs

GET

/admin/users
Modifier rôle

PATCH

/admin/users/:id/role
STATISTIQUES ADMIN

GET

/admin/statistics

Retourne :

Chiffre affaires

Commandes

Clients

Produits populaires

Stocks faibles
19. Middleware API
Auth Middleware

Vérifie :

token valide ;
utilisateur connecté.
Admin Middleware

Vérifie :

rôle ADMIN.
Validation Middleware

Utilise :

Zod

Pour :

body ;
paramètres ;
query.
20. Sécurité API

Obligatoire :

HTTPS ;
JWT sécurisé ;
rate limiting ;
validation entrées ;
protection injection SQL ;
contrôle permissions.
21. Version future

Prévoir :

/api/v2

Pour :

application mobile ;
marketplace ;
partenaires externes.
Objectif final

Créer une API claire, sécurisée et évolutive permettant au frontend Éclat Store de communiquer efficacement avec toute la logique métier.


À ce stade, la documentation technique principale est presque complète.

Il reste surtout :

1. **`PROMPTS.md`** → pour donner des instructions parfaites aux IA de développement.  
2. **`DEPLOYMENT.md`** → pour expliquer comment mettre le site en ligne gratuitement.  
3. **`ROADMAP.md`** → pour gérer l'évolution du projet.
