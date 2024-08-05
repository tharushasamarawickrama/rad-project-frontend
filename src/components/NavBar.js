import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { ReactComponent as Logo } from "../assets/logo.svg";

const NavBar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
      }}
    >
      <Toolbar>
        <Logo height={70} />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
