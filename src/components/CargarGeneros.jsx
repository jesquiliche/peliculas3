import axios from "axios";
import ListaPeliculas from "./ListaPeliculas";



const fetchPeliculas = async (id) => {
  try {
    const respuesta = await axios.get(
      `https://api.themoviedb.org/3/discover/movie`,
      {
        params: {
          api_key: "25349d5497c8655f081fc1abfbd5aa08",
          language: "es-ES",
          sort_by: "popularity.desc",
          page: 1,
          with_genres: id,
        },
        
          cache: "no-store",
        
      }
    );
    return respuesta.data;
  } catch (error) {
    console.log(error);
  }
};

const CargarGeneros = async ({ id }) => {
  const peliculas = await fetchPeliculas(id);


  return (
    <>
    
    <ListaPeliculas data={peliculas.results} />;
    </>
  )
};

export default CargarGeneros;
export const dynamic='force-dynamic';
