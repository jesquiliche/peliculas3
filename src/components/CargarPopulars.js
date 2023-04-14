import axios from 'axios';
import ListaPeliculas from './ListaPeliculas';

const fetchPeliculas = async () => {
  try {
    const respuesta = await axios.get(
      `https://api.themoviedb.org/3/movie/popular`,
      {
        params: {
          api_key: '25349d5497c8655f081fc1abfbd5aa08',
          language: 'es-ES',
          page: 1
        },
        headers: {
          'Cache-Control': 'no-store'
        }
      }
    );
    return respuesta.data;
  } catch (error) {
    console.log(error);
  }
};

const CargarPopulares = async () => {
  const peliculas = await fetchPeliculas();
  
  return (
    <ListaPeliculas data={peliculas.results} title='Más populares' />
  )
};

export default CargarPopulares;
