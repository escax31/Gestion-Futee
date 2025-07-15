'use client'

import { useState, useEffect } from 'react'
import { useAuthContext } from '@/components/auth/AuthProvider'
import { Commande } from '@/lib/types'
import {
  addCommande,
  updateCommande,
  deleteCommande,
  getCommandesByUser,
  subscribeToCollection,
} from '@/lib/firebase/firestore'

export function useCommandes() {
  const [commandes, setCommandes] = useState<Commande[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { user } = useAuthContext()

  useEffect(() => {
    if (!user) {
      setCommandes([])
      setLoading(false)
      return
    }

    const query = getCommandesByUser(user.uid)
    const unsubscribe = subscribeToCollection(query, (data) => {
      setCommandes(data)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [user])

  const createCommande = async (commandeData: Omit<Commande, 'id' | 'userId' | 'dateCommande'>) => {
    if (!user) throw new Error('Utilisateur non connecté')
    
    try {
      setError(null)
      await addCommande({
        ...commandeData,
        userId: user.uid,
        dateCommande: new Date(),
      })
    } catch (err: any) {
      setError(err.message)
      throw err
    }
  }

  const modifyCommande = async (id: string, commandeData: Partial<Commande>) => {
    try {
      setError(null)
      await updateCommande(id, commandeData)
    } catch (err: any) {
      setError(err.message)
      throw err
    }
  }

  const removeCommande = async (id: string) => {
    try {
      setError(null)
      await deleteCommande(id)
    } catch (err: any) {
      setError(err.message)
      throw err
    }
  }

  const updateStatut = async (id: string, statut: Commande['statut']) => {
    try {
      setError(null)
      await updateCommande(id, { statut })
    } catch (err: any) {
      setError(err.message)
      throw err
    }
  }

  return {
    commandes,
    loading,
    error,
    createCommande,
    modifyCommande,
    removeCommande,
    updateStatut,
  }
} 