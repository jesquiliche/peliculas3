'use client'
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

const Actores = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/person`,
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

  useEffect(() => {}, []);

  return (
    <div className="container my-4 mt-5  col-lg-12 mx-auto">
      <div className="row ">
        <div className="col">
          <h1 className="text-center mb-4 mt-3">Buscar actores</h1>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar por nombre de actor"
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
          <div className="container-fluid mt-5">
            <div className="row mt-5">
              {searchResults.map((actor) => (
                <div
                  key={actor.id}
                  className="card col-lg-2 col-md-3 col-sm-6 mx-auto mt-3 px-1"
                >
                  <div className="card-header text-center">
                    <Link href={`/actor/${actor.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w154${actor.profile_path}`}
                        alt={actor.name}
                      />
                    </Link>
                  </div>
                  <div className="card-body mx-auto">
                    <h6>
                      {actor.name}
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

export default Actores;
