"use client";

import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";


const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    
    try {
      const results = [];

      for (let page = 1; page <= 3; page++) {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie`,
          {
            params: {
              api_key: "25349d5497c8655f081fc1abfbd5aa08",
              query: searchTerm,
              language: "es-ES",
              page: page,
            },
          }
        );
        results.push(...response.data.results);
      }
  
      await setSearchResults(results.slice(0, 100));  
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    
  }, []);

  return (
    <div className="container-fluid my-4 mt-5  col-lg-12 mx-auto">
      <div className="row ">
        <div className="col">
          <div className="py-2 p-4 mt-3">
          <h1 className="text-center mb-4 mt-3">Busca películas</h1>
          <div className="input-group mb-3">
            <div>
            <label>Por genero,título o director</label>
            </div>
            
            <input
              type="text"
              className="form-control"
              placeholder="Buscar por título, género o director"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="btn btn-primary ml-2"
              type="button"
              onClick={handleSearch}
            >
              Buscar
            </button>
          </div>
          </div>
          <div className="container-fluid mt-5">
          
            <div className="row mt-5">
              {searchResults.map((p) => (
                <div
                  key={p.id}
                  className="card col-lg-2 col-md-3 col-sm-6 mx-auto mt-3 px-1"
                >
                  <div className="card-header text-center">
                    <Link href={`/Detalle/${p.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w154${p.poster_path}`}
                        alt={p.title}
                      />
                    </Link>
                  </div>
                  <div className="card-body mx-auto">
                    <h6>
                      <Link href={`/Detalle/${p.id}`}>{p.title}</Link>
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
