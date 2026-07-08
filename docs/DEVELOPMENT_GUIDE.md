# ÉCLAT STORE — DEVELOPMENT GUIDE

Version : 1.0

---

# 1. Règles générales

Avant toute modification :

- lire les documents dans `docs/` ;
- respecter l'architecture définie ;
- garder TypeScript strict ;
- ne pas ajouter de paiement en ligne ;
- ne pas déployer le backend tant qu'il n'est pas nécessaire.

---

# 2. Architecture actuelle

Frontend :

```text
frontend/src/app
frontend/src/components
frontend/src/features
frontend/src/services
frontend/src/lib
frontend/src/types
```

Backend :

```text
backend/src/routes
backend/src/controllers
backend/src/services
backend/src/repositories
backend/src/database
```

---

# 3. Version publiée

La version actuellement publiée est une landing page produit unique :

```text
Biodance Bio Collagen Real Deep Mask
```

Prix :

```text
2 000 FCFA
```

Livraison :

```text
Partout à Bamako : 1 000 FCFA
```

Commande :

```text
WhatsApp vers +223 62901424
```

Site :

```text
https://eclat-store-frontend.vercel.app/
```

---

# 4. Commandes utiles

Le projet utilise `pnpm`.

Depuis la racine :

```bash
pnpm install
pnpm --filter frontend typecheck
pnpm --filter frontend build
pnpm --filter backend typecheck
pnpm --filter backend build
```

Pour lancer le frontend :

```bash
pnpm --filter frontend dev
```

Pour lancer le backend :

```bash
pnpm --filter backend dev
```

---

# 5. Déploiement

Le frontend est déployé automatiquement par Vercel depuis GitHub.

Pour publier une modification :

```bash
git add .
git commit -m "Message clair"
git push
```

Vercel relance ensuite le build automatiquement.

---

# 6. Sécurité

Ne jamais commiter :

- fichiers `.env` ;
- tokens GitHub ;
- clés Cloudinary ;
- secrets JWT ;
- accès base de données.

Important :

Un token GitHub a été utilisé pendant la mise en place. Il doit être révoqué ou régénéré dans GitHub après usage.

---

# 7. Prochaines tâches probables

Priorités possibles :

1. Ajuster textes et visuels de la landing page.
2. Ajouter un domaine personnalisé.
3. Ajouter une page produit détaillée.
4. Ajouter une collecte de commandes plus structurée.
5. Déployer le backend uniquement quand une vraie API devient nécessaire.
