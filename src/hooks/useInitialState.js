import { useState, useEffect}  from 'react'


const useInitialState = (API) => {
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] })// se maneja el estado desde aqui
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setVideos(data))
  }, [])// arreglo vacio para evitar loop infinito
  return videos
}

export default useInitialState