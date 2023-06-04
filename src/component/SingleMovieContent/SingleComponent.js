import React from "react";
// import { Link } from "react-router-dom";
import "./SingleComponent.css";
import { img_300, unavailable } from "../../component/config/config";
import { Badge } from "@mui/material";

const SingleComponent = ({
  id,
  poster,
  release_date,
  title,
  vote,
  popularity,
}) => {
  return (
    <a href={`/movie/${id}`} style={{textDecoration:'none', color:"black" }}>
      <div className="media">
        <Badge badgeContent={Math.round(vote)} color="primary" />
        <img
          className="poster"
          src={poster ? `${img_300}${poster}` : unavailable}
          alt="title_poster"
        />
        <b className="title">{title}</b>
        <span className="subtitle">
          <span>{release_date}</span>
          <span>{popularity}</span>
        </span>
      </div>
     </a>
  );
};

export default SingleComponent;
