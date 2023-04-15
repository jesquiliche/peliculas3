'use client'

import { useState } from "react";
import ListaPeliculas from "./ListaPeliculas";

const Busqueda=()=> {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=25349d5497c8655f081fc1abfbd5aa08&query=${searchTerm}`
    );
    const data = await response.json();
    setSearchResults(data.results);
  };

  useEffect(() => {
    // aquí puedes hacer solicitudes a una API o cualquier efecto secundario que necesites
  }, []);


  return (
        <h1>Hola</h1>
    
  );
}

export default Busqueda;