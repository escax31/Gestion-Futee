'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Plus, Search, ChefHat, Edit, Trash2, Calculator } from 'lucide-react'

export default function RecettesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [showForm, setShowForm] = useState(false)

  // Données d'exemple pour la démonstration
  const recettes = [
    {
      id: '1',
      nom: 'Tarte aux pommes',
      ingredients: [
        { nom: 'Farine T65', quantite: 250, unite: 'g', prixUnitaire: 0.002 },
        { nom: 'Beurre', quantite: 125, unite: 'g', prixUnitaire: 0.008 },
        { nom: 'Pommes', quantite: 800, unite: 'g', prixUnitaire: 0.003 },
        { nom: 'Sucre', quantite: 100, unite: 'g', prixUnitaire: 0.0015 },
      ],
      prixRevient: 4.45,
      methode: 'Préparer la pâte, étaler, garnir de pommes et cuire 35min à 180°C',
    },
    {
      id: '2',
      nom: 'Gâteau au chocolat',
      ingredients: [
        { nom: 'Farine T65', quantite: 200, unite: 'g', prixUnitaire: 0.002 },
        { nom: 'Chocolat noir', quantite: 200, unite: 'g', prixUnitaire: 0.012 },
        { nom: 'Beurre', quantite: 100, unite: 'g', prixUnitaire: 0.008 },
        { nom: 'Sucre', quantite: 150, unite: 'g', prixUnitaire: 0.0015 },
      ],
      prixRevient: 3.83,
      methode: 'Faire fondre le chocolat, mélanger tous les ingrédients, cuire 25min à 180°C',
    },
  ]

  const filteredRecettes = recettes.filter(recette =>
    recette.nom.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Recettes</h1>
          <p className="text-gray-600">Créez et gérez vos recettes avec calcul automatique des coûts</p>
        </div>
        <Button onClick={() => setShowForm(true)} className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Nouvelle recette</span>
        </Button>
      </div>

      {/* Barre de recherche */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Rechercher une recette..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Liste des recettes */}
      {filteredRecettes.length === 0 ? (
        <Card>
          <CardContent className="pt-6 text-center">
            <ChefHat className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {recettes.length === 0 ? 'Aucune recette' : 'Aucun résultat'}
            </h3>
            <p className="text-gray-600 mb-4">
              {recettes.length === 0
                ? 'Commencez par créer votre première recette'
                : 'Aucune recette ne correspond à votre recherche'}
            </p>
            {recettes.length === 0 && (
              <Button onClick={() => setShowForm(true)}>
                Créer une recette
              </Button>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredRecettes.map((recette) => (
            <Card key={recette.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{recette.nom}</CardTitle>
                    <CardDescription className="flex items-center mt-2">
                      <Calculator className="h-4 w-4 mr-1" />
                      Prix de revient: <span className="font-semibold ml-1">{recette.prixRevient.toFixed(2)} €</span>
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Ingrédients */}
                  <div>
                    <h4 className="font-medium mb-2">Ingrédients:</h4>
                    <div className="space-y-1">
                      {recette.ingredients.map((ingredient, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span>{ingredient.nom}</span>
                          <span>
                            {ingredient.quantite} {ingredient.unite} 
                            <span className="text-gray-500 ml-2">
                              ({(ingredient.quantite * ingredient.prixUnitaire).toFixed(2)} €)
                            </span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Méthode */}
                  <div>
                    <h4 className="font-medium mb-2">Méthode:</h4>
                    <p className="text-sm text-gray-600">{recette.methode}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Nouvelle recette</CardTitle>
                <Button variant="ghost" size="sm" onClick={() => setShowForm(false)}>
                  ×
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Formulaire de création de recette - À implémenter</p>
              <p className="text-sm text-gray-500 mt-2">
                Cette interface permettra de sélectionner les ingrédients disponibles et calculera automatiquement le prix de revient.
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
} 