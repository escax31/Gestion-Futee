'use client'

import { useState, useEffect } from 'react'
import { useAuthContext } from '@/components/auth/AuthProvider'
import { Recette } from '@/lib/types'
import {
  addRecette,
  updateRecette,
  deleteRecette,
  getRecettesByUser,
  subscribeToCollection,
} from '@/lib/firebase/firestore'

export function useRecettes() {
  const [recettes, setRecettes] = useState<Recette[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { user } = useAuthContext()

  useEffect(() => {
    if (!user) {
      setRecettes([])
      setLoading(false)
      return
    }

    const query = getRecettesByUser(user.uid)
    const unsubscribe = subscribeToCollection(query, (data) => {
      setRecettes(data)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [user])

  const createRecette = async (recetteData: Omit<Recette, 'id' | 'userId' | 'dateCreation'>) => {
    if (!user) throw new Error('Utilisateur non connecté')
    
    try {
      setError(null)
      await addRecette({
        ...recetteData,
        userId: user.uid,
        dateCreation: new Date(),
      })
    } catch (err: any) {
      setError(err.message)
      throw err
    }
  }

  const modifyRecette = async (id: string, recetteData: Partial<Recette>) => {
    try {
      setError(null)
      await updateRecette(id, recetteData)
    } catch (err: any) {
      setError(err.message)
      throw err
    }
  }

  const removeRecette = async (id: string) => {
    try {
      setError(null)
      await deleteRecette(id)
    } catch (err: any) {
      setError(err.message)
      throw err
    }
  }

  return {
    recettes,
    loading,
    error,
    createRecette,
    modifyRecette,
    removeRecette,
  }
} 