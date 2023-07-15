import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import "./movie-detail.scss";
const MovieDetail = () => {
  const { id } = useParams("id");
  // const { type } = useParams("type");
  const [singleMovie, setsingleMovie] = useState(null);

  useEffect(() => {
    fetch(`${apiConfig.baseUrl}movie/${id}?api_key=${apiConfig.apiKey}`)

      .then((m) => m.json())
      .then((m) => setsingleMovie(m));
  }, [id]);


  return (
    <section>
      {singleMovie !== null ? (
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="poster-img">
                <img
                  className="img-fluid"
                  src={apiConfig.originalImage(singleMovie.poster_path)}
                  alt=""
                />
                <span className="rating">{singleMovie.vote_average}</span>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="movie-content">
                <h3>{singleMovie.original_title}</h3>
                <p>{singleMovie.overview}</p>
                <ul className="ul-genres">
                  {singleMovie.genres.map((g) => (
                    <li key={g.id}>{g.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>LOADING.......</p>
      )}
    </section>
  );
};

export default MovieDetail;
