'use client'

import { useState, useEffect } from 'react'
import { useAuthContext } from '@/components/auth/AuthProvider'
import { Ingredient } from '@/lib/types'
import {
  addIngredient,
  updateIngredient,
  deleteIngredient,
  getIngredientsByUser,
  subscribeToCollection,
} from '@/lib/firebase/firestore'

export function useIngredients() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { user } = useAuthContext()

  useEffect(() => {
    if (!user) {
      setIngredients([])
      setLoading(false)
      return
    }

    const query = getIngredientsByUser(user.uid)
    const unsubscribe = subscribeToCollection(query, (data) => {
      setIngredients(data)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [user])

  const createIngredient = async (ingredientData: Omit<Ingredient, 'id' | 'userId'>) => {
    if (!user) throw new Error('Utilisateur non connecté')
    
    try {
      setError(null)
      await addIngredient({
        ...ingredientData,
        userId: user.uid,
      })
    } catch (err: any) {
      setError(err.message)
      throw err
    }
  }

  const modifyIngredient = async (id: string, ingredientData: Partial<Ingredient>) => {
    try {
      setError(null)
      await updateIngredient(id, ingredientData)
    } catch (err: any) {
      setError(err.message)
      throw err
    }
  }

  const removeIngredient = async (id: string) => {
    try {
      setError(null)
      await deleteIngredient(id)
    } catch (err: any) {
      setError(err.message)
      throw err
    }
  }

  return {
    ingredients,
    loading,
    error,
    createIngredient,
    modifyIngredient,
    removeIngredient,
  }
} 