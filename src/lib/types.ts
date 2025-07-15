// Types pour les matières premières
export interface Ingredient {
  id: string
  nom: string
  quantite: number
  unite: string
  prixAchat: number
  fournisseur: string
  dateAchat: Date
  userId: string
}

// Types pour les recettes
export interface RecetteIngredient {
  ingredientId: string
  quantite: number
  nom?: string // Pour l'affichage
  unite?: string // Pour l'affichage
  prixUnitaire?: number // Pour le calcul
}

export interface Recette {
  id: string
  nom: string
  ingredients: RecetteIngredient[]
  methode: string
  prixRevient?: number // Calculé automatiquement
  userId: string
  dateCreation: Date
}

// Types pour les commandes
export interface CommandeItem {
  recetteId: string
  quantite: number
  nom?: string // Pour l'affichage
  prixRevient?: number // Pour le calcul
}

export interface Commande {
  id: string
  client: string
  items: CommandeItem[]
  prixVente: number
  dateLivraison: Date
  statut: 'en-preparation' | 'prete' | 'livree' | 'annulee'
  dateCommande: Date
  userId: string
}

// Types pour l'utilisateur
export interface UserProfile {
  id: string
  email: string
  nom?: string
  dateInscription: Date
} 