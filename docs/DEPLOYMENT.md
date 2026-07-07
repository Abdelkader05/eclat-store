# ÉCLAT STORE — DÉPLOIEMENT

Version : 1.0  
État : frontend publié

---

# 1. Site publié

URL publique :

```text
https://eclat-store-frontend.vercel.app/
```

Hébergeur :

```text
Vercel
```

Compte / équipe Vercel :

```text
Eclat Store
```

Projet Vercel :

```text
eclat-store-frontend
```

---

# 2. Dépôt GitHub

Repository :

```text
https://github.com/Abdelkader05/eclat-store
```

Branche déployée :

```text
main
```

---

# 3. Configuration Vercel

Configuration actuelle :

```text
Framework Preset : Next.js
Root Directory : frontend
Build Command : pnpm build
Install Command : pnpm install
Output Directory : Next.js default
```

Variables d'environnement :

```text
Aucune variable requise pour la landing page actuelle.
```

---

# 4. Périmètre du déploiement actuel

Déployé :

- frontend Next.js ;
- landing page produit unique ;
- image produit Biodance ;
- bouton WhatsApp ;
- design mobile-first.

Non déployé :

- backend Express ;
- base PostgreSQL ;
- Prisma en production ;
- paiement en ligne ;
- panier complet.

---

# 5. Commandes de vérification locale

Depuis la racine :

```bash
pnpm --filter frontend typecheck
pnpm --filter frontend build
```

Depuis `frontend/` :

```bash
pnpm build
pnpm start
```

---

# 6. Processus de mise à jour

Pour publier une modification :

1. Modifier le code.
2. Lancer les vérifications.
3. Commit Git.
4. Push sur `main`.
5. Vercel redéploie automatiquement le frontend.

Commandes :

```bash
git add .
git commit -m "Description du changement"
git push
```

---

# 7. Plugin Vercel

Le plugin Vercel a été installé pour Codex.

Commande utilisée :

```bash
pnpm dlx plugins add vercel/vercel-plugin --target codex
```

Après installation :

```text
Redémarrer Codex pour charger le plugin.
```

---

# 8. Notes importantes

Ne pas créer de projet Vercel pour le backend Express pour le moment.

Le backend reste dans le dépôt pour l'évolution future, mais le site actuellement publié est une vitrine commerciale simple.

Pour ajouter un domaine personnalisé :

```text
Vercel → Project eclat-store-frontend → Settings → Domains
```
