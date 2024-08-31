import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Event from "./Event";
import { upcomingCampaignsApi } from "../api/api";

export default function UpcomingEvents() {
  const [upcomingCampaigns, setUpcomingCampaigns] = useState([]);

  useEffect(() => {
    upcomingCampaignsApi().then((data) => {
      console.log(data);
      setUpcomingCampaigns(data.campaigns);
    });
  }, []);

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
        p: 2,
        gap: 2,
      }}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        Upcoming Events
      </Typography>
      {upcomingCampaigns &&
        upcomingCampaigns.map((event) => (
          <Event key={event._id} title={event.title} date={event.date} />
        ))}
    </Box>
  );
}
