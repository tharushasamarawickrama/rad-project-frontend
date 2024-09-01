import React, { useEffect, useState } from "react";
import { campaignsApi, getCampaignApi } from "../api/api";
import { useParams } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import { getUser } from "../services/user.service";

export default function CampaignOverview() {
  const { campaignId } = useParams();
  const [campaign, setCampaign] = useState([]);

  useEffect(() => {
    getCampaignApi(campaignId).then((data) => {
      console.log(data);
      setCampaign(data.campaign);
    });
  }, []);

  const user = getUser();

  return (
    <div>
      <NavBar />
      <Grid container sx={{ m: 3 }} gap={5}>
        <Typography variant="h4">{campaign?.title}</Typography>
        <Grid
          container
          sx={{ backgroundColor: "whitesmoke", p: 3, borderRadius: 5 }}
          gap={2}
        >
          <Grid
            item
            lg={6}
            md={6}
            sx={{ backgroundColor: "white", p: 3, borderRadius: 5 }}
          >
            <Typography variant="h5">{campaign?.date}</Typography>
            <Typography variant="body2">{campaign?.location}</Typography>
          </Grid>
          <Grid item lg={4} md={4}>
            <img
              src={campaign?.imgURL}
              alt="Event Image"
              style={{ maxWidth: "100%" }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ backgroundColor: "white", borderRadius: 5, p: 3 }}
        >
          <Box>
            <Typography variant="h5">Detail</Typography>
            <Typography>{campaign?.description}</Typography>
          </Box>
        </Grid>

        {user?.userType != "ADMIN" && (
          <>
            <Typography>Register to the event here</Typography>
            <Button variant="contained" color="primary">
              Register
            </Button>
          </>
        )}
      </Grid>
    </div>
  );
}
