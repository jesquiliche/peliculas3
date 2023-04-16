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

  const director = credits.cast.filter(
    (persona) => persona.known_for_department === "Directing"
  );

  const actores = credits.cast.filter(
    (person) => person.known_for_department === "Acting"
  );
  const date = new Date(movieDetails.release_date);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formatter = new Intl.DateTimeFormat('es-ES', options);
  
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="card-detalle col-lg-12 mt-3 mx-auto">
          <div className="card-header text-center px-2">
            <h4 className="text-dark">{movieDetails.title}</h4>
          </div>

          <div className="card-body">
            <div className="row">
              <div className="col-lg-3 ">
                <div style={{ maxWidth: "342px", margin: "3 auto" }}>
                  <img
                    src={`https://image.tmdb.org/t/p/w342/${movieDetails.poster_path}`}
                    alt={movieDetails.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "10px",
                      marginLeft: "30px"
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-9 px-5">
                <b>Fecha : </b>
                {formatter.format(date) + "    "}
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
                <div
                  style={{
                    width: "100%",
                    maxWidth: "1250px",
                    margin: "0 auto",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      paddingBottom: "56.25%",
                      height: 0,
                    }}
                  >
                    <iframe
                      src={videoUrl}
                      title="Trailer de la película"
                      frameborder="0"
                      allow="autoplay; encrypted-media"
                      allowfullscreen
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: "10px",
                      }}
                    ></iframe>
                  </div>
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
