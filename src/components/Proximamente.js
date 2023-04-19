
import ListaPeliculas from './ListaPeliculas'
const fetchPeliculas = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=25349d5497c8655f081fc1abfbd5aa08&language=es-ES&page=1`,
      {next: { revalidate: 60 } }
    
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }s
};
  
const Proximamente = async () => {
    const peliculas = await fetchPeliculas();
    
    return (
      <ListaPeliculas data={peliculas.results} title='Proximamente'></ListaPeliculas>
    )
  };
  
  export default Proximamente;

  