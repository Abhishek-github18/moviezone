import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleComponent from "../SingleMovieContent/SingleComponent";
import "./Trending.css";
import { Watch } from "react-loader-spinner";

const Trending = () => {
  const [content, setContent] = useState([]);
  // const [loader, setLoader] = useState(true);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=1e01a4776ed5d50e951e04e8a03536c8"
      )
      .then((response) => {
        console.log(response.data.results);
        setContent(response.data.results);
      });
  });
  return (
    <div className="container" style={{ margin: "1rem 1rem 0rem 5.5rem" }}>
      <h2>Trending</h2>
      <hr style={{ borderStyle: "solid", margin: "1rem 0" }} />
      <div className="search-result" style={{ marginTop: "0rem" }}>
        {content ? (
          content &&
          content.map((item) => (
            <SingleComponent
              key={item.id}
              id={item.id}
              poster={item.poster_path}
              release_date={item.release_date}
              title={item.original_title}
              vote={item.vote_average}
              popularity={item.popularity}
            />
          ))
        ) : (
          <Watch
            height="160"
            width="320"
            radius="48"
            color="#0C134F"
            ariaLabel="watch-loading"
            wrapperStyle={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
            wrapperClassName=""
            visible={true}
          />
        )}
      </div>
    </div>
  );
};

export default Trending;
