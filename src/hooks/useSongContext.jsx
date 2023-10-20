import { useContext } from 'react'
import { SongContext } from '@/context/SongContext'

// 3. Crear al consumidor del contexto.
export const useSongContext = () => {
  const context = useContext(SongContext)
  if (!context) {
    throw new Error('useSongContext must be used within a SongProvider')
  }
  return context
}
