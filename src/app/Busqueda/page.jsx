'use client'

import { useState } from "react";


const Home=()=> {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            api_key: "25349d5497c8655f081fc1abfbd5aa08",
            query: searchTerm,
            language: "es-ES",
          },
        }
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    
      <div className="container my-4 mt-5  col-lg-6 mx-auto">
        <div className="row">
          <div className="col">
            <h1 className="text-center mb-4 mt-3">Busca películas</h1>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar por título, género o director"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleSearch}
              >
                Buscar
              </button>
            </div>
        {/*    <div className="row row-cols-1 row-cols-md-3 g-4">
              {searchResults.map((movie) => (
                <div className="col" key={movie.id}>
                  <div className="card h-100">
                    <img
                      src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                      className="card-img-top"
                      alt={movie.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{movie.title}</h5>
                      <p className="card-text">{movie.overview}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <strong>Fecha de lanzamiento:</strong>{" "}
                        {movie.release_date}
                      </li>
                      <li className="list-group-item">
                        <strong>Calificación promedio:</strong> {movie.vote_average}
                      </li>
                     
                    </ul>
                  </div>
                </div>
              ))}
            </div>*/}
              </div>
        </div>
      </div>
    
  );
}

export default Home;