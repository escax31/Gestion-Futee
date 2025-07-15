# ⚡ Installation Rapide - Gestion Futée

## 🚀 Démarrage en 30 minutes

### ✅ Checklist complète

#### 📦 1. Installations nécessaires (5 min)
- [ ] **Node.js** : [nodejs.org](https://nodejs.org) → Version LTS
- [ ] **Git** : [git-scm.com](https://git-scm.com) → Git for Windows
- [ ] **VS Code** (recommandé) : [code.visualstudio.com](https://code.visualstudio.com)

#### 🔥 2. Configuration Firebase (10 min)
- [ ] Compte Google créé
- [ ] Projet Firebase créé sur [console.firebase.google.com](https://console.firebase.google.com)
- [ ] Authentication activée (Email/Password)
- [ ] Firestore Database créée (mode test)
- [ ] App Web configurée et clés récupérées

#### 💻 3. Configuration du projet (5 min)
- [ ] Fichier `.env.local` créé avec clés Firebase
- [ ] Dépendances installées : `npm install`
- [ ] Application lancée : `npm run dev`

#### 🔄 4. Partage du projet (10 min)
- [ ] Compte GitHub créé
- [ ] Repository créé et code pushé
- [ ] Projet clonable sur autres ordinateurs

---

## 📋 Guide étape par étape

### 1. Installer Node.js et Git

#### Node.js
1. Allez sur [nodejs.org](https://nodejs.org)
2. Téléchargez la version **LTS** (Long Term Support)
3. Installez avec les options par défaut
4. **Redémarrez** votre terminal

#### Git
1. Allez sur [git-scm.com](https://git-scm.com)
2. Téléchargez "Git for Windows"
3. Installez avec les options par défaut
4. **Redémarrez** votre terminal

#### Vérification
```bash
# Testez que tout fonctionne
node --version    # Doit afficher v18.x.x ou v20.x.x
npm --version     # Doit afficher 9.x.x ou 10.x.x
git --version     # Doit afficher git version 2.x.x
```

### 2. Configurer Firebase

#### Création du projet
1. **Console Firebase** : [console.firebase.google.com](https://console.firebase.google.com)
2. **"Créer un projet"** → Nom : `gestion-futee`
3. **Désactiver** Google Analytics
4. **Attendre** la création (1-2 minutes)

#### Authentification
1. **Menu "Authentication"** → "Commencer"
2. **Onglet "Sign-in method"**
3. **Activer "E-mail/Mot de passe"**
4. **Enregistrer**

#### Base de données
1. **Menu "Firestore Database"** → "Créer une base de données"
2. **Mode :** "Commencer en mode test"
3. **Emplacement :** "europe-west" (France)
4. **Terminé**

#### Application Web
1. **Icône Web** `</>` sur la page d'accueil
2. **Nom :** `gestion-futee-web`
3. **Enregistrer l'app**
4. **IMPORTANT :** Copiez la configuration qui s'affiche !

### 3. Configuration du projet

#### Variables d'environnement
1. **Dans votre projet**, copiez `env.example` → `.env.local`
2. **Remplacez** les valeurs par celles de Firebase :

```env
NEXT_PUBLIC_FIREBASE_API_KEY=votre_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=votre_projet.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=votre_projet_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=votre_projet.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=votre_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=votre_app_id
```

#### Installation et lancement
```bash
# Dans le dossier de votre projet
npm install          # Installer les dépendances (2-3 minutes)
npm run dev         # Lancer l'application
```

#### Test
1. **Ouvrez** [http://localhost:3000](http://localhost:3000)
2. **Cliquez** "Connexion"
3. **Créez** un compte de test
4. **Vérifiez** l'accès au dashboard

### 4. Sécuriser Firestore

#### Règles de sécurité
1. **Console Firebase** → "Firestore Database" → "Règles"
2. **Remplacez** le contenu par :

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /ingredients/{ingredientId} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
      allow create: if request.auth != null && request.auth.uid == request.resource.data.userId;
    }
    match /recettes/{recetteId} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
      allow create: if request.auth != null && request.auth.uid == request.resource.data.userId;
    }
    match /commandes/{commandeId} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
      allow create: if request.auth != null && request.auth.uid == request.resource.data.userId;
    }
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

3. **Publier**

### 5. Configurer le partage (GitHub)

#### Configuration Git
```bash
# Configuration une seule fois
git config --global user.name "Votre Nom"
git config --global user.email "votre@email.com"
```

#### Initialisation du projet
```bash
# Dans votre dossier projet
git init
git add .
git commit -m "Initial commit - Gestion Futée"
```

#### GitHub
1. **Créez un compte** sur [github.com](https://github.com)
2. **Nouveau repository** : `gestion-futee`
3. **Privé** (recommandé)
4. **Ne pas** initialiser avec README

#### Connexion et push
```bash
# Remplacez USERNAME par votre nom d'utilisateur GitHub
git remote add origin https://github.com/USERNAME/gestion-futee.git
git branch -M main
git push -u origin main
```

### 6. Utilisation sur un autre ordinateur

```bash
# Cloner le projet
git clone https://github.com/USERNAME/gestion-futee.git
cd gestion-futee

# Installer les dépendances
npm install

# Créer .env.local avec les mêmes valeurs Firebase

# Lancer
npm run dev
```

---

## 🎯 Workflow quotidien

### Sauvegarder vos changements
```bash
git add .
git commit -m "Description de vos modifications"
git push
```

### Récupérer les changements
```bash
git pull
```

---

## 🆘 En cas de problème

### Commandes de vérification
```bash
node --version         # Version Node.js
npm --version          # Version npm
git --version          # Version Git
git status            # État du projet Git
npm run dev           # Lancer l'application
```

### Erreurs communes
- **"node not found"** → Réinstaller Node.js et redémarrer le terminal
- **"Firebase not configured"** → Vérifier `.env.local`
- **"Permission denied"** → Vérifier les règles Firestore
- **"Port 3000 busy"** → Arrêter l'ancien serveur (Ctrl+C)

### Support
- 📖 **Guides détaillés** : `GUIDE-FIREBASE.md` et `GUIDE-PARTAGE.md`
- 🔧 **Configuration** : `scripts/setup.md`
- 📚 **Documentation** : `README.md`

---

**🎉 Félicitations !** Votre application "Gestion Futée" est maintenant opérationnelle ! 