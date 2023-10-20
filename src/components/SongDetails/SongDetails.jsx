import { useSongContext } from '@/hooks/useSongContext'
import React from 'react'

const SongDetails = () => {
  const { selectedSong } = useSongContext()

  return (
    <>
      {
        selectedSong.title
          ? (
            <div>
              <img src={selectedSong.imq_url} alt={selectedSong.title} />
              <h2>{selectedSong.title}</h2>
              <h3>{selectedSong.artist}</h3>
              <h6>{selectedSong.year}</h6>
            </div>
            )
          : <h1>Selecciona una canción</h1>
    }
    </>
  )
}

export default SongDetails