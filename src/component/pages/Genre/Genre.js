import React, { useState, useEffect } from "react";
import GenreComponent from "./GenreComponent";
import axios from "axios";
import useGenre from "../../hook/useGenre";
import SingleComponent from "../../SingleMovieContent/SingleComponent";

const Genre = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const genreUrl = useGenre(selectedGenre);
  const [data, setData] = useState([]);
  // const genreUrl = useGenre(selectedGenre);

  useEffect(() => {
    const fetchMovies = () => {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=1e01a4776ed5d50e951e04e8a03536c8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=10&with_genres=${genreUrl}`
        )
        .then((response) => {
          const result = response.data.results;
          setData(result);
        });
    };
  
    fetchMovies();
  }, [genreUrl]);
  
  return (
    <div className="section">
      {/* <h1></h1> */}
      <GenreComponent
        // key={genres[0].id}
        type="movie"
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        genres={genres}
        setGenres={setGenres}
      />
      <div className="search-result">
        {data &&
          data.map((item) => (
            <SingleComponent
              key={item.id}
              id={item.id}
              poster={item.poster_path}
              release_date={item.release_date}
              title={item.original_title}
              vote={item.vote_average}
              popularity={item.popularity}
            />
          ))}
      </div>
    </div>
  );
};

export default Genre;
