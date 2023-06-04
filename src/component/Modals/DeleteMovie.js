import React, { useState } from "react";
import { Box, Button, Modal, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./AddMovie.css";

const style = {
  display: "flex",
  flexFlow: "column",
  flexWrap: "wrap",
  // margin:'1rem',
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

const DeleteMovie = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [id, setId] = useState(-1);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setId(e.target.value);
  };
  const handleSubmit = () => {
    const movieCollection = JSON.parse(localStorage.getItem("movies"));
    if (movieCollection === null) {
      Swal.fire({
        title: "Error!",
        text: "No data in the collection",
        icon: "error",
        confirmButtonText: "Go Back",
        customClass: {
          container: "swal-container",
        },
      });
      return;
    }
    let updated = false;
    let finalCollection = movieCollection.filter((movie) => {
      if (movie.id === id) updated = true;
      return movie.id !== id;
    });
    if (updated === false) {
      localStorage.setItem("movies", JSON.stringify(finalCollection));
      Swal.fire({
        title: "Error!",
        text: "Invalid Movie id",
        icon: "error",
        confirmButtonText: "Go back",
        customClass: {
          container: "swal-container",
        },
      });
      return;
    }
    if (finalCollection) {
      localStorage.setItem("movies", JSON.stringify(finalCollection));
      Swal.fire({
        title: "Success!",
        text: "Collection got updated",
        icon: "sucess",
        confirmButtonText: "Done",
        customClass: {
          container: "swal-container",
        },
      });
    }
    setOpen(false);
    navigate("/crud");
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
        Delete Movie
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <DeleteMovie />  */}

        <Box sx={style}>
          <div className="titleAndmovieID" style={{ display: "flex" }}>
            <TextField
              sx={{ marginBottom: "0.5rem", width: "100%" }}
              id="movieID"
              label="Movie Id"
              variant="standard"
              placeholder="Enter movie id here"
              onChange={handleChange}
              //   helperText={name}
              required
            />
          </div>
          <Button variant="contained" onClick={handleSubmit}>
            Delete
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default DeleteMovie;
