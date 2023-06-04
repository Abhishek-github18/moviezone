import React from "react";
import Button from "@mui/material/Button";
import Trending from "../../Trending/Trending";
import "./Recommend.css";
// import { Link } from "react-router-dom";

const Recommend = () => {
  
  return (
    <div className="section">
      <Trending />

      {/*  */}
      <hr style={{ borderStyle: "solid", margin: "1rem 0" }} />
      <h3 style={{ margin: "5rem 2.5rem" }}>More Option : </h3>

      <div className="recommendButton" style={{ margin: "5rem 2.5rem" }}>
        <Button
          className="buttonrecommend"
          variant="contained"
          size="large"
          href="/recommend/genre"
          sx={{
            color:'black',
            backgroundColor:'white',
            '&:hover':{
              backgroundColor:'#11009E',
              color:'white'
            }
          }}
        >
          Genre
        </Button>
        <Button
          className="buttonrecommend"
          variant="contained"
          href="/recommend/cast"
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
          Cast
        </Button>
        {/* <Button href="#text-buttons" variant="contained" size='large'></Button> */}
      </div>
    </div>
  );
};

export default Recommend;
