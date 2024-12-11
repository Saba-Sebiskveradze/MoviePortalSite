import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import SearchMovie from "../../components/search/SearchMovie";
import { searchMovie } from "../../api/movies";
import { RotatingLines } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import Moviecard from "../../components/popularmovies/Moviecard";
import "../../components/popularmovies/popular.css";
const SerchedMovies = () => {
  const { name } = useParams();
  const [serchedMovies, setSerchedMovies] = useState([]);
  const [error, seterror] = useState("");
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    searchMovie(name)
      .then((data) => {
        setSerchedMovies(data.results);
        console.log(data);
      })
      .catch((err) => {
        seterror(err.message);
      })
      .finally(() => {
        setisloading(false);
      });
  }, [name]);

  if (isloading) {
    return (
      <div className="loaderDiv">
        {" "}
        <RotatingLines strokeColor="black" />
      </div>
    );
  }
  return (
    <div>
      <Header />
      <SearchMovie />
      <h1 className="popularH1">Searched Movies for {name}</h1>
      {error && <div>{error}</div>}
      <div className="popularwrapper">
        {serchedMovies.map((data) => (
          <Moviecard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default SerchedMovies;
