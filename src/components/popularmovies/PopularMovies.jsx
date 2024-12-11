import React, { useEffect, useState } from "react";
import { getPopularMovies } from "../../api/movies";
import Moviecard from "./Moviecard";
import "../popularmovies/popular.css";
import { RotatingLines } from "react-loader-spinner";

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [error, seterror] = useState("");
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    getPopularMovies()
      .then((data) => {
        setPopularMovies(data.results);
      })
      .catch((err) => {
        seterror(err.message);
      })
      .finally(() => {
        setisloading(false);
      });
  }, []);

  if (isloading) {
    return (
      <div className="loaderDiv">
        {" "}
        <RotatingLines strokeColor="black" />
      </div>
    );
  }
  return (
    <div className="popularcontainer">
      {error && <div>{error}</div>}
      <h1 className="popularH1">Popular Movies</h1>
      <div className="popularwrapper">
        {popularMovies.map((data) => (
          <Moviecard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
