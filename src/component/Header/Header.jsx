import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div onClick={()=>{window.scroll(0,0)}} className="header">
      <h1>🎥📽️ MovieZone 🎬🎦</h1>
    </div>
  );
};

export default Header;
