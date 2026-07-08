# ÉCLAT STORE — FEATURES DOCUMENTATION

Version : 1.0  
Projet : Éclat Store  
Type : Plateforme e-commerce cosmétique  
Développement : Solo

Version actuellement publiée :

- landing page produit unique ;
- produit : Biodance Bio Collagen Real Deep Mask ;
- prix : 2 000 FCFA ;
- livraison : partout à Bamako pour 1 000 FCFA ;
- total estimé : 3 000 FCFA ;
- commande : WhatsApp vers +223 62901424 ;
- site : https://eclat-store-frontend.vercel.app/ ;
- backend non requis pour cette version.

---

# 1. Introduction

Ce document décrit toutes les fonctionnalités prévues pour Éclat Store.

Chaque fonctionnalité contient :

- son objectif ;
- son fonctionnement ;
- les éléments nécessaires ;
- les règles associées ;
- les évolutions possibles.

Ce document sert de référence pendant le développement.

---

# 2. Vue générale des fonctionnalités

## Client

```
Inscription

Connexion

Gestion profil

Recherche produits

Catalogue

Filtres

Page produit

Favoris

Panier

Commande

Livraison

Avis

Notifications

Historique
```

---

## Administrateur

```
Dashboard

Gestion produits

Gestion marques

Gestion catégories

Gestion commandes

Gestion utilisateurs

Gestion stocks

Gestion promotions

Statistiques
```

---

# 3. Authentification

## Objectif

Permettre aux utilisateurs de créer un compte et accéder à leurs fonctionnalités personnelles.

---

# Inscription

## Description

Création d'un nouveau compte client.

---

## Données nécessaires

```
Prénom

Nom

Email

Téléphone

Mot de passe
```

---

## Fonctionnement

1. L'utilisateur remplit le formulaire.
2. Les données sont validées.
3. Le mot de passe est chiffré.
4. Le compte est créé.
5. L'utilisateur peut se connecter.

---

## Règles

- Email unique.
- Mot de passe jamais stocké en clair.
- Validation obligatoire.

---

# Connexion

## Description

Permettre à un utilisateur existant d'accéder à son compte.

---

Méthode :

```
Email

+

Mot de passe
```

---

Après connexion :

Création d'une session JWT.

---

# Mot de passe oublié

Fonction :

- demander une réinitialisation ;
- envoyer un lien ;
- créer un nouveau mot de passe.

---

# 4. Gestion du profil

## Objectif

Permettre au client de gérer ses informations.

---

Fonctions :

```
Modifier nom

Modifier téléphone

Modifier adresse

Changer mot de passe

Ajouter avatar
```

---

# 5. Page d'accueil

## Objectif

Présenter Éclat Store et pousser les achats.

---

Sections :

```
Navbar

Hero

Catégories

Produits populaires

Nouveautés

Promotions

Marques

Avantages

Newsletter

Footer
```

---

## Hero

Contient :

```
Image principale

Titre

Description

Bouton CTA
```

---

CTA possibles :

```
Découvrir les produits

Voir les promotions
```

---

# 6. Catalogue produits

## Objectif

Permettre de découvrir tous les produits.

---

Page :

```
/catalog
```

---

Fonctions :

- affichage grille ;
- affichage liste ;
- recherche ;
- filtres ;
- tri.

---

# Recherche

Recherche par :

```
Nom

Marque

Catégorie
```

---

# Filtres

Filtres disponibles :

```
Prix

Marque

Catégorie

Type de peau

Disponibilité
```

---

# Tri

Options :

```
Plus récent

Prix croissant

Prix décroissant

Popularité

Meilleures notes
```

---

# 7. Page produit

## Objectif

Présenter toutes les informations nécessaires avant achat.

---

URL :

```
/product/[slug]
```

---

Informations :

```
Images

Nom

Marque

Prix

Promotion

Description

Stock

Avis

Ingrédients

Conseils utilisation

Produits similaires
```

---

Actions :

```
Ajouter panier

Ajouter favoris

Partager
```

---

# Galerie images

Fonctions :

- image principale ;
- miniatures ;
- zoom.

---

# 8. Système favoris

## Objectif

Permettre de sauvegarder des produits.

---

Fonctions :

Ajouter favoris

Retirer favoris

Voir liste favoris

---

Règles :

- utilisateur connecté obligatoire ;
- un produit une seule fois.

---

# 9. Panier

## Objectif

Préparer une commande.

---

Fonctions :

```
Ajouter produit

Modifier quantité

Supprimer produit

Voir total

Appliquer code promo
```

---

Informations affichées :

```
Produit

Prix

Quantité

Sous-total

Livraison

Total
```

---

# Panier invité

Un visiteur peut utiliser le panier sans compte.

Après connexion :

Fusion automatique avec le compte.

---

# 10. Checkout (commande)

## Objectif

Transformer le panier en commande.

---

Étapes :

```
Panier

↓

Adresse

↓

Livraison

↓

Confirmation
```

---

# Adresse

L'utilisateur peut :

- choisir une adresse existante ;
- créer une nouvelle adresse.

---

# Livraison

Choix :

```
Bamako

Régions
```

---

# 11. Paiement

## Objectif

Le paiement en ligne n'est pas intégré pour le moment.

---

Aucun moyen de paiement ne doit être développé dans la première version :

- paiement en ligne ;
- webhook de paiement.

---

Fonctionnement temporaire :

```
Créer commande

↓

Suivi commande
```

Le règlement éventuel est géré hors plateforme jusqu'à nouvelle décision projet.

---

# 12. Suivi commande

## Objectif

Permettre au client de suivre sa commande.

---

Statuts :

```
En attente

Payée

Préparation

Expédiée

Livrée

Annulée
```

---

Informations :

```
Numéro commande

Date

Produits

Montant

Statut

Suivi livraison
```

---

# 13. Historique commandes

## Objectif

Permettre de revoir les anciens achats.

---

Fonctions :

- liste commandes ;
- détails commande ;
- télécharger facture (future version).

---

# 14. Avis clients

## Objectif

Créer la confiance.

---

Conditions :

L'utilisateur doit avoir acheté le produit.

---

Fonctions :

```
Donner une note

Écrire commentaire

Voir avis
```

---

Note :

```
1 à 5 étoiles
```

---

# 15. Notifications

## Objectif

Informer l'utilisateur.

---

Types :

```
Commande créée

Commande expédiée

Promotion

Nouveauté
```

---

Canaux futurs :

```
Email

Push mobile

SMS
```

---

# 16. Newsletter

## Objectif

Créer une base marketing.

---

Fonctions :

- inscription email ;
- recevoir promotions ;
- recevoir nouveautés.

---

# 17. Codes promotionnels

## Objectif

Permettre des réductions.

---

Fonctions :

Créer code.

Appliquer code.

Calculer réduction.

---

Types :

```
Pourcentage

Montant fixe
```

---

# 18. Gestion marques

## Administrateur

Créer :

```
Nom

Logo

Description

Pays origine
```

---

Afficher :

- page marque ;
- liste produits associés.

---

# 19. Gestion catégories

## Administrateur

Créer :

```
Nom

Description

Image
```

---

Exemples :

```
Visage

Corps

Cheveux

Maquillage
```

---

# 20. Gestion produits ADMIN

## Objectif

Permettre la gestion complète du catalogue.

---

Actions :

Créer produit.

Modifier produit.

Supprimer produit.

Ajouter images.

Modifier stock.

Ajouter promotion.

---

# 21. Gestion commandes ADMIN

Fonctions :

Voir commandes.

Modifier statut.

Changer livraison.

---

# 22. Gestion utilisateurs ADMIN

Fonctions :

Voir utilisateurs.

Désactiver compte.

Modifier rôle.

Voir historique.

---

# 23. Gestion stocks

## Objectif

Éviter les ruptures.

---

Fonctions :

```
Voir stock

Modifier quantité

Alerte stock faible

Historique mouvements
```

---

# 24. Dashboard statistiques

## Objectif

Suivre les performances.

---

Statistiques :

```
Chiffre d'affaires

Nombre commandes

Produits populaires

Clients actifs

Produits faibles stocks

Ventes par période
```

---

# 25. Fonctionnalités futures

## Application mobile

Android / iOS.

---

## Programme fidélité

Points clients.

Récompenses.

---

## Marketplace

Vendeurs externes.

---

## IA recommandation

Suggestions produits.

Analyse préférences.

---

## Blog beauté

Articles :

- conseils ;
- routines ;
- guides.

---

# 26. Priorité de développement

## Version 1 — Essentiel

```
Accueil

Catalogue

Produits

Compte

Panier

Commande

Livraison

Admin
```

---

## Version 2

```
Favoris

Avis

Notifications

Newsletter

Promotions avancées
```

---

## Version 3

```
Application mobile

Marketplace

IA

Fidélité

Blog
```

---

# Objectif final

Créer une plateforme e-commerce cosmétique complète, moderne et évolutive permettant aux clients d'acheter facilement des produits authentiques tout en donnant à Éclat Store tous les outils nécessaires pour gérer son activité.
