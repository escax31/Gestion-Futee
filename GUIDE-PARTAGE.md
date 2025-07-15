# 🔄 Guide de Partage - Gestion Futée

## 🎯 Solution Recommandée : GitHub

### Pourquoi GitHub ?
- ✅ Contrôle de version professionnel
- ✅ Historique complet des modifications
- ✅ Collaboration facile entre ordinateurs
- ✅ Sauvegarde sécurisée dans le cloud
- ✅ Intégration directe avec Vercel
- ✅ Gratuit pour projets privés/publics

### Étapes de configuration

#### 1. Prérequis
- [ ] Node.js installé (https://nodejs.org)
- [ ] Git installé (https://git-scm.com)
- [ ] Compte GitHub créé (https://github.com)

#### 2. Configuration Git locale
```bash
# Configurer votre identité (une seule fois)
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@exemple.com"
```

#### 3. Initialiser le projet
```bash
# Dans le dossier de votre projet
git init
git add .
git commit -m "Initial commit - Gestion Futée"
```

#### 4. Créer le repository GitHub
1. Allez sur GitHub.com
2. Cliquez sur "New repository"
3. Nom : `gestion-futee`
4. Description : "Application de gestion pour pâtisserie"
5. Choisissez "Private" (recommandé) ou "Public"
6. **NE PAS** cocher "Initialize with README"
7. Cliquez "Create repository"

#### 5. Connecter le projet à GitHub
```bash
# Ajouter l'origine remote (remplacez USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/USERNAME/gestion-futee.git

# Pousser le code initial
git branch -M main
git push -u origin main
```

### Workflow quotidien

#### Sur l'ordinateur A (sauvegarder vos changements)
```bash
# Ajouter tous les fichiers modifiés
git add .

# Créer un commit avec un message descriptif
git commit -m "Ajout du module de recettes"

# Envoyer sur GitHub
git push
```

#### Sur l'ordinateur B (récupérer les changements)
```bash
# Première fois : cloner le projet
git clone https://github.com/USERNAME/gestion-futee.git
cd gestion-futee

# Installation des dépendances
npm install

# Les fois suivantes : récupérer les derniers changements
git pull
```

## 🔄 Alternatives de partage

### Option 2 : Cloud Storage (OneDrive/Google Drive)
**Avantages :**
- ✅ Simple à utiliser
- ✅ Synchronisation automatique
- ✅ Déjà disponible sur Windows (OneDrive)

**Inconvénients :**
- ❌ Pas de contrôle de version
- ❌ Risque de conflits de fichiers
- ❌ Problèmes avec node_modules/

**Configuration :**
1. Déplacez votre dossier "Gestion Futée" dans OneDrive
2. Sur les autres ordinateurs, attendez la synchronisation
3. **Important :** Supprimez `node_modules/` avant sync
4. Exécutez `npm install` sur chaque ordinateur

### Option 3 : VS Code + Extensions
**Pour collaboration en temps réel :**
- Extension "Live Share" de Microsoft
- Permet de coder ensemble en temps réel
- Partage de terminal et serveur de développement

### Option 4 : Vercel (Déploiement)
**Une fois sur GitHub :**
1. Connectez votre repo GitHub à Vercel
2. Déploiement automatique à chaque push
3. URL publique pour tester : `https://gestion-futee.vercel.app`

## 🚨 Bonnes pratiques

### Fichiers à ignorer (déjà configuré dans .gitignore)
- `node_modules/` - Ne jamais synchroniser
- `.env.local` - Contient vos clés secrètes
- `.next/` - Fichiers de build temporaires

### Workflow recommandé
1. **Avant de commencer** : `git pull` (récupérer les derniers changements)
2. **Après modification** : `git add . && git commit -m "Description"`
3. **Avant de fermer** : `git push` (sauvegarder en ligne)

### Gestion des conflits
Si Git signale des conflits :
```bash
# Récupérer et fusionner
git pull

# Résoudre manuellement les conflits dans VS Code
# Puis confirmer la résolution
git add .
git commit -m "Résolution conflits"
git push
```

## 📞 Support

### Commandes Git essentielles
```bash
git status          # Voir l'état des fichiers
git log --oneline    # Historique des commits
git pull            # Récupérer les changements
git push            # Envoyer les changements
git add .           # Ajouter tous les fichiers
git commit -m "msg" # Créer un commit
```

### En cas de problème
1. Vérifiez `git status`
2. Consultez les erreurs dans le terminal
3. Utilisez VS Code qui a une interface Git intégrée
4. En dernier recours : sauvegardez vos fichiers et re-clonez

---

**Recommandation :** Commencez par GitHub ! C'est la solution professionnelle qui vous servira dans tous vos projets futurs. 