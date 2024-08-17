import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";

export default function Request() {
  const handleRequest = () => {
    alert("View Request");
  };
  return (
    <Box
      sx={{
        backgroundColor: "white",
        px: 5,
        py: 5,
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        borderRadius: "15px",
        m: 2,
        width: "100%",
      }}
    >
      <Avatar>U</Avatar>
      <Typography variant="h6" component="div" color="primary">
        User Name
      </Typography>
      <Typography variant="body1" component="div" color="primary">
        Donation Request description
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ borderRadius: "20px", px: 3 }}
        onClick={handleRequest}
      >
        View
      </Button>
    </Box>
  );
}
