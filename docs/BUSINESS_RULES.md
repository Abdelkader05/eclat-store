# ÉCLAT STORE — BUSINESS RULES

Version : 1.0  
Projet : Éclat Store  
Type : Plateforme e-commerce cosmétique  
Développement : Solo

---

# 0. Regles actuelles du MVP WhatsApp

Ces regles passent avant les sections futures du document tant que le projet reste en MVP WhatsApp :

- vendre un seul produit : Biodance Bio Collagen Real Deep Mask ;
- afficher le prix produit : 2 000 FCFA ;
- afficher la livraison partout a Bamako : 1 000 FCFA ;
- afficher le total estime : 3 000 FCFA ;
- diriger toutes les commandes vers WhatsApp au +223 62901424 ;
- demander dans le message WhatsApp : quantite, nom, quartier, telephone, disponibilite souhaitee ;
- ne pas ajouter de paiement en ligne ;
- ne pas ajouter de panier complet ;
- ne pas presenter de fonctionnalite non disponible comme active.

Les comptes client, favoris, panier, commandes backend et administration sont des evolutions futures.

---

# 1. Introduction

Ce document définit les règles métier officielles du projet Éclat Store.

Les règles métier représentent les comportements obligatoires de la plateforme.

Elles servent à :

- guider le développement ;
- éviter les incohérences ;
- permettre aux développeurs et aux IA de comprendre le fonctionnement attendu ;
- garantir une expérience client cohérente.

Aucune fonctionnalité ne doit être développée sans respecter ces règles.

---

# 2. Principes généraux

Éclat Store doit respecter ces principes :

## Authenticité

Tous les produits doivent être :

- vérifiés ;
- associés à une marque identifiable ;
- accompagnés d'informations complètes.

---

## Transparence

Le client doit toujours connaître :

- le prix réel ;
- les réductions ;
- les frais éventuels ;
- le statut de sa commande.

---

## Simplicité

L'utilisateur doit pouvoir :

- trouver un produit rapidement ;
- commander facilement ;
- suivre sa commande.

---

## Sécurité

Toutes les données sensibles doivent être protégées.

---

# 3. Utilisateurs

## Types d'utilisateurs

La plateforme possède deux rôles principaux :

```
CUSTOMER

ADMIN
```

---

# 4. Client (CUSTOMER)

Un client peut :

- créer un compte ;
- modifier son profil ;
- ajouter des produits aux favoris ;
- ajouter des produits au panier ;
- passer une commande ;
- consulter son historique ;
- laisser un avis.

---

Un client ne peut pas :

- modifier un produit ;
- modifier un stock ;
- accéder au dashboard admin ;
- voir les données privées d'autres utilisateurs.

---

# 5. Administrateur (ADMIN)

Un administrateur peut :

- gérer les produits ;
- gérer les catégories ;
- gérer les marques ;
- gérer les commandes ;
- gérer les utilisateurs ;
- gérer les promotions ;
- consulter les statistiques ;
- gérer les stocks.

---

# 6. Gestion des comptes

## Inscription

Lors de l'inscription :

Obligatoire :

- prénom ;
- nom ;
- email ou téléphone ;
- mot de passe.

Le système doit :

- vérifier les informations ;
- empêcher les doublons ;
- chiffrer le mot de passe.

---

## Connexion

Un utilisateur peut se connecter avec :

- email ;
- téléphone (prévu plus tard).

---

## Mot de passe

Règles :

- jamais stocké en clair ;
- hashé avec bcrypt ;
- possibilité de réinitialisation.

---

# 7. Produits

## Création produit

Chaque produit doit obligatoirement avoir :

```
Nom

Description

Prix

Image

Catégorie

Marque

Stock
```

---

Informations recommandées :

```
Ingrédients

Type de peau

Conseils utilisation

Poids

Dimensions

Origine

Avis
```

---

# 8. Prix

Un produit possède :

```
Prix normal

Prix promotionnel
```

---

Règles :

Si :

```
prix_promotion < prix_normal
```

Alors :

- afficher la réduction ;
- afficher l'ancien prix barré.

---

Sinon :

- ne pas afficher de promotion.

---

Un prix ne peut jamais être :

```
0

négatif
```

---

# 9. Promotions

Une promotion possède :

```
Nom

Type

Valeur

Date début

Date fin
```

---

Types possibles :

```
Pourcentage %

Montant fixe
```

---

Règles :

Une promotion expirée :

- n'est plus appliquée ;
- reste enregistrée dans l'historique.

---

Une réduction ne peut jamais dépasser le prix du produit.

---

# 10. Stock

Chaque produit possède un stock.

---

Statuts :

```
Disponible

Stock faible

Rupture
```

---

Règles :

Si :

```
stock = 0
```

Alors :

- impossible d'ajouter au panier ;
- bouton commander désactivé ;
- produit affiché comme indisponible.

---

Le stock diminue uniquement lorsque :

```
Commande confirmée
```

---

Une commande annulée peut restaurer le stock.

---

# 11. Panier

## Ajout produit

Un utilisateur peut ajouter un produit si :

- le produit existe ;
- le stock est suffisant.

---

## Quantité

La quantité doit respecter :

```
quantité >= 1
```

et :

```
quantité <= stock disponible
```

---

## Calcul panier

Le total doit inclure :

```
Prix produits

-

Réductions

+

Livraison

=

Total final
```

---

# 12. Panier invité

Un utilisateur non connecté peut :

- ajouter des produits ;
- modifier son panier.

Le panier est stocké temporairement.

---

Après connexion :

Regle future uniquement : si un panier invite est ajoute plus tard, il devra etre fusionne avec le compte utilisateur apres connexion.

---

# 13. Commandes

Une commande contient :

```
Client

Produits

Adresse

Livraison

Statut
```

---

# 14. Création d'une commande

Une commande est créée après :

```
Validation panier

+

Adresse valide

+

Mode livraison choisi
```

---

Avant confirmation :

Le système doit vérifier :

- disponibilité du stock ;
- prix actuel ;
- validité promotion.

---

# 15. Statuts commande

Une commande suit ce cycle :

```
PENDING

↓

PROCESSING

↓

SHIPPED

↓

DELIVERED
```

---

Annulation possible :

```
PENDING

PROCESSING
```

---

Une commande DELIVERED ne peut plus être annulée.

---

# 16. Paiements

Aucune méthode de paiement n'est intégrée pour le moment.

Le projet ne doit pas implémenter :

- méthode de paiement en ligne ;
- webhook de paiement ;
- vérification automatique de transaction.

Une commande est créée et suivie sans paiement en ligne.

Le règlement éventuel est traité hors plateforme jusqu'à nouvelle décision projet.

---

# 17. Livraison

Zones :

```
Bamako

Régions du Mali
```

---

Une livraison possède :

```
Adresse

Téléphone

Frais

Statut

Numéro suivi
```

---

Statuts :

```
PREPARING

SHIPPED

OUT_FOR_DELIVERY

DELIVERED
```

---

# 18. Avis clients

Conditions :

Un utilisateur peut laisser un avis uniquement si :

```
Produit acheté

+

Commande terminée
```

---

Règles :

- un client = un avis par produit ;
- note obligatoire ;
- commentaire optionnel.

---

Note :

```
1 à 5 étoiles
```

---

# 19. Favoris

Un utilisateur peut :

- ajouter un produit ;
- retirer un produit.

---

Un produit favori :

- n'est pas réservé ;
- peut devenir indisponible.

---

# 20. Recherche

La recherche doit permettre :

Recherche par :

- nom produit ;
- marque ;
- catégorie.

---

Résultats :

Triables par :

- prix ;
- popularité ;
- nouveauté ;
- avis.

---

# 21. Catégories

Catégories principales :

```
Soins visage

Corps

Cheveux

Maquillage

Accessoires

Nouveautés

Promotions
```

---

Un produit doit appartenir à au moins une catégorie.

---

# 22. Marques

Une marque possède :

```
Nom

Logo

Description

Pays origine
```

---

Un produit doit être associé à une marque.

---

# 23. Notifications

Types :

```
Commande créée

Commande expédiée

Commande livrée

Promotion
```

---

# 24. Sécurité

Obligatoire :

- validation des entrées ;
- protection API ;
- limitation des requêtes ;
- contrôle permissions ;
- protection données personnelles.

---

# 25. Suppression des données

Suppression définitive interdite pour :

- commandes ;
- historiques.

Utiliser :

```
Soft Delete
```

---

# 26. Règles administrateur

Toute action admin importante doit être enregistrée :

Exemples :

- modification prix ;
- suppression produit ;
- changement stock ;
- modification commande.

---

# 27. Objectif final

Toutes les fonctionnalités d'Éclat Store doivent respecter ces règles afin de créer une plateforme :

- fiable ;
- professionnelle ;
- sécurisée ;
- évolutive ;
- adaptée au marché malien et africain.
