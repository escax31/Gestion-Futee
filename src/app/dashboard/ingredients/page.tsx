'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Plus, Search, Package, Edit, Trash2 } from 'lucide-react'
import { useIngredients } from '@/lib/hooks/useIngredients'
import { IngredientForm } from '@/components/ingredients/IngredientForm'
import { Ingredient } from '@/lib/types'

export default function IngredientsPage() {
  const { ingredients, loading, error, removeIngredient } = useIngredients()
  const [searchTerm, setSearchTerm] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editingIngredient, setEditingIngredient] = useState<Ingredient | null>(null)

  // Filtrer les ingrédients selon le terme de recherche
  const filteredIngredients = ingredients.filter(ingredient =>
    ingredient.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ingredient.fournisseur.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleEdit = (ingredient: Ingredient) => {
    setEditingIngredient(ingredient)
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet ingrédient ?')) {
      try {
        await removeIngredient(id)
      } catch (error) {
        console.error('Erreur lors de la suppression:', error)
      }
    }
  }

  const handleCloseForm = () => {
    setShowForm(false)
    setEditingIngredient(null)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Matières premières</h1>
          <p className="text-gray-600">Gérez vos stocks d'ingrédients</p>
        </div>
        <Button onClick={() => setShowForm(true)} className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Ajouter un ingrédient</span>
        </Button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {/* Barre de recherche */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Rechercher par nom ou fournisseur..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Liste des ingrédients */}
      {filteredIngredients.length === 0 ? (
        <Card>
          <CardContent className="pt-6 text-center">
            <Package className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {ingredients.length === 0 ? 'Aucun ingrédient' : 'Aucun résultat'}
            </h3>
            <p className="text-gray-600 mb-4">
              {ingredients.length === 0
                ? 'Commencez par ajouter vos premiers ingrédients'
                : 'Aucun ingrédient ne correspond à votre recherche'}
            </p>
            {ingredients.length === 0 && (
              <Button onClick={() => setShowForm(true)}>
                Ajouter un ingrédient
              </Button>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredIngredients.map((ingredient) => (
            <Card key={ingredient.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{ingredient.nom}</CardTitle>
                    <CardDescription>
                      {ingredient.fournisseur}
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(ingredient)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(ingredient.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Quantité:</span>
                    <span className="font-medium">
                      {ingredient.quantite} {ingredient.unite}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Prix d'achat:</span>
                    <span className="font-medium">{ingredient.prixAchat.toFixed(2)} €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Prix au {ingredient.unite}:</span>
                    <span className="font-medium">
                      {(ingredient.prixAchat / ingredient.quantite).toFixed(2)} €
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Date d'achat:</span>
                    <span className="font-medium">
                      {ingredient.dateAchat.toLocaleDateString('fr-FR')}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Modal de formulaire */}
      {showForm && (
        <IngredientForm
          ingredient={editingIngredient}
          onClose={handleCloseForm}
        />
      )}
    </div>
  )
} 