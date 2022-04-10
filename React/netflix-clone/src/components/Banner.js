import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "./Banner.css";

const base_img_url = "http://image.tmdb.org/t/p/original/";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const random = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovie(request.data.results[random]);
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);

  function truncate(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_img_url}${movie?.backdrop_path})`,
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_btns">
          <button className="banner_btn">Play</button>
          <button className="banner_btn">My List</button>
        </div>
        <div className="banner_description">
          {truncate(movie?.overview, 150)}
        </div>
      </div>
    </header>
  );
};

export default Banner;
