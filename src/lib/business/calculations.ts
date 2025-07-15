import { RecetteIngredient, Ingredient, CommandeItem } from '@/lib/types'

/**
 * Calcule le prix de revient d'une recette
 * @param ingredients Liste des ingrédients avec quantités
 * @param ingredientsStock Stock d'ingrédients disponibles
 * @returns Prix de revient total en euros
 */
export function calculateRecettePrixRevient(
  ingredients: RecetteIngredient[],
  ingredientsStock: Ingredient[]
): number {
  let totalCost = 0

  ingredients.forEach(recetteIngredient => {
    // Trouver l'ingrédient dans le stock
    const stockIngredient = ingredientsStock.find(
      stock => stock.id === recetteIngredient.ingredientId
    )

    if (stockIngredient) {
      // Calculer le prix unitaire (prix / quantité)
      const prixUnitaire = stockIngredient.prixAchat / stockIngredient.quantite
      
      // Calculer le coût pour la quantité utilisée dans la recette
      const coutIngredient = prixUnitaire * recetteIngredient.quantite
      
      totalCost += coutIngredient
    }
  })

  return Math.round(totalCost * 100) / 100 // Arrondir à 2 décimales
}

/**
 * Calcule le coût total d'une commande
 * @param items Articles de la commande
 * @returns Coût total en euros
 */
export function calculateCommandeCoutTotal(items: CommandeItem[]): number {
  const total = items.reduce((sum, item) => {
    return sum + (item.prixRevient || 0) * item.quantite
  }, 0)

  return Math.round(total * 100) / 100
}

/**
 * Calcule la marge d'une commande
 * @param prixVente Prix de vente total
 * @param items Articles de la commande
 * @returns Marge en euros
 */
export function calculateCommandeMarge(
  prixVente: number,
  items: CommandeItem[]
): number {
  const coutTotal = calculateCommandeCoutTotal(items)
  const marge = prixVente - coutTotal

  return Math.round(marge * 100) / 100
}

/**
 * Calcule le pourcentage de marge
 * @param prixVente Prix de vente total
 * @param items Articles de la commande
 * @returns Pourcentage de marge (0-100)
 */
export function calculateMargePercentage(
  prixVente: number,
  items: CommandeItem[]
): number {
  if (prixVente === 0) return 0

  const marge = calculateCommandeMarge(prixVente, items)
  const percentage = (marge / prixVente) * 100

  return Math.round(percentage * 100) / 100
}

/**
 * Met à jour les quantités d'ingrédients après production d'une recette
 * @param ingredients Stock actuel d'ingrédients
 * @param recetteIngredients Ingrédients utilisés dans la recette
 * @param quantiteProduction Nombre de fois que la recette est produite
 * @returns Nouveau stock d'ingrédients
 */
export function updateStockAfterProduction(
  ingredients: Ingredient[],
  recetteIngredients: RecetteIngredient[],
  quantiteProduction: number
): Ingredient[] {
  return ingredients.map(ingredient => {
    // Chercher si cet ingrédient est utilisé dans la recette
    const usedIngredient = recetteIngredients.find(
      ri => ri.ingredientId === ingredient.id
    )

    if (usedIngredient) {
      // Calculer la quantité totale utilisée
      const quantiteUtilisee = usedIngredient.quantite * quantiteProduction
      
      // Déduire du stock (ne pas descendre en dessous de 0)
      const newQuantite = Math.max(0, ingredient.quantite - quantiteUtilisee)

      return {
        ...ingredient,
        quantite: newQuantite
      }
    }

    return ingredient
  })
}

/**
 * Vérifie si une recette peut être produite avec le stock disponible
 * @param recetteIngredients Ingrédients nécessaires
 * @param ingredientsStock Stock disponible
 * @param quantite Quantité à produire
 * @returns true si possible, false sinon
 */
export function canProduceRecette(
  recetteIngredients: RecetteIngredient[],
  ingredientsStock: Ingredient[],
  quantite: number = 1
): boolean {
  return recetteIngredients.every(recetteIngredient => {
    const stockIngredient = ingredientsStock.find(
      stock => stock.id === recetteIngredient.ingredientId
    )

    if (!stockIngredient) return false

    const quantiteNecessaire = recetteIngredient.quantite * quantite
    return stockIngredient.quantite >= quantiteNecessaire
  })
}

/**
 * Calcule les statistiques financières d'une période
 * @param commandes Liste des commandes
 * @returns Statistiques financières
 */
export function calculateStatistiques(commandes: any[]) {
  const totalCommandes = commandes.length
  const totalVentes = commandes.reduce((sum, cmd) => sum + cmd.prixVente, 0)
  const totalCouts = commandes.reduce((sum, cmd) => 
    sum + calculateCommandeCoutTotal(cmd.items), 0
  )
  const totalMarge = totalVentes - totalCouts
  const margePercentage = totalVentes > 0 ? (totalMarge / totalVentes) * 100 : 0

  return {
    totalCommandes,
    totalVentes: Math.round(totalVentes * 100) / 100,
    totalCouts: Math.round(totalCouts * 100) / 100,
    totalMarge: Math.round(totalMarge * 100) / 100,
    margePercentage: Math.round(margePercentage * 100) / 100
  }
} 