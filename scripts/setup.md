# Guide de Configuration Rapide - Gestion Futée

## 📋 Checklist de configuration

### 1. Installation de Node.js
- [ ] Télécharger Node.js 18+ depuis [nodejs.org](https://nodejs.org)
- [ ] Vérifier l'installation : `node --version` et `npm --version`

### 2. Configuration Firebase
- [ ] Créer un projet sur [Firebase Console](https://console.firebase.google.com)
- [ ] Activer Authentication → Sign-in method → Email/Password
- [ ] Activer Firestore Database → Créer en mode test
- [ ] Récupérer les clés de configuration (Project Settings → General → Web apps)

### 3. Variables d'environnement
- [ ] Copier `env.example` vers `.env.local`
- [ ] Remplir toutes les variables Firebase
- [ ] Vérifier que `.env.local` est dans `.gitignore`

### 4. Installation des dépendances
```bash
npm install
```

### 5. Règles de sécurité Firestore
- [ ] Copier le contenu de `firestore.rules`
- [ ] L'appliquer dans Firebase Console → Firestore → Rules
- [ ] Ou utiliser Firebase CLI : `firebase deploy --only firestore:rules`

### 6. Index Firestore (optionnel)
```bash
firebase deploy --only firestore:indexes
```

### 7. Lancement de l'application
```bash
npm run dev
```

## 🔧 Configuration Firebase CLI (optionnel)

Pour utiliser Firebase CLI :
```bash
npm install -g firebase-tools
firebase login
firebase init
```

## 🚀 Déploiement Vercel

1. Connecter le repository à Vercel
2. Configurer les variables d'environnement sur Vercel
3. Le déploiement se fait automatiquement

## ⚠️ Points d'attention

- Ne jamais committer `.env.local`
- Configurer les règles Firestore avant la production
- Tester l'authentification en premier
- Vérifier les permissions d'accès aux collections

## 🆘 Résolution des problèmes courants

### Erreur "Firebase not configured"
- Vérifier les variables d'environnement
- Redémarrer le serveur de développement

### Erreur "Permission denied" Firestore
- Vérifier les règles de sécurité
- S'assurer que l'utilisateur est authentifié

### Erreur de build Next.js
- Vérifier la version Node.js (18+)
- Supprimer `node_modules` et réinstaller

## 📞 Support

En cas de problème, vérifier :
1. La console du navigateur pour les erreurs
2. Les logs du serveur de développement
3. La console Firebase pour les règles
4. La documentation officielle 