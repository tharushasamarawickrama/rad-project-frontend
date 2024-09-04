import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      Team 28 &copy; {new Date().getFullYear()}
    </Typography>
  );
};

export default Footer;
