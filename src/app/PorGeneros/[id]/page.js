"use client";

import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = ({params}) => {
  const id=params.id;
  
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [actualiza,setActualiza]=useState(true);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=25349d5497c8655f081fc1abfbd5aa08&language=es-ES&sort_by=popularity.desc&page=${currentPage}&with_genres=${id}`,
        { cache: "no-store" }
      );
  
      const data = await response.json();
      setSearchResults(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFirst = () => {
    setCurrentPage(1);
  };
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleLast = async() => {
    await setCurrentPage(totalPages);
    await setActualiza(!actualiza);
  };

  
  useEffect(() => {
    handleSearch();
  }, [currentPage,actualiza]);

  return (
    <div className="container-fluid mt-5 btn-sm mx-auto">
    <div className="row col-sm-2 mt-5 mx-auto text-center">
      <div className="btn-group mx-auto">
       {/* <button
          className="btn btn-outline-dark btn-sm mx-auto"
          onClick={handleFirst}
          disabled={currentPage === 1}
        >
          {"<<"}
  </button>*/}
        <button
          className="btn btn-outline-dark btn-sm mx-auto"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        <div className="d-flex align-items-center mx-2">
          {currentPage} de {totalPages + " "}
        </div>
        <button
          className="btn btn-outline-dark btn-sm mx-auto"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
       {/* <button
          className="btn btn-outline-dark btn-sm mx-auto"
          onClick={handleLast}
          disabled={currentPage === totalPages}
        >
          {">>"}
  </button>*/}
      </div>
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
  </div>
    
  );
};

export default Home;
