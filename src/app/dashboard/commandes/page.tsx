'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Plus, Search, ShoppingCart, Edit, Trash2, Calendar, User } from 'lucide-react'

export default function CommandesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [filterStatus, setFilterStatus] = useState('all')

  // Données d'exemple pour la démonstration
  const commandes = [
    {
      id: '1',
      client: 'Marie Dubois',
      items: [
        { nom: 'Tarte aux pommes', quantite: 2, prixRevient: 4.45 },
        { nom: 'Gâteau au chocolat', quantite: 1, prixRevient: 3.83 },
      ],
      prixVente: 35.00,
      dateLivraison: new Date('2024-01-15'),
      dateCommande: new Date('2024-01-10'),
      statut: 'en-preparation' as const,
    },
    {
      id: '2',
      client: 'Restaurant Le Gourmand',
      items: [
        { nom: 'Tarte aux pommes', quantite: 5, prixRevient: 4.45 },
      ],
      prixVente: 75.00,
      dateLivraison: new Date('2024-01-20'),
      dateCommande: new Date('2024-01-12'),
      statut: 'prete' as const,
    },
    {
      id: '3',
      client: 'Jean Martin',
      items: [
        { nom: 'Gâteau au chocolat', quantite: 1, prixRevient: 3.83 },
      ],
      prixVente: 18.00,
      dateLivraison: new Date('2024-01-08'),
      dateCommande: new Date('2024-01-05'),
      statut: 'livree' as const,
    },
  ]

  const statusLabels = {
    'en-preparation': 'En préparation',
    'prete': 'Prête',
    'livree': 'Livrée',
    'annulee': 'Annulée',
  }

  const statusColors = {
    'en-preparation': 'bg-yellow-100 text-yellow-800',
    'prete': 'bg-blue-100 text-blue-800',
    'livree': 'bg-green-100 text-green-800',
    'annulee': 'bg-red-100 text-red-800',
  }

  const filteredCommandes = commandes.filter(commande => {
    const matchesSearch = commande.client.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || commande.statut === filterStatus
    return matchesSearch && matchesStatus
  })

  const calculateMargin = (prixVente: number, items: any[]) => {
    const coutTotal = items.reduce((total, item) => total + (item.prixRevient * item.quantite), 0)
    return prixVente - coutTotal
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Commandes</h1>
          <p className="text-gray-600">Gérez vos commandes et suivez vos ventes</p>
        </div>
        <Button onClick={() => setShowForm(true)} className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Nouvelle commande</span>
        </Button>
      </div>

      {/* Statistiques rapides */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{commandes.length}</div>
            <p className="text-sm text-muted-foreground">Total commandes</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">
              {commandes.filter(c => c.statut === 'en-preparation').length}
            </div>
            <p className="text-sm text-muted-foreground">En préparation</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">
              {commandes.reduce((total, c) => total + c.prixVente, 0).toFixed(0)} €
            </div>
            <p className="text-sm text-muted-foreground">Chiffre d'affaires</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">
              {commandes.reduce((total, c) => total + calculateMargin(c.prixVente, c.items), 0).toFixed(0)} €
            </div>
            <p className="text-sm text-muted-foreground">Marge totale</p>
          </CardContent>
        </Card>
      </div>

      {/* Filtres */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Rechercher par client..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-3 py-2 border border-input bg-background rounded-md text-sm"
        >
          <option value="all">Tous les statuts</option>
          {Object.entries(statusLabels).map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      {/* Liste des commandes */}
      {filteredCommandes.length === 0 ? (
        <Card>
          <CardContent className="pt-6 text-center">
            <ShoppingCart className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {commandes.length === 0 ? 'Aucune commande' : 'Aucun résultat'}
            </h3>
            <p className="text-gray-600 mb-4">
              {commandes.length === 0
                ? 'Commencez par créer votre première commande'
                : 'Aucune commande ne correspond à vos critères'}
            </p>
            {commandes.length === 0 && (
              <Button onClick={() => setShowForm(true)}>
                Créer une commande
              </Button>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {filteredCommandes.map((commande) => (
            <Card key={commande.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-4">
                    <div>
                      <CardTitle className="text-lg flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        {commande.client}
                      </CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        Livraison: {commande.dateLivraison.toLocaleDateString('fr-FR')}
                      </CardDescription>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[commande.statut]}`}>
                      {statusLabels[commande.statut]}
                    </span>
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
                <div className="grid md:grid-cols-3 gap-4">
                  {/* Articles */}
                  <div>
                    <h4 className="font-medium mb-2">Articles:</h4>
                    <div className="space-y-1">
                      {commande.items.map((item, index) => (
                        <div key={index} className="text-sm">
                          {item.nom} × {item.quantite}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Finances */}
                  <div>
                    <h4 className="font-medium mb-2">Finances:</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Prix de vente:</span>
                        <span className="font-medium">{commande.prixVente.toFixed(2)} €</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Coût de revient:</span>
                        <span>{commande.items.reduce((total, item) => total + (item.prixRevient * item.quantite), 0).toFixed(2)} €</span>
                      </div>
                      <div className="flex justify-between border-t pt-1">
                        <span>Marge:</span>
                        <span className="font-medium text-green-600">
                          {calculateMargin(commande.prixVente, commande.items).toFixed(2)} €
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Dates */}
                  <div>
                    <h4 className="font-medium mb-2">Dates:</h4>
                    <div className="space-y-1 text-sm">
                      <div>
                        <span className="text-gray-600">Commandé:</span>
                        <br />
                        {commande.dateCommande.toLocaleDateString('fr-FR')}
                      </div>
                      <div>
                        <span className="text-gray-600">Livraison:</span>
                        <br />
                        {commande.dateLivraison.toLocaleDateString('fr-FR')}
                      </div>
                    </div>
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
                <CardTitle>Nouvelle commande</CardTitle>
                <Button variant="ghost" size="sm" onClick={() => setShowForm(false)}>
                  ×
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Formulaire de création de commande - À implémenter</p>
              <p className="text-sm text-gray-500 mt-2">
                Cette interface permettra de sélectionner les recettes, calculer automatiquement les coûts et mettre à jour les stocks.
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
} 