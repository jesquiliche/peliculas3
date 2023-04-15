"use client";

import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            api_key: "25349d5497c8655f081fc1abfbd5aa08",
            query: searchTerm,
            language: "es-ES",
            page: currentPage,
          },
        }
      );

      await setSearchResults(response.data.results);
      await setTotalPages(response.data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleSearchButtonClick = () => {
    setCurrentPage(1);
    handleSearch();
  };

  useEffect(() => {
    handleSearch();
  }, [currentPage]);

  return (
    <div className="container-fluid my-4 mt-5  col-lg-12 mx-auto">
      <div className="row ">
        <div className="col">
          <div className="py-2 p-4 mt-3">
            <h1 className="text-center mb-4 mt-3">Busca películas</h1>

            <label>Por género,título o director</label>

            <div className="input-group mb-3">
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
                onClick={handleSearchButtonClick}
              >
                Buscar
              </button>
            </div>
          </div>
          <div className="container-fluid mt-5">
            <div className="row col-lg-4 mx-auto">
              <button
                className="btn btn-outline-dark col-lg-3 mx-auto"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                <i className="fas fa-arrow-left"></i> Anterior
              </button>
              
                {currentPage} de {totalPages + " "}
              
              <button
                className="btn btn-outline-dark col-lg-3"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Siguiente <i className="fas fa-arrow-right"></i>
              </button>
            </div>
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
