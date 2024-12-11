import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { moviesDetails } from "../../api/movies";
import { RotatingLines } from "react-loader-spinner";
import "../details/details.css";
import routes from "../../constants/routes";

const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [error, seterror] = useState("");
  const [isloading, setisloading] = useState(true);
  const imageURL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    moviesDetails(id)
      .then((data) => {
        setMovieDetails(data);
      })
      .catch((err) => {
        seterror(err.message);
      })
      .finally(() => {
        setisloading(false);
      });
  }, [id]);
  const backtohomepage = () => {
    navigate(routes.home);
  };
  if (isloading) {
    return (
      <div className="loaderDiv">
        {" "}
        <RotatingLines strokeColor="black" />
      </div>
    );
  }
  return (
    <div className="movie-details">
      <div className="button-div" onClick={backtohomepage}>
        <button className="back-button">
          <div className="button-box">
            <span className="button-elem">
              <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
              </svg>
            </span>
            <span className="button-elem">
              <svg viewBox="0 0 46 40">
                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
              </svg>
            </span>
          </div>
        </button>
      </div>

      <img
        src={imageURL + movieDetails.backdrop_path}
        alt={movieDetails.title}
        className="detailposter"
      />

      <div className="movie-info">
        <h1>
          <span>{movieDetails.title}</span>
        </h1>
        <p>Release Date: {movieDetails.release_date}</p>
        <p>Runtime: {movieDetails.runtime} minutes</p>
        <p>
          Genres: {movieDetails.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          Production Companies:{" "}
          {movieDetails.production_companies
            .map((company) => company.name)
            .join(", ")}
        </p>
        <p>Overview: {movieDetails.overview}</p>

        {error && <p>Error: {error}</p>}
      </div>
    </div>
  );
};

export default Details;
