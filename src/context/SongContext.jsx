import { createContext, useState, useEffect } from 'react'
import canciones from '@/assets/listaCanciones.json'

// 1. Crear el contexto
const SongContext = createContext()

// 2. Crear el proveedor del contexto, envuelve a los componentes que van a usar el contexto.
function SongProvider ({ children }) {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedSong, setSelectedSong] = useState({})

  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  const data = {
    list,
    loading,
    selectedSong,
    setSelectedSong
  }

  return (
    <SongContext.Provider value={{ data }}>
      {children}
    </SongContext.Provider>
  )
}

export {
  SongProvider,
  SongContext
}
