'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { X } from 'lucide-react'
import { useIngredients } from '@/lib/hooks/useIngredients'
import { Ingredient } from '@/lib/types'

interface IngredientFormProps {
  ingredient?: Ingredient | null
  onClose: () => void
}

const units = ['kg', 'g', 'L', 'mL', 'pièce(s)', 'sachet(s)', 'boîte(s)']

export function IngredientForm({ ingredient, onClose }: IngredientFormProps) {
  const { createIngredient, modifyIngredient } = useIngredients()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    nom: '',
    quantite: '',
    unite: 'kg',
    prixAchat: '',
    fournisseur: '',
    dateAchat: new Date().toISOString().split('T')[0],
  })

  useEffect(() => {
    if (ingredient) {
      setFormData({
        nom: ingredient.nom,
        quantite: ingredient.quantite.toString(),
        unite: ingredient.unite,
        prixAchat: ingredient.prixAchat.toString(),
        fournisseur: ingredient.fournisseur,
        dateAchat: ingredient.dateAchat.toISOString().split('T')[0],
      })
    }
  }, [ingredient])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const ingredientData = {
        nom: formData.nom.trim(),
        quantite: parseFloat(formData.quantite),
        unite: formData.unite,
        prixAchat: parseFloat(formData.prixAchat),
        fournisseur: formData.fournisseur.trim(),
        dateAchat: new Date(formData.dateAchat),
      }

      if (ingredient) {
        await modifyIngredient(ingredient.id, ingredientData)
      } else {
        await createIngredient(ingredientData)
      }

      onClose()
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>
                {ingredient ? 'Modifier l\'ingrédient' : 'Nouvel ingrédient'}
              </CardTitle>
              <CardDescription>
                {ingredient ? 'Modifiez les informations de l\'ingrédient' : 'Ajoutez un nouvel ingrédient à votre stock'}
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nom" className="block text-sm font-medium mb-2">
                Nom de l'ingrédient *
              </label>
              <Input
                id="nom"
                value={formData.nom}
                onChange={(e) => handleChange('nom', e.target.value)}
                placeholder="Ex: Farine T65"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="quantite" className="block text-sm font-medium mb-2">
                  Quantité *
                </label>
                <Input
                  id="quantite"
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.quantite}
                  onChange={(e) => handleChange('quantite', e.target.value)}
                  placeholder="5"
                  required
                />
              </div>

              <div>
                <label htmlFor="unite" className="block text-sm font-medium mb-2">
                  Unité *
                </label>
                <select
                  id="unite"
                  value={formData.unite}
                  onChange={(e) => handleChange('unite', e.target.value)}
                  className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                >
                  {units.map(unit => (
                    <option key={unit} value={unit}>{unit}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="prixAchat" className="block text-sm font-medium mb-2">
                Prix d'achat (€) *
              </label>
              <Input
                id="prixAchat"
                type="number"
                step="0.01"
                min="0"
                value={formData.prixAchat}
                onChange={(e) => handleChange('prixAchat', e.target.value)}
                placeholder="12.50"
                required
              />
            </div>

            <div>
              <label htmlFor="fournisseur" className="block text-sm font-medium mb-2">
                Fournisseur *
              </label>
              <Input
                id="fournisseur"
                value={formData.fournisseur}
                onChange={(e) => handleChange('fournisseur', e.target.value)}
                placeholder="Ex: Boulangerie Martin"
                required
              />
            </div>

            <div>
              <label htmlFor="dateAchat" className="block text-sm font-medium mb-2">
                Date d'achat *
              </label>
              <Input
                id="dateAchat"
                type="date"
                value={formData.dateAchat}
                onChange={(e) => handleChange('dateAchat', e.target.value)}
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <div className="flex space-x-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Annuler
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="flex-1"
              >
                {isLoading ? 'Enregistrement...' : ingredient ? 'Modifier' : 'Ajouter'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
} 