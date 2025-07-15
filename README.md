# Gestion Futée - Application de Gestion de Pâtisserie

Une application web complète pour la gestion d'une pâtisserie, incluant la gestion des matières premières, des recettes et des commandes avec calcul automatique des coûts.

## 🚀 Technologies utilisées

- **Framework**: Next.js 14 (App Router)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icônes**: Lucide React
- **Authentification**: Firebase Auth
- **Base de données**: Firebase Firestore
- **Déploiement**: Vercel

## 📋 Fonctionnalités

### 🧾 Gestion des matières premières
- CRUD complet des ingrédients
- Suivi des stocks en temps réel
- Gestion des fournisseurs et prix d'achat
- Filtres par période et fournisseur

### 🍰 Gestion des recettes
- Création de recettes avec ingrédients
- Calcul automatique du prix de revient
- Sélection d'ingrédients depuis le stock disponible
- Méthodes de préparation détaillées

### 📦 Gestion des commandes
- Suivi des commandes clients
- Calcul automatique des marges
- Mise à jour automatique des stocks
- Historique des ventes avec filtres

## 🛠️ Installation et configuration

### 🚀 Démarrage rapide (30 minutes)
👉 **Consultez le guide d'installation rapide** : [\`INSTALLATION-RAPIDE.md\`](INSTALLATION-RAPIDE.md)

### 📚 Guides détaillés disponibles
- 🔥 **Configuration Firebase** : [\`GUIDE-FIREBASE.md\`](GUIDE-FIREBASE.md)
- 🔄 **Partage et synchronisation** : [\`GUIDE-PARTAGE.md\`](GUIDE-PARTAGE.md)
- 🔧 **Configuration avancée** : [\`scripts/setup.md\`](scripts/setup.md)

### Prérequis
- Node.js 18+ ([nodejs.org](https://nodejs.org))
- Git ([git-scm.com](https://git-scm.com))
- Compte Firebase ([console.firebase.google.com](https://console.firebase.google.com))
- Compte GitHub ([github.com](https://github.com)) - pour le partage

### Installation express
\`\`\`bash
# 1. Cloner le projet
git clone https://github.com/votre-username/gestion-futee.git
cd gestion-futee

# 2. Installer les dépendances
npm install

# 3. Configurer Firebase (voir GUIDE-FIREBASE.md)
cp env.example .env.local
# Remplir .env.local avec vos clés Firebase

# 4. Lancer l'application
npm run dev
\`\`\`

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🚀 Déploiement sur Vercel

### Déploiement automatique
1. Connectez votre repository GitHub à Vercel
2. Configurez les variables d'environnement dans les paramètres Vercel
3. Le déploiement se fera automatiquement à chaque push

### Déploiement manuel
\`\`\`bash
npm install -g vercel
vercel
\`\`\`

## 📁 Structure du projet

\`\`\`
src/
├── app/                    # Pages Next.js (App Router)
│   ├── auth/              # Authentification
│   ├── dashboard/         # Interface privée
│   │   ├── ingredients/   # Gestion des matières premières
│   │   ├── recettes/      # Gestion des recettes
│   │   └── commandes/     # Gestion des commandes
│   ├── globals.css        # Styles globaux
│   ├── layout.tsx         # Layout racine
│   └── page.tsx           # Page d'accueil
├── components/            # Composants réutilisables
│   ├── ui/               # Composants shadcn/ui
│   ├── auth/             # Composants d'authentification
│   ├── dashboard/        # Composants du dashboard
│   └── ingredients/      # Composants des ingrédients
├── lib/                   # Utilitaires et configuration
│   ├── firebase/         # Configuration Firebase
│   ├── hooks/            # Hooks personnalisés
│   ├── types.ts          # Types TypeScript
│   └── utils.ts          # Utilitaires
\`\`\`

## 🗄️ Structure de la base de données (Firestore)

### Collection "ingredients"
\`\`\`typescript
{
  id: string
  nom: string
  quantite: number
  unite: string
  prixAchat: number
  fournisseur: string
  dateAchat: Timestamp
  userId: string
}
\`\`\`

### Collection "recettes"
\`\`\`typescript
{
  id: string
  nom: string
  ingredients: RecetteIngredient[]
  methode: string
  prixRevient: number
  userId: string
  dateCreation: Timestamp
}
\`\`\`

### Collection "commandes"
\`\`\`typescript
{
  id: string
  client: string
  items: CommandeItem[]
  prixVente: number
  dateLivraison: Timestamp
  statut: 'en-preparation' | 'prete' | 'livree' | 'annulee'
  dateCommande: Timestamp
  userId: string
}
\`\`\`

## 🔒 Sécurité

- Authentification requise pour accéder au dashboard
- Isolation des données par utilisateur
- Validation des données côté client et serveur
- Règles de sécurité Firestore à configurer

## 🎨 Interface utilisateur

- Design responsive (mobile-first)
- Interface claire et intuitive
- Composants accessibles
- Thème cohérent avec Tailwind CSS
- Icônes Lucide React

## 📊 Logique métier

- **Calcul automatique du prix de revient** des recettes
- **Mise à jour automatique des stocks** lors des commandes
- **Sélection d'ingrédients** limitée aux stocks disponibles
- **Calcul des marges** sur les commandes

## 🤝 Contribution

1. Fork le projet
2. Créez une branche feature (\`git checkout -b feature/AmazingFeature\`)
3. Committez vos changements (\`git commit -m 'Add some AmazingFeature'\`)
4. Push vers la branche (\`git push origin feature/AmazingFeature\`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 📞 Support

Pour toute question ou problème, veuillez ouvrir une issue sur GitHub.

---

**Gestion Futée** - Optimisez votre pâtisserie avec intelligence ! 🧁 