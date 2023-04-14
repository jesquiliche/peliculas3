import axios from "axios";
import Link from "next/link";

const fetchPeliculas = async () => {
  try {
    const respuesta = await axios.get(
      "https://api.themoviedb.org/3/movie/popular",
      {
        params: {
          api_key: "25349d5497c8655f081fc1abfbd5aa08",
          language: "es-ES",
          page: 1
        },
        cache: "no-store"
      }
    );
    return respuesta.data;
  } catch (error) {
    console.log(error);
  }
};

const CargarPeliculas = async () => {
  const peliculas = await fetchPeliculas();

  return (
    <div className="container-fluid mt-5">
      <div className="container-text col-lg-6 mx-auto mt-4">
        <h4 className="text-center text-white">
          Top 5 películas más populares
        </h4>
      </div>

      <div className="row mt-5">
        {peliculas.results.slice(0, 5).map((p) => (
          <>
            <div className="card card-portada bg-white  col-lg-2 m-2 mt-3 px-1">
              <div className="card-header text-center">
              <Link href={`/Detalle/${p.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w154${p.poster_path}`}
                  alt={p.title}
                />
                </Link>
              </div>
              <div className="card-body mx-auto">
                <h6><Link href={`/Detalle/${p.id}`}>{p.title}</Link></h6>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default CargarPeliculas;
