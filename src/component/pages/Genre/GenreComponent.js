import { Chip } from "@mui/material";
import React, { useEffect } from "react";
import axios from "axios";
const GenreComponent = ({
  genres,
  setGenres,
  setSelectedGenre,
  selectedGenre,
  // type,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenre([...selectedGenre, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
  };
  const handleSub = (genre) => {
    setGenres([...genres, genre]);
    setSelectedGenre(selectedGenre.filter((g) => g.id !== genre.id));
  };
  const fetchGenre = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=1e01a4776ed5d50e951e04e8a03536c8"
      )
      .then((response) => {
        // console.log(response.data.genres);
        setGenres(response.data.genres);
      });
  };
  useEffect(() => {
    fetchGenre();
  }, [fetchGenre]);
  return (
    <div className="container" style={{ padding: "6px 0" }}>
      {selectedGenre &&
        selectedGenre.map((genre) => (
          <Chip
            key={genre.id}
            label={genre.name}
            color="primary"
            style={{ margin: "2" }}
            clickable
            size="small"
            onClick={() => handleSub(genre)}
          />
        ))}

      {genres &&
        genres.map((genre) => (
          <Chip
            key={genre.id}
            label={genre.name}
            style={{ margin: "2" }}
            clickable
            size="small"
            onClick={() => handleAdd(genre)}
          />
        ))}
    </div>
  );
};

export default GenreComponent;
