import React, { useState, useEffect } from "react";
import "./MovieDetail.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Avatar, Chip, Tooltip } from "@mui/material";
import { noPicture } from "../config/config";

const MovieDetail = () => {
  const [currentMovieDetail, setMovie] = useState();
  const [credit, setCredit] = useState({});
  const { id } = useParams();

  useEffect(() => {
    // console.log(id);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=1e01a4776ed5d50e951e04e8a03536c8`
      )
      .then((response) => {
        console.log(response.data);
        setMovie(response.data);

        axios
          .get(
            `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=1e01a4776ed5d50e951e04e8a03536c8`
          )
          .then((response) => {
            console.log(response.data);
            setCredit(response.data);
          });
        window.scroll(0, 0);
        // console.log(currentMovieDetail.title);
      });
  }, [id]);

  return (
    <div className="" style={{ marginBottom: "2rem" }}>
      <h1>Hello There</h1>
      {currentMovieDetail && (
        <div style={{ paddingBottom: "2rem" }}>
          <div className="movie__intro" style={{ paddingBottom: "2rem" }}>
            <img
              className="movie__backdrop"
              src={`https://image.tmdb.org/t/p/original${
                currentMovieDetail.backdrop_path || ""
              }`}
            />
          </div>
          <div className="movieDetailsContainer">
            <div className="container1">
              <div className="box">
                <div className="imgBox">
                  <img
                    src={`https://image.tmdb.org/t/p/original${
                      currentMovieDetail.poster_path || ""
                    }`}
                    alt="movieposter"
                  />
                </div>
                <div className="content">
                  <h2>
                    {currentMovieDetail.original_title}
                    <br />
                    <span>{currentMovieDetail.release_date}</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="contentDetails">
              <h2>
                {" "}
                <b> Title:</b> {currentMovieDetail.title}
              </h2>
              <p>
                {" "}
                <b> Synopsis : </b>
              </p>
              <p>{currentMovieDetail.overview}</p>
            </div>
            <div
              className="genresDetail"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {currentMovieDetail.genres &&
                currentMovieDetail.genres.map((genre) => (
                  <Chip
                    sx={{
                      margin: "0 1rem ",
                      "&:hover": {
                        backgroundColor: "#0C134F",
                        cursor: "pointer",
                        color:'white'
                      },
                    }}
                    label={genre.name}
                    variant="outlined"
                    key={genre.id}
                  />
                ))}
            </div>
            <div
              className="castDetail"
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                
              }}
            >
              {credit.cast &&
                credit.cast.map((e) => (
                  <Tooltip
                    title={e.character}
                    key={e.id}

                  >
                    <Avatar
                      alt={e.character}
                      sx={{
                        width: "4rem",
                        height: "4.5rem",
                        margin: "1rem 1rem",
                        cursor:'pointer',
                        '&:hover':{

                  border:'2px solid #0C134F'
                }
                      }}
                      src={
                        e.profile_path
                          ? `https://image.tmdb.org/t/p/w300${e.profile_path}`
                          : noPicture
                      }
                    />
                  </Tooltip>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
