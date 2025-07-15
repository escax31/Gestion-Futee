import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Package, Receipt, ShoppingCart, TrendingUp } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="text-gray-600">Aperçu de votre activité pâtisserie</p>
      </div>

      {/* Statistiques principales */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total ingrédients</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              +2 depuis le mois dernier
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recettes créées</CardTitle>
            <Receipt className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +3 cette semaine
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Commandes ce mois</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              +12% par rapport au mois dernier
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Chiffre d'affaires</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,240 €</div>
            <p className="text-xs text-muted-foreground">
              +18% par rapport au mois dernier
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Actions rapides */}
        <Card>
          <CardHeader>
            <CardTitle>Actions rapides</CardTitle>
            <CardDescription>
              Accédez rapidement aux fonctionnalités principales
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <a
                href="/dashboard/ingredients"
                className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <Package className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <div className="font-medium">Ajouter un ingrédient</div>
                  <div className="text-sm text-gray-600">Enregistrer un nouvel achat</div>
                </div>
              </a>
              
              <a
                href="/dashboard/recettes"
                className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
              >
                <Receipt className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <div className="font-medium">Créer une recette</div>
                  <div className="text-sm text-gray-600">Nouvelle recette avec calcul de coût</div>
                </div>
              </a>
              
              <a
                href="/dashboard/commandes"
                className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
              >
                <ShoppingCart className="h-8 w-8 text-purple-600 mr-3" />
                <div>
                  <div className="font-medium">Nouvelle commande</div>
                  <div className="text-sm text-gray-600">Enregistrer une commande client</div>
                </div>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Informations récentes */}
        <Card>
          <CardHeader>
            <CardTitle>Activité récente</CardTitle>
            <CardDescription>
              Dernières actions sur votre compte
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Ingrédient ajouté</div>
                  <div className="text-xs text-gray-600">Farine T65 - 5kg</div>
                </div>
                <div className="text-xs text-gray-600">Il y a 2h</div>
              </div>
              
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Recette créée</div>
                  <div className="text-xs text-gray-600">Tarte aux pommes</div>
                </div>
                <div className="text-xs text-gray-600">Hier</div>
              </div>
              
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Commande livrée</div>
                  <div className="text-xs text-gray-600">Client Dubois</div>
                </div>
                <div className="text-xs text-gray-600">Il y a 2 jours</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 