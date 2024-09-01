import React, { useEffect, useState } from "react";
import { campaignsApi, getCampaignApi } from "../api/api";
import { Box, Grid, Typography } from "@mui/material";
import Campaign from "../components/Campaign";
import UpcomingEvents from "../components/UpcomingEvents";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

export default function Campaigns() {
  const [campaign, setCampaign] = useState([]);
  const [campaignId, setCampaignId] = useState("");
  const navigate = useNavigate();

  //   const handleGotoCampaign = async (id) => {
  //     const res = await getCampaignApi(id);
  //     setCampaignId(res.campaign._id);
  //     setTitle(res.campaign?.title);
  //     setDescription(res.campaign?.description);
  //     setLocation(res.campaign?.location);
  //     setDate(new Date(res.campaign?.date).toLocaleDateString());
  //     setURL(res.campaign?.imgURL);
  //   };

  useEffect(() => {
    campaignsApi().then((data) => {
      console.log(data);
      setCampaign(data.campaigns);
    });
  });
  return (
    <>
      <NavBar />

      <Grid container gap={5} sx={{ display: "flex", ml: 8 }}>
        <Typography
          variant="h4"
          component="div"
          color="primary"
          sx={{ fontWeight: 10 }}
        >
          Donation Campaigns
        </Typography>
        <Grid container gap={3}>
          <Grid item lg={7} md={9} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {campaign.map((event) => (
                <Campaign
                  _id={event._id}
                  key={event._id}
                  title={event.title}
                  description={event.description}
                  imgURL={event.imgURL}
                />
              ))}
            </Box>
          </Grid>
          <Grid item lg={4} md={9} xs={12}>
            <UpcomingEvents />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
