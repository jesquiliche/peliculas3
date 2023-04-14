import axios from "axios";

const API_KEY = "25349d5497c8655f081fc1abfbd5aa08";
const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      {
        params: {
          api_key: API_KEY,
          append_to_response: "videos",
          language: "es-ES", // Opcional: especifica el idioma del resultado
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getMovieCredits = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    {
      params: {
        api_key: API_KEY,
        language: "es-ES",
      },
    }
  );

  return response.data;
};

const ObtenerDetalle = async ({ id }) => {
  // Llama a la función de obtener detalles de película con el ID 550
  const movieDetails = await fetchMovieDetails(id);

  const credits = await getMovieCredits(id);

  // Obtener la URL del primer video de la lista
  let videoUrl = null;

  if (movieDetails.videos.results.length > 0) {
    videoUrl = `https://www.youtube.com/embed/${movieDetails.videos.results[0].key}`;
  }
  
  console.log("Entro");
  console.log(credits.cast);
  const director = credits.cast.filter(
    (persona) => persona.known_for_department === "Directing"
  );

  const actores = credits.cast.filter(
    (person) => person.known_for_department === "Acting"
  );
  console.log(actores);
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="card-detalle col-lg-12 mt-3 mx-auto">
          <div className="card-header text-center px-2">
            <h4 className="text-dark">{movieDetails.title}</h4>
          </div>

          <div className="card-body">
            <div className="row">
              <div className="col-lg-3">
                <img
                  src={`https://image.tmdb.org/t/p/w342/${movieDetails.poster_path}`}
                  alt={movieDetails.title}
                />
              </div>
              <div className="col-lg-9 px-5">
                <b>Fecha : </b>
                {movieDetails.release_date + "    "}
                <b>Géneros :</b>
                {" " + movieDetails.genres.map((g) => g.name) + " "}
                <br />
                <b>Descripción : </b>
                <p className="text-sm">{movieDetails.overview}</p>

                <b>Director : </b>
               {/*}{director.cast.map((person) => person.name)} */}

                <br />
                <b>Actores :</b>
                <ul>
                  <>
                    {actores.slice(0, 11).map((c) => (
                      <li> {c.name}</li>
                    ))}
                  </>
                </ul>
              </div>
            </div>
            <div className="row mt-4">
              {videoUrl && (
                <div className="mx-auto">
                  <iframe
                    width="1250"
                    height="700"
                    src={videoUrl}
                    title="Trailer de la película"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                    style={{ borderRadius: "10px" }}
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ObtenerDetalle;
