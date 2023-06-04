import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotTwoToneIcon from '@mui/icons-material/WhatshotTwoTone';
import StorageTwoToneIcon from '@mui/icons-material/StorageTwoTone';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import "./Navigation.css";

const Navigation = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState(-1);
  // const [color, set]
  useEffect(() => {
    console.log("Abhishek Anand salkdnaskljfnasdkjfndakjfnsdkjfsnkd", value);
    if (value === 0) {
      navigate("/");
    } else if (value === 1) {
      // debugger
      navigate("/recommend");
// debugger
    } else if (value === 2) {
      navigate("/crud");
    }
  }, [value, navigate]);

  return (
    <BottomNavigation
      showLabels
      value={value}
    onChange={(event, newValue) => {
        setValue(newValue);
        // debugger
      }}
      sx={{ width: "100%" , position: "fixed", bottom: 0 , backgroundColor: "#0C134F",zIndex:'100'}}
    >
      <BottomNavigationAction sx={{color:'white'}} label="Search" icon={<YoutubeSearchedForIcon />} />
      <BottomNavigationAction sx={{color:'white'}} label="Recommend" icon={<WhatshotTwoToneIcon />} />
      <BottomNavigationAction sx={{color:'white'}} label="Crud" icon={<StorageTwoToneIcon />} />
    </BottomNavigation>
  );
};

export default Navigation;
