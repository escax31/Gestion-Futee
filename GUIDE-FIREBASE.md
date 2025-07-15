# 🔥 Guide Firebase - Gestion Futée

## 🎯 Configuration Firebase complète

### Pourquoi Firebase ?
- ✅ **Authentification** sécurisée intégrée
- ✅ **Base de données temps réel** (Firestore)
- ✅ **Gratuit** jusqu'à des volumes importants
- ✅ **Scalable** - grandit avec votre business
- ✅ **Hébergement** possible pour l'application

## 📋 Étapes de configuration

### 1. Créer un projet Firebase

1. **Allez sur** : [https://console.firebase.google.com](https://console.firebase.google.com)
2. **Connectez-vous** avec votre compte Google
3. **Cliquez sur** "Créer un projet"
4. **Nom du projet** : `gestion-futee` (ou votre choix)
5. **Désactiver** Google Analytics (pas nécessaire pour ce projet)
6. **Cliquez** "Créer un projet"

### 2. Configurer l'authentification

1. **Dans la console Firebase**, cliquez sur "Authentication"
2. **Cliquez** "Commencer"
3. **Onglet "Sign-in method"**
4. **Activez "E-mail/Mot de passe"**
   - Cliquez sur "E-mail/Mot de passe"
   - **Activez** la première option
   - **Enregistrez**

### 3. Configurer Firestore Database

1. **Dans la console Firebase**, cliquez sur "Firestore Database"
2. **Cliquez** "Créer une base de données"
3. **Mode de sécurité** : Choisissez "Commencer en mode test"
   - ⚠️ Nous configurerons les vraies règles plus tard
4. **Emplacement** : Choisissez "europe-west" (plus proche de la France)
5. **Cliquez** "Terminé"

### 4. Créer une application Web

1. **Dans la console Firebase**, cliquez sur l'icône **"Web"** (`</>`)
2. **Surnom de l'app** : `gestion-futee-web`
3. **Cochez** "Configurer aussi Firebase Hosting" (optionnel)
4. **Cliquez** "Enregistrer l'app"
5. **Copiez la configuration** qui s'affiche (vous en aurez besoin)

### 5. Récupérer les clés de configuration

La configuration ressemble à ceci :
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "gestion-futee.firebaseapp.com",
  projectId: "gestion-futee",
  storageBucket: "gestion-futee.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456789"
};
```

### 6. Configurer les variables d'environnement

1. **Copiez** `env.example` vers `.env.local`
2. **Remplissez** avec vos vraies valeurs :

```env
# Remplacez par vos vraies valeurs Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=gestion-futee.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=gestion-futee
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=gestion-futee.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abcdef123456789
```

### 7. Configurer les règles de sécurité Firestore

1. **Dans Firestore**, allez dans "Règles"
2. **Remplacez** le contenu par celui du fichier `firestore.rules` :

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Règles pour les ingrédients
    match /ingredients/{ingredientId} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
      allow create: if request.auth != null && request.auth.uid == request.resource.data.userId;
    }
    
    // Règles pour les recettes
    match /recettes/{recetteId} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
      allow create: if request.auth != null && request.auth.uid == request.resource.data.userId;
    }
    
    // Règles pour les commandes
    match /commandes/{commandeId} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
      allow create: if request.auth != null && request.auth.uid == request.resource.data.userId;
    }
    
    // Interdire tout autre accès
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

3. **Cliquez** "Publier"

## 🧪 Test de la configuration

### 1. Installer les dépendances
```bash
npm install
```

### 2. Lancer l'application
```bash
npm run dev
```

### 3. Tester l'authentification
1. Allez sur `http://localhost:3000`
2. Cliquez sur "Connexion"
3. Créez un compte avec email/mot de passe
4. Vérifiez que vous êtes redirigé vers le dashboard

### 4. Vérifier Firestore
1. **Dans la console Firebase**, allez dans "Firestore Database"
2. **Ajoutez un ingrédient** dans l'application
3. **Vérifiez** qu'il apparaît dans Firestore avec votre `userId`

## 🔒 Sécurité et bonnes pratiques

### Variables d'environnement
- ✅ `.env.local` est dans `.gitignore`
- ✅ Ne jamais committer vos vraies clés
- ✅ Sur Vercel, configurez les variables dans les paramètres

### Règles Firestore
- ✅ Chaque utilisateur ne voit que ses données
- ✅ Authentification obligatoire pour tous les accès
- ✅ Pas d'accès anonyme aux données sensibles

### Limitations gratuites Firebase
- **Firestore** : 50 000 lectures/jour
- **Auth** : Illimité
- **Hosting** : 10 GB/mois
- ➡️ Largement suffisant pour débuter !

## 🚀 Déploiement (optionnel)

### Option 1 : Vercel (recommandé)
1. Connectez votre repo GitHub à Vercel
2. Configurez les variables d'environnement
3. Déploiement automatique !

### Option 2 : Firebase Hosting
```bash
# Installer Firebase CLI
npm install -g firebase-tools

# Se connecter
firebase login

# Initialiser
firebase init hosting

# Déployer
npm run build
firebase deploy
```

## 🆘 Résolution des problèmes

### "Firebase not configured"
- ✅ Vérifiez `.env.local`
- ✅ Redémarrez le serveur (`npm run dev`)
- ✅ Vérifiez que les variables commencent par `NEXT_PUBLIC_`

### "Permission denied" sur Firestore
- ✅ Vérifiez les règles de sécurité
- ✅ Assurez-vous d'être authentifié
- ✅ Vérifiez que `userId` est bien ajouté aux documents

### Erreurs d'authentification
- ✅ Vérifiez que Email/Password est activé
- ✅ Vérifiez l'`authDomain` dans la config
- ✅ Testez d'abord en local

## 📊 Surveillance et métriques

### Console Firebase
- **Authentication** → Voir les utilisateurs inscrits
- **Firestore** → Voir les données en temps réel
- **Usage** → Suivre votre consommation gratuite

### Conseils d'optimisation
- Indexez les requêtes fréquentes
- Limitez les lectures avec pagination
- Utilisez les listeners temps réel avec parcimonie

---

**🎉 Félicitations !** Votre backend Firebase est maintenant configuré et sécurisé ! 