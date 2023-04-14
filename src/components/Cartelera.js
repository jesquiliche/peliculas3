import axios from 'axios';
import ListaPeliculas from './ListaPeliculas';


const fetchPeliculas = async () => {
  try {
    const respuesta = await axios.get('https://api.themoviedb.org/3/movie/now_playing', {
      params: {
        api_key: '25349d5497c8655f081fc1abfbd5aa08',
        language: 'es-ES',
        page: 1,
      },
      headers: {
        'Cache-Control': 'no-cache',
      },
    });
    return respuesta.data;
  } catch (error) {
    console.log(error);
  }
};

const Cartelera = async () => {
  const peliculas = await fetchPeliculas();

  return (
    <ListaPeliculas data={peliculas.results} title='Cartelera' />

  )
};

export default Cartelera;
