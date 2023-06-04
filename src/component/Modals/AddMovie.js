import React from "react";
import { Box, Button, Modal, TextField } from "@mui/material";
import movieDetail from "../config/MovieDataModel";
import { useState } from "react";
import MovieDetail from "../MovieDetail/MovieDetail";
import Swal from "sweetalert2";
import "./AddMovie.css";
import { Navigate, useNavigate } from "react-router-dom";

const style = {
  display: "flex",
  flexFlow: "column",
  flexWrap: "wrap",
  // margin:'1rem',
  zIndex: "100",
  justifyContent: "space-around",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddMovie = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [detail, setDetail] = useState({});
  const naivgate = useNavigate();

  const handleSubmit = () => {
    // debugger
    if (
      !detail.id ||
      !detail.title ||
      !detail.synopsis ||
      !detail.genre ||
      !detail.cast||
      !detail.poster
    ) {
      // debugger
      //   alert("Fill all the fields");
      Swal.fire({
        title: "Error!",
        text: "All fields are mandatory to fill",
        icon: "error",
        confirmButtonText: "Go Back",
        customClass: {
          container: "swal-container",
        },
      });
      return;
    }
    // debugger
    const movie = Object.create(MovieDetail);
    movie.id = detail.id;
    movie.title = detail.title;
    movie.synopsis = detail.synopsis;
    movie.poster=detail.poster;
    const genres = detail.genre.split(",");
    movie.genre = genres;
    const casts = detail.cast.split(",");
    movie.cast = casts;
    // console.log(movie);
    
    const movieCollection = [];

    const getMovieCollection = JSON.parse(localStorage.getItem("movies"));

    if (getMovieCollection !== null) {
      movieCollection.push(...getMovieCollection);
    }

    movieCollection.push(movie);

    // console.log(movieCollection);
    const movieCollectionString = JSON.stringify(movieCollection);
    localStorage.setItem("movies", movieCollectionString);
    // console.log(movieCollectionString);
    Swal.fire({
      title: "Success!",
      text: "Movie added in the localStorage",
      icon: "success",
      confirmButtonText: "Ok",
      customClass: {
        container: "swal-container",
      },
    });
    setOpen(false)
    naivgate('/'); 
  };
  const handleChange = (e) => {
    setDetail({
      ...detail,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
        style={{ marginLeft: "10px" }}
        size="large"
        sx={{
            color:'black',
            backgroundColor:'white',
            '&:hover':{
              backgroundColor:'#11009E',
              color:'white'
            }
          }}
      >
        Add Movie
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <AddMovie />  */}

        <Box sx={style}>
          <div className="titleAndmovieID" style={{ display: "flex" }}>
            <TextField
              sx={{ marginBottom: "0.5rem" }}
              id="movieID"
              label="Movie Id"
              name="id"
              onChange={handleChange}
              variant="standard"
              required
            />
            <TextField
              sx={{ marginBottom: "0.5rem" }}
              id="movieTitle"
              label="Title"
              name="title"
              onChange={handleChange}
              variant="standard"
              required
            />
          </div>
          <TextField
            id="outlined-basic"
            onChange={handleChange}
            sx={{ marginBottom: "0.5rem" }}
            label="Realease year"
            name="year"
            variant="outlined"
            required
          />
          <TextField
            id="outlined-basic"
            sx={{ marginBottom: "0.5rem" }}
            label="Genre"
            onChange={handleChange}
            variant="outlined"
            name="genre"
            required
            helperText="Add multiple genre with comma (,) seperated value"
          />
          <TextField
            id="outlined-basic"
            sx={{ marginBottom: "0.5rem" }}
            label="Cast"
            onChange={handleChange}
            name="cast"
            variant="outlined"
            required
            helperText="Add multiple cast name with comma (,) seperated value"
          />
          <TextField
            id="outlined-basic"
            sx={{ marginBottom: "0.5rem" }}
            label="Movie Poster"
            onChange={handleChange}
            name="poster"
            variant="outlined"
            required
            helperText="Provide the link of the image"
          />
          <TextField
            id="outlined-multiline-static"
            label="Synopsis of the movie"
            multiline
            name="synopsis"
            onChange={handleChange}
            rows={4}
            sx={{ marginBottom: "0.5rem" }}
            placeholder="Brief plot of the movie"
            required
          />
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AddMovie;
