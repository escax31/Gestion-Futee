import Link from 'next/link'
import { ArrowRight, Users, Calendar, TrendingUp, CheckSquare, PieChart, Calculator } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary-600">Gestion Futée</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/signin" className="text-secondary-600 hover:text-secondary-800">
                Connexion
              </Link>
              <Link href="/signup" className="btn-primary">
                Inscription
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Votre outil de gestion
              <span className="block text-primary-200">tout-en-un</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Simplifiez la gestion de votre activité avec une plateforme complète
              dédiée aux auto-entrepreneurs, petites entreprises et indépendants
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Commencer gratuitement
              </Link>
              <Link href="#features" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Découvrir les fonctionnalités
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Modules de gestion disponibles
            </h2>
            <p className="text-xl text-secondary-600">
              Chaque module peut être personnalisé selon vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card hover:shadow-lg transition-shadow duration-200">
              <Calendar className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Planning / Agenda</h3>
              <p className="text-secondary-600">
                Organisez votre emploi du temps, vos rendez-vous et planifiez vos projets efficacement.
              </p>
            </div>

            <div className="card hover:shadow-lg transition-shadow duration-200">
              <TrendingUp className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Suivi Financier</h3>
              <p className="text-secondary-600">
                Tableaux de bord avec catégorisation, filtres et calculs automatiques de vos revenus et dépenses.
              </p>
            </div>

            <div className="card hover:shadow-lg transition-shadow duration-200">
              <CheckSquare className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Gestion de Tâches</h3>
              <p className="text-secondary-600">
                Outils pour planifier, suivre et hiérarchiser vos tâches avec des vues Kanban et to-do.
              </p>
            </div>

            <div className="card hover:shadow-lg transition-shadow duration-200">
              <Users className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Checklists Personnalisées</h3>
              <p className="text-secondary-600">
                Gérez vos processus et vérifiez l'avancement de vos objectifs récurrents.
              </p>
            </div>

            <div className="card hover:shadow-lg transition-shadow duration-200">
              <PieChart className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Graphiques Dynamiques</h3>
              <p className="text-secondary-600">
                Visualisez vos données avec des graphiques automatiques (barres, courbes, camemberts).
              </p>
            </div>

            <div className="card hover:shadow-lg transition-shadow duration-200">
              <Calculator className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Simulateur d'Impôt</h3>
              <p className="text-secondary-600">
                Simulez vos impôts à payer pour mieux anticiper vos obligations fiscales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Choisissez votre formule
            </h2>
            <p className="text-xl text-secondary-600">
              Commencez gratuitement et évoluez selon vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-2xl font-bold mb-4">Gratuit</h3>
              <div className="text-4xl font-bold text-primary-600 mb-6">0€<span className="text-lg text-secondary-600">/mois</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 text-green-500 mr-3" />
                  Accès aux outils de base
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 text-green-500 mr-3" />
                  Nombre limité de modules
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 text-green-500 mr-3" />
                  Support par email
                </li>
              </ul>
              <Link href="/signup" className="btn-secondary w-full text-center block">
                Commencer gratuitement
              </Link>
            </div>

            <div className="card border-2 border-primary-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Recommandé
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium</h3>
              <div className="text-4xl font-bold text-primary-600 mb-6">19€<span className="text-lg text-secondary-600">/mois</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 text-green-500 mr-3" />
                  Modules illimités
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 text-green-500 mr-3" />
                  Fonctions avancées
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 text-green-500 mr-3" />
                  Modèles exclusifs
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 text-green-500 mr-3" />
                  Support prioritaire
                </li>
              </ul>
              <Link href="/signup?plan=premium" className="btn-primary w-full text-center block">
                Commencer l'essai gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à simplifier votre gestion ?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Rejoignez des milliers d'entrepreneurs qui font confiance à Gestion Futée
          </p>
          <Link href="/signup" className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center">
            Commencer maintenant
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Gestion Futée</h3>
              <p className="text-secondary-400">
                L'outil de gestion tout-en-un pour les entrepreneurs et indépendants.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Produit</h4>
              <ul className="space-y-2 text-secondary-400">
                <li><Link href="#features" className="hover:text-white">Fonctionnalités</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Tarifs</Link></li>
                <li><Link href="/updates" className="hover:text-white">Mises à jour</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-secondary-400">
                <li><Link href="/help" className="hover:text-white">Centre d'aide</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/status" className="hover:text-white">Statut</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Légal</h4>
              <ul className="space-y-2 text-secondary-400">
                <li><Link href="/privacy" className="hover:text-white">Confidentialité</Link></li>
                <li><Link href="/terms" className="hover:text-white">Conditions</Link></li>
                <li><Link href="/cookies" className="hover:text-white">Cookies</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-secondary-800 mt-8 pt-8 text-center text-secondary-400">
            <p>&copy; 2024 Gestion Futée. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 