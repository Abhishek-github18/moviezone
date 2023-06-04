import React, { useState, useEffect } from "react";
import "./Cast.css";
import axios from "axios";
import SingleComponent from "../../SingleMovieContent/SingleComponent";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { Watch } from "react-loader-spinner";

const Cast = () => {
  const [cast, setCast] = useState("");
  const [content, setContent] = useState([]);
  const [loader, setLoader] = useState(true);

  async function fetchData() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/person?query=${cast}&include_adult=false&language=en-US&page=1&api_key=1e01a4776ed5d50e951e04e8a03536c8`
      );

      const results = response.data.results;
      if (results.length > 0) {
        const firstResult = results[0];
        if (firstResult.known_for) {
          const knownFor = firstResult.known_for;
          // console.log(knownFor);
          setContent(knownFor);
          // Use the knownFor object as needed
        } else {
          console.log("known_for property not found in the first result");
        }
      } else {
        console.log("No results found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // eslint-disable-next-line
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [cast]);

  return (
    <div className="container1">
      {/* <h1>Recommendation basedd on cast</h1> */}
      <div className="section">
        <div style={{ display: "flex", margin: "2rem" }}>
          <TextField
            style={{ width: "85rem" }}
            className="searchBox"
            id="filled-basic"
            label="Search"
            variant="filled"
            onChange={(e) => {
              setLoader(false);
              setCast(e.target.value);
            }}
          />
          <Button
            variant="contained"
            style={{ marginLeft: 10 }}
            onClick={fetchData}
          >
            {" "}
            <SearchIcon />{" "}
          </Button>
        </div>
        <div className="search-result">
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Cast;
