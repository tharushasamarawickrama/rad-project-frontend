import React from "react";
import "./BloodRequesterDashboard.css";
import { Box, Button, Container, Typography, Paper } from "@mui/material";

const BloodRequesterDashboard = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", my: 4 }}>
        <Typography variant="h4">Home</Typography>
        <Button variant="contained" color="primary">
          New Request
        </Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        {["A+", "A-", "B+", "B-","O+","O-","AB+","AB-"].map((bloodType, index) => (
          <Paper key={index} sx={{ p: 3, m: 2, textAlign: "center", borderRadius: 2, width: 150 }}>
            <Typography variant="h5">{bloodType}</Typography>
            <Typography variant="h4">82%</Typography>
          </Paper>
        ))}
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Upcoming Events</Typography>
        {["Event 1", "Event 2", "Event 3"].map((event, index) => (
          <Paper key={index} sx={{ p: 2, my: 1, borderRadius: 2 }}>
            <Typography>{event}</Typography>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default BloodRequesterDashboard;
