import axios from 'axios';
import ListaPeliculas from './ListaPeliculas';


const fetchPeliculas = async () => {
  try {
    const respuesta = await axios.get('https://api.themoviedb.org/3/movie/top_rated', {
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
  
  const MejorValoradas = async () => {
    const peliculas = await fetchPeliculas();
    
  /*  return (
      <div className="container mt-5">
        <div className="container text-center mt-5 text-dark">
        <h2 className='text-dark'>Mejor valoradas</h2>
      </div>
  
        <div className="row mt-5">
          {peliculas.results.map((p) => (
            <>
              <div className="card col-lg-2 mx-auto mt-3 px-1">
                <div className="card-header text-center">
                  <img src={`https://image.tmdb.org/t/p/w154${p.poster_path}`} />
                </div>
                <div className="card-body mx-auto">
                  <h6>{p.title}</h6>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    );*/

    return (
      <ListaPeliculas data={peliculas.results} title='Mejor valoradas'></ListaPeliculas>
    )
  };
  
  export default MejorValoradas;
  