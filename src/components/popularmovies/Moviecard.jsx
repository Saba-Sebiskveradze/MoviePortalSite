import React from "react";
import "../popularmovies/popular.css";
import { Link } from "react-router-dom";

const Moviecard = ({ data }) => {
  const imageURL = "https://image.tmdb.org/t/p/original";
  return (
    <Link to={`/details/${data.id}`} className="Card">
      <div className="popularcard">
        <img
          src={imageURL + data.poster_path}
          alt={data.title}
          className="poster"
        />
        <h1 className="posterTitle">{data.title}</h1>
      </div>
    </Link>
  );
};

export default Moviecard;
