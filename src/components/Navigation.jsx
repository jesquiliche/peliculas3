import Link from "next/link";
import React from "react";
import axios from "axios";

const fetchCategorias = async () => {
  try {
    const respuesta = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list",
      {
        params: {
          api_key: "25349d5497c8655f081fc1abfbd5aa08",
          language: "es-ES",
        },
      }
    );
    return respuesta.data;
  } catch (error) {
    console.log(error);
  }
};

const Navigation = async () => {
  const categorias = await fetchCategorias();
  
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Películas
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  <Link href="/">Inicio</Link>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Películas
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item">
                      {" "}
                      <Link href="/Populares">Más populares</Link>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item">
                      {" "}
                      <Link href="/Cartelera">Cartelera</Link>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item">
                      <Link href="/Proximamente">Próximamente</Link>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item">
                      <Link href="/MejorValoradas">Más valoradas</Link>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorías
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-columns-2"
                  aria-labelledby="navbarDropdown"
                >
                  <div className="row">
                    <div className="col">
                      {categorias.genres.map((c) => (
                        <li key={c.id}>
                          <a className="dropdown-item">
                            <Link href={`/PorGeneros/${c.id}`}>{c.name}</Link>
                          </a>
                        </li>
                      ))}
                    </div>
                  </div>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Buscar"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
