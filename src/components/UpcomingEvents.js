import { Box, Typography } from "@mui/material";
import React from "react";
import Event from "./Event";

export default function UpcomingEvents() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "whitesmoke",
        borderRadius: "15px",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        gap: 2,
      }}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        Upcoming Events
      </Typography>
      <Event />
      <Event />
    </Box>
  );
}
