import { Button, Chip, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState, useEffect } from "react";
import AddMovie from "../../Modals/AddMovie";
import UpdateMovie from "../../Modals/UpdateMovie";
import DeleteMovie from "../../Modals/DeleteMovie";
import { unavailable } from "../../config/config";
import { Watch } from "react-loader-spinner";

const Crud = () => {
  const [text, setText] = useState("");
  const [movieDetails, setMovieDetails] = useState();
  const [loader, setLoader] = useState(true);

  const handleSubmit = () => {
    const movieCollection = JSON.parse(localStorage.getItem("movies"));
    const result = movieCollection.filter((movie) => {
      return movie.title === text;
    });
    console.log(result);
    setMovieDetails(result);
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="section">
      {/* <h1>This is crud operation section</h1> */}
      <div style={{ margin: "0 5% 0 5%", display: "flex" }}>
        <TextField
          style={{ flex: 1 }}
          className="searchBox"
          id="filled-basic"
          label="Search a movie by title"
          variant="filled"
          onChange={(e) => {
            setLoader(false);
            setText(e.target.value);
          }}
        />
        <Button
          variant="contained"
          style={{ marginLeft: "10px" }}
          onClick={handleSubmit}
          sx={{
            color: "black",
            backgroundColor: "white",
            "&:hover": {
              backgroundColor: "#11009E",
              color: "white",
            },
          }}
        >
          {" "}
          <SearchIcon />{" "}
        </Button>
        <AddMovie />
        <UpdateMovie />
        <DeleteMovie />
      </div>
      <div className="container">
        <hr style={{ border: "1px solid black" }} />
        {loader ? (
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
        ) : (
          movieDetails &&
          movieDetails.map((movie) => (
            <div
              className="movieDetailContainer"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <div
                className="movieImageContainer"
                style={{ width: "50%", height: "auto" }}
              >
                <img
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                  src={movie.poster ? movie.poster : unavailable}
                  alt="Movie Poster"
                />
              </div>
              <div className="moviedetailtext">
                <div className="movieContent" style={{ padding: "2rem 2rem" }}>
                  <h2>{movie.title}</h2>
                  <span>{movie.year}</span>
                  <p>{movie.synopsis}</p>
                </div>

                <div
                  className="genreContainer"
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <span style={{ margin: "1rem 1rem" }}>
                    {" "}
                    <b> Genre: </b>
                  </span>
                  {movieDetails &&
                    movieDetails.map((movieItem) => {
                      return (
                        movieItem.genre &&
                        movieItem.genre.map((genre) => (
                          <div key={genre}>
                            {/* <h1>{genre}</h1> */}
                            <Chip
                              sx={{
                                margin: "0 1rem",
                                "&:hover": {
                                  backgroundColor: "#0C134F",
                                  cursor: "pointer",
                                  color: "white",
                                },
                              }}
                              label={genre}
                              variant="outlined"
                              key={genre}
                            />
                          </div>
                        ))
                      );
                    })}
                </div>

                <div
                  className="castContainer"
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "1rem",
                  }}
                >
                  <span style={{ margin: "1rem 1rem" }}>
                    {" "}
                    <b> Cast: </b>
                  </span>
                  {movieDetails &&
                    movieDetails.map((movieItem) => {
                      return (
                        movieItem.cast &&
                        movieItem.cast.map((cast) => (
                          <div key={cast}>
                            {/* <h1>{genre}</h1> */}
                            <Chip
                              sx={{
                                margin: "0 1rem",
                                "&:hover": {
                                  backgroundColor: "#0C134F",
                                  cursor: "pointer",
                                  color: "white",
                                },
                              }}
                              label={cast}
                              variant="outlined"
                              key={cast}
                            />
                          </div>
                        ))
                      );
                    })}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Crud;
