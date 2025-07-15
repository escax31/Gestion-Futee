import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User
} from 'firebase/auth'
import { auth } from './config'

// Inscription
export const signUp = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

// Connexion
export const signIn = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
}

// Déconnexion
export const signOut = async () => {
  return firebaseSignOut(auth)
}

// Observer l'état d'authentification
export const onAuthStateChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback)
} 