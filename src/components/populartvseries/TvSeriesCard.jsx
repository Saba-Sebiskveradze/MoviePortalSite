import React from "react";
import "../popularmovies/popular.css";
import { Link } from "react-router-dom";

const TvSeriesCard = ({ data }) => {
  const imageURL = "https://image.tmdb.org/t/p/original";
  return (
    <Link to={`/tvseriesdetails/${data.id}`} className="Card">
      <div className="popularcard">
        <img
          src={imageURL + data.poster_path}
          alt={data.name}
          className="poster"
        />
        <h1 className="posterTitle">{data.name}</h1>
      </div>
    </Link>
  );
};

export default TvSeriesCard;
