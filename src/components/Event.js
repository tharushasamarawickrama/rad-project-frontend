import { Box, Typography } from "@mui/material";
import React from "react";

export default function Event({ title, date }) {
  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <Box
      sx={{
        backgroundColor: "white",
        px: 2,
        py: 2,
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        borderRadius: "15px",
        width: "100%",
      }}
    >
      <Typography variant="h6" component="div" color="primary">
        {title}
      </Typography>
      <Typography variant="body1" component="div" color="primary">
        {formattedDate}
      </Typography>
    </Box>
  );
}
