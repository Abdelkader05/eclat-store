# ÉCLAT STORE — UI GUIDELINES

Version : 1.0  
Projet : Éclat Store  
Type : E-commerce cosmétique  
Design : Premium / Minimaliste / Féminin / Moderne

---

# 1. Introduction

Ce document définit toutes les règles visuelles et d'expérience utilisateur du projet Éclat Store.

L'objectif est de créer une interface qui transmet :

- qualité ;
- confiance ;
- élégance ;
- simplicité ;
- modernité.

Le site doit donner une impression premium tout en restant accessible et rapide à utiliser.

---

# 2. Principes de design

## Minimalisme

L'interface doit rester :

- propre ;
- aérée ;
- sans surcharge visuelle.

Éviter :

- trop de couleurs ;
- trop d'animations ;
- trop de textes inutiles.

---

## Mobile First

Le design doit être pensé d'abord pour mobile.

Ordre de conception :


Mobile

↓

Tablette

↓

Laptop

↓

Desktop


---

## Expérience utilisateur

Chaque action importante doit être évidente :

Exemples :

Ajouter au panier :

→ bouton visible immédiatement.

Chercher un produit :

→ recherche accessible rapidement.

Commander :

→ maximum de friction supprimée.

---

# 3. Identité visuelle

## Positionnement

Éclat Store doit ressembler à :

- une boutique cosmétique premium ;
- une marque de confiance ;
- une expérience moderne.

Inspirations :

- Sephora
- Apple
- Olive Young
- Stylevana
- YesStyle

---

# 4. Palette de couleurs

## Couleur principale

Rose framboise


#E84D84


Utilisation :

- boutons principaux ;
- liens importants ;
- éléments actifs ;
- promotions.

---

## Background principal

Rose poudré


#F8E8EC


Utilisation :

- fond global du site ;
- sections principales ;
- zones marketing.

Le site ne doit pas avoir un fond blanc dominant.

---

## Blanc


#FFFFFF


Utilisation :

- cartes produits ;
- formulaires ;
- fenêtres modales ;
- zones de contenu.

---

## Or premium


#D8B36A


Utilisation :

- détails luxueux ;
- badges premium ;
- effets secondaires.

Ne pas utiliser en excès.

---

## Texte principal


#2F2F2F


Utilisation :

- titres ;
- paragraphes ;
- informations produits.

---

## Gris secondaire


#EFEFEF


Utilisation :

- séparateurs ;
- bordures ;
- zones secondaires.

---

# 5. Typographie

## Police principale

Poppins

Utilisation :

- titres ;
- branding ;
- sections importantes.

---

## Police secondaire

Inter

Utilisation :

- textes ;
- descriptions ;
- formulaires ;
- boutons.

---

# 6. Hiérarchie des textes

## Titre principal

Exemple :

"Révélez votre éclat naturel"

Style :


Poppins Bold

48px Desktop

32px Mobile


---

## Titres sections


Poppins SemiBold

32px Desktop

24px Mobile


---

## Texte normal


Inter Regular

16px


---

## Petit texte


Inter

14px


---

# 7. Boutons

## Bouton principal

Exemple :

"Ajouter au panier"

Style :


Background:
#E84D84

Texte:
#FFFFFF

Radius:
12px

Padding:
16px 24px


---

Hover :


Rose vers Or

Transition:
200ms


---

## Bouton secondaire

Style :


Background:
Transparent

Border:
#E84D84

Texte:
#E84D84


---

# 8. Cartes produits

Les cartes produits sont un élément central.

Structure :


Image

↓

Badge promotion

↓

Nom produit

↓

Marque

↓

Prix

↓

Note

↓

Bouton panier


---

Style :


Background:
#FFFFFF

Radius:
20px

Padding:
16px

Shadow:
Légère


---

Hover :

Effet :

- légère élévation ;
- zoom image léger ;
- transition fluide.

---

# 9. Images produits

Règles :

Les images doivent être :

- propres ;
- lumineuses ;
- haute qualité ;
- centrées.

Format recommandé :


WebP


---

Ratio :

Produit :


1:1


Bannière :


16:9


---

# 10. Navbar

Structure :

Desktop :


Logo

Recherche

Catégories

Compte

Favoris

Panier


---

Mobile :


Logo

Recherche

Menu

Panier


---

Style :

- fond clair ;
- position sticky ;
- ombre légère.

---

# 11. Footer

Sections :


Éclat Store

Navigation

Service client

Informations

Réseaux sociaux


---

Inclure :

- Contact
- CGV
- Confidentialité
- Livraison
- Réseaux sociaux

---

# 12. Hero Section

Objectif :

Créer une première impression forte.

Structure :


Grande image

Titre

Description

Bouton CTA


---

Animations :

Autorisées :

- fade-in ;
- déplacement léger ;
- apparition progressive.

Interdit :

- animations agressives ;
- effets trop longs.

---

# 13. Animations

Bibliothèque :

Framer Motion

---

Durée :


200ms - 300ms


---

Animations autorisées :

## Apparition


opacity 0 → 1


## Déplacement léger


translateY 20px → 0


## Hover


scale 1 → 1.03


---

# 14. Espacement

Utiliser une échelle cohérente :


4px

8px

12px

16px

24px

32px

48px

64px


---

# 15. Border Radius

Valeurs principales :

Petits éléments :


8px


Boutons :


12px


Cartes :


20px


Images :


16px


---

# 16. Ombres

Les ombres doivent être discrètes.

Autorisé :


shadow-sm

shadow-md


Interdit :

- grosses ombres ;
- effets 3D.

---

# 17. Icônes

Style :

- outline ;
- simple ;
- arrondi.

Bibliothèque recommandée :

Lucide Icons.

---

Utilisation :

Panier :

🛒

Compte :

👤

Recherche :

🔍

Favoris :

♡


Les icônes doivent rester cohérentes.

---

# 18. Formulaires

Style :

Inputs :


Height:
48px

Radius:
12px

Border:
#EFEFEF


---

Focus :


Border:
#E84D84


---

Messages :

Erreur :

clair et visible.

Succès :

simple et discret.

---

# 19. Responsive

## Mobile

320px - 767px

Priorité :

- navigation simple ;
- boutons accessibles ;
- cartes adaptées.

---

## Tablette

768px - 1023px

---

## Desktop

1024px+

---

# 20. États des composants

Chaque composant doit prévoir :

## Normal

Affichage classique.

---

## Hover

Interaction souris.

---

## Loading

Chargement.

---

## Disabled

Désactivé.

---

## Error

Erreur.

---

# 21. Accessibilité

Respecter :

- contraste suffisant ;
- textes lisibles ;
- boutons accessibles ;
- navigation clavier ;
- textes alternatifs images.

---

# 22. Dark Mode

Prévu dans une version future.

Ne pas développer maintenant.

L'architecture doit cependant permettre son ajout.

---

# 23. Règles pour l'IA

Lors de la création d'une interface :

Toujours respecter :

- cette palette ;
- ces typographies ;
- ces espacements ;
- ce style premium ;
- Mobile First.

Ne jamais créer :

- couleurs aléatoires ;
- composants non réutilisables ;
- designs éloignés de l'identité Éclat Store.

---

# Objectif final

Créer une expérience utilisateur qui donne l'impression d'une grande marque cosmétique :

- élégante ;
- moderne ;
- rassurante ;
- rapide ;
- professionnelle.

Chaque écran doit renforcer l'identité d'Éclat Store.