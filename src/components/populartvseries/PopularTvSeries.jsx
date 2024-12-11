import React, { useEffect, useState } from "react";
import { getPopularTvSeries } from "../../api/movies";
import { RotatingLines } from "react-loader-spinner";
import "../popularmovies/popular.css";
import TvSeriesCard from "./TvSeriesCard";

const PopularMovies = () => {
  const [popularTvSeries, setPopularTvSeries] = useState([]);
  const [error, seterror] = useState("");
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    getPopularTvSeries()
      .then((data) => {
        setPopularTvSeries(data.results);
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
      <h1 className="popularH1">Popular TV Series</h1>
      <div className="popularwrapper">
        {popularTvSeries.map((data) => (
          <TvSeriesCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
