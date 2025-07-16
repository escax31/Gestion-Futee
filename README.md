# Gestion Futée

Application de gestion tout-en-un pour auto-entrepreneurs, petites entreprises et indépendants.

## Fonctionnalités

- 🔐 **Authentification sécurisée** - Gestion des comptes utilisateurs
- 📅 **Planning / Agenda** - Organisation de l'emploi du temps
- 💰 **Suivi financier** - Revenus, dépenses et tableaux de bord
- ✅ **Gestion de tâches** - To-do lists et organisation Kanban
- 📋 **Checklists personnalisées** - Suivi de processus récurrents
- 📊 **Graphiques dynamiques** - Visualisation des données
- 🧮 **Simulateur d'impôt** - Calculs fiscaux
- 💳 **Abonnements** - Formules gratuite et premium avec Stripe
- 🛟 **Support utilisateur** - Chatbot et contact direct
- 👨‍💼 **Back-office admin** - Gestion des utilisateurs et statistiques

## Installation

### Prérequis

- Node.js 18+ 
- PostgreSQL
- Un compte Stripe (pour les paiements)

### Étapes d'installation

1. **Installer les dépendances**
```bash
npm install
```

2. **Configuration de l'environnement**
Créer un fichier `.env` à la racine avec :
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/gestion_futee"

# NextAuth.js
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# Stripe
STRIPE_PUBLIC_KEY="pk_test_your_stripe_public_key"
STRIPE_SECRET_KEY="sk_test_your_stripe_secret_key"
STRIPE_WEBHOOK_SECRET="whsec_your_webhook_secret"

# Email (pour notifications)
EMAIL_FROM="noreply@gestion-futee.com"
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-email-password"
```

3. **Configuration de la base de données**
```bash
# Générer le client Prisma
npm run db:generate

# Pousser le schéma vers la base de données
npm run db:push
```

4. **Lancer l'application**
```bash
npm run dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

## Architecture

### Stack technique

- **Frontend** : Next.js 14 avec App Router
- **Backend** : API Routes Next.js
- **Base de données** : PostgreSQL avec Prisma ORM
- **Authentification** : NextAuth.js
- **Paiements** : Stripe
- **Styling** : Tailwind CSS
- **Icons** : Lucide React
- **Graphiques** : Recharts

### Structure du projet

```
src/
├── app/                 # App Router (Next.js 13+)
│   ├── (auth)/         # Pages d'authentification
│   ├── dashboard/      # Interface utilisateur connecté
│   ├── admin/          # Back-office administrateur
│   └── api/            # API Routes
├── components/         # Composants réutilisables
├── lib/               # Utilitaires et configurations
└── types/             # Types TypeScript
```

## Modules disponibles

### Planning / Agenda
- Gestion des événements et rendez-vous
- Vue calendrier mensuelle/hebdomadaire
- Rappels et notifications

### Suivi Financier
- Revenus et dépenses par catégorie
- Tableaux de bord avec graphiques
- Export des données

### Gestion de Tâches
- To-do lists personnalisables
- Vue Kanban pour les projets
- Priorités et échéances

### Checklists
- Processus récurrents
- Suivi d'avancement
- Templates personnalisables

### Simulateur d'Impôt
- Calculs automatiques
- Différents régimes fiscaux
- Projections annuelles

## Abonnements

### Gratuit (0€/mois)
- Accès aux outils de base
- Nombre limité de modules
- Support par email

### Premium (19€/mois)
- Modules illimités
- Fonctions avancées
- Modèles exclusifs
- Support prioritaire

## Développement

### Scripts disponibles

- `npm run dev` - Lancement en mode développement
- `npm run build` - Construction pour la production
- `npm run start` - Lancement en production
- `npm run lint` - Vérification du code
- `npm run db:push` - Mise à jour de la base de données
- `npm run db:studio` - Interface d'administration Prisma

### Contribution

1. Fork du projet
2. Création d'une branche feature
3. Commit des modifications
4. Push vers la branche
5. Ouverture d'une Pull Request

## Support

Pour toute question ou problème :
- 💬 Utilisez le chatbot intégré dans l'application
- 📧 Contactez-nous via le formulaire de support
- 🐛 Ouvrez une issue sur GitHub

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails. 