import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChefHat, Package, ShoppingCart, Calculator } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <ChefHat className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-gray-900">Gestion Futée</span>
          </div>
          <nav className="flex items-center space-x-4">
            <Link href="/auth">
              <Button variant="outline">Connexion</Button>
            </Link>
            <Link href="/auth">
              <Button>Commencer</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Gérez votre pâtisserie avec
            <span className="text-primary"> intelligence</span>
          </h1>
          <p className="mb-8 text-xl text-gray-600">
            Une solution complète pour gérer vos matières premières, créer vos recettes 
            et suivre vos commandes. Optimisez vos coûts et boostez votre rentabilité.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/auth">
              <Button size="lg" className="w-full sm:w-auto">
                Essayer gratuitement
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              En savoir plus
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-lg text-gray-600">
            Des outils puissants pour optimiser votre activité de pâtisserie
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <Package className="mb-2 h-10 w-10 text-primary" />
              <CardTitle>Gestion des stocks</CardTitle>
              <CardDescription>
                Suivez vos matières premières en temps réel et ne tombez plus jamais en rupture
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Suivi des quantités et dates d'achat</li>
                <li>• Gestion des fournisseurs</li>
                <li>• Alertes de stock bas</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <ChefHat className="mb-2 h-10 w-10 text-primary" />
              <CardTitle>Création de recettes</CardTitle>
              <CardDescription>
                Créez vos recettes et calculez automatiquement le prix de revient
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Recettes détaillées avec ingrédients</li>
                <li>• Calcul automatique des coûts</li>
                <li>• Gestion des portions</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <ShoppingCart className="mb-2 h-10 w-10 text-primary" />
              <CardTitle>Suivi des commandes</CardTitle>
              <CardDescription>
                Gérez vos commandes clients et mettez à jour automatiquement vos stocks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Gestion des commandes clients</li>
                <li>• Mise à jour automatique des stocks</li>
                <li>• Suivi des livraisons</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Prêt à optimiser votre pâtisserie ?
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Rejoignez les pâtissiers qui ont déjà adopté Gestion Futée
          </p>
          <Link href="/auth">
            <Button size="lg" variant="secondary">
              Commencer maintenant
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <ChefHat className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-gray-900">Gestion Futée</span>
          </div>
          <p className="text-gray-600">
            © 2024 Gestion Futée. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
} 