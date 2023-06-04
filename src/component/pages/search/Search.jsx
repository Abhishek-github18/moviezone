import React, { useState, useEffect } from "react";
import "./Search.css";
import axios from "axios";
import SingleComponent from "../../SingleMovieContent/SingleComponent";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { Watch } from "react-loader-spinner";

const Search = () => {
  // const apiUrl = "https://api.themoviedb.org/3/search/movie";
  // const apiToken = process.env.API_TOKEN; // Replace with your actual API key
  // const apiKey = process.env.API_KEY;

  //`${apiUrl}?query=${params.query}&api_key=${apiKey}`

  const [text, setText] = useState("");
  const [content, setContent] = useState([]);
  const [loader, setLoader] = useState(true);

  async function fetchData() {
    await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${text}&api_key=1e01a4776ed5d50e951e04e8a03536c8`
      )
      .then((response) => {
        setContent(response.data.results);
        console.log(response.data.results);
      });
  }
  // eslint-disable-next-line
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [text]);

  return (
    <div className="section">
      <div style={{ display: "flex", margin: "2rem" }}>
        <TextField
          style={{ flex: 1 }}
          className="searchBox"
          id="filled-basic"
          label="Search"
          variant="filled"
          onChange={(e) =>{setLoader(false); setText(e.target.value)}}
        />
        <Button
          variant="contained"
          style={{ marginLeft: 10, backgroundColor: "#0C134F", color: "white" }}
          onClick={fetchData}
        >
          {" "}
          <SearchIcon />{" "}
        </Button>
      </div>
      {loader ? (
        <Watch
          height="160"
          width="320"
          radius="48"
          color="#0C134F"
          ariaLabel="watch-loading"
          wrapperStyle={{display:'flex', justifyContent:'center', alignContent:'center'}}
          wrapperClassName=""
          visible={true}
        />
      ) : (
        <div className="search-result">
          {content &&
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
            ))}
        </div>
      )}
    </div>
  );
};

export default Search;
