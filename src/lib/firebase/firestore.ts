import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  query,
  where,
  orderBy,
  onSnapshot,
  Timestamp,
} from 'firebase/firestore'
import { db } from './config'
import { Ingredient, Recette, Commande } from '@/lib/types'

// Fonctions pour les ingrédients
export const ingredientsCollection = collection(db, 'ingredients')

export const addIngredient = async (ingredient: Omit<Ingredient, 'id'>) => {
  const docRef = await addDoc(ingredientsCollection, {
    ...ingredient,
    dateAchat: Timestamp.fromDate(ingredient.dateAchat),
  })
  return docRef.id
}

export const updateIngredient = async (id: string, ingredient: Partial<Ingredient>) => {
  const docRef = doc(db, 'ingredients', id)
  const updateData = { ...ingredient }
  if (ingredient.dateAchat) {
    updateData.dateAchat = Timestamp.fromDate(ingredient.dateAchat)
  }
  await updateDoc(docRef, updateData)
}

export const deleteIngredient = async (id: string) => {
  const docRef = doc(db, 'ingredients', id)
  await deleteDoc(docRef)
}

export const getIngredientsByUser = (userId: string) => {
  return query(
    ingredientsCollection,
    where('userId', '==', userId),
    orderBy('dateAchat', 'desc')
  )
}

// Fonctions pour les recettes
export const recettesCollection = collection(db, 'recettes')

export const addRecette = async (recette: Omit<Recette, 'id'>) => {
  const docRef = await addDoc(recettesCollection, {
    ...recette,
    dateCreation: Timestamp.fromDate(recette.dateCreation),
  })
  return docRef.id
}

export const updateRecette = async (id: string, recette: Partial<Recette>) => {
  const docRef = doc(db, 'recettes', id)
  const updateData = { ...recette }
  if (recette.dateCreation) {
    updateData.dateCreation = Timestamp.fromDate(recette.dateCreation)
  }
  await updateDoc(docRef, updateData)
}

export const deleteRecette = async (id: string) => {
  const docRef = doc(db, 'recettes', id)
  await deleteDoc(docRef)
}

export const getRecettesByUser = (userId: string) => {
  return query(
    recettesCollection,
    where('userId', '==', userId),
    orderBy('dateCreation', 'desc')
  )
}

// Fonctions pour les commandes
export const commandesCollection = collection(db, 'commandes')

export const addCommande = async (commande: Omit<Commande, 'id'>) => {
  const docRef = await addDoc(commandesCollection, {
    ...commande,
    dateCommande: Timestamp.fromDate(commande.dateCommande),
    dateLivraison: Timestamp.fromDate(commande.dateLivraison),
  })
  return docRef.id
}

export const updateCommande = async (id: string, commande: Partial<Commande>) => {
  const docRef = doc(db, 'commandes', id)
  const updateData = { ...commande }
  if (commande.dateCommande) {
    updateData.dateCommande = Timestamp.fromDate(commande.dateCommande)
  }
  if (commande.dateLivraison) {
    updateData.dateLivraison = Timestamp.fromDate(commande.dateLivraison)
  }
  await updateDoc(docRef, updateData)
}

export const deleteCommande = async (id: string) => {
  const docRef = doc(db, 'commandes', id)
  await deleteDoc(docRef)
}

export const getCommandesByUser = (userId: string) => {
  return query(
    commandesCollection,
    where('userId', '==', userId),
    orderBy('dateCommande', 'desc')
  )
}

// Helper pour écouter les changements en temps réel
export const subscribeToCollection = (
  query: any,
  callback: (data: any[]) => void
) => {
  return onSnapshot(query, (snapshot) => {
    const data = snapshot.docs.map((doc) => {
      const docData = doc.data()
      return {
        id: doc.id,
        ...docData,
        // Convertir les Timestamps en Dates
        dateAchat: docData.dateAchat?.toDate(),
        dateCreation: docData.dateCreation?.toDate(),
        dateCommande: docData.dateCommande?.toDate(),
        dateLivraison: docData.dateLivraison?.toDate(),
      }
    })
    callback(data)
  })
} 