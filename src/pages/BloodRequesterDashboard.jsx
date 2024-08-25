import React from "react";
import { Box, Container, Typography, Button, Grid, Avatar } from "@mui/material";
import Event from "../components/Event";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import UpcomingEvents from "../components/UpcomingEvents";
import Request from "../components/Request";

const BloodRequesterDashboard = () => {
  const drawerOpen = true; // assuming the sidebar is always open for desktop view
  const isMobile = false; // this should be set based on media query in a real implementation

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#FBE9E7" }}>
      <SideBar drawerOpen={drawerOpen} setDrawerOpen={() => {}} isMobile={isMobile} />
      <Box sx={{ flexGrow: 1, p: 3, display: "flex", flexDirection: "column" }}>
        <NavBar />

        <Container sx={{ mt: 3, flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography variant="h4" component="h1" color="textPrimary">
                  Home
                </Typography>
                <Button variant="contained" color="secondary" sx={{ borderRadius: "20px" }}>
                  New Request
                </Button>
              </Box>

              <Grid container spacing={3}>
                {["A+", "A-", "B+", "B-"].map((bloodType, index) => (
                  <Grid item xs={6} sm={3} key={index}>
                    <Box
                      sx={{
                        backgroundColor: "white",
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "15px",
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="div"
                        color="textPrimary"
                        sx={{
                          backgroundColor: "#FBE9E7",
                          borderRadius: "50%",
                          padding: "10px",
                          mb: 2,
                          minWidth: "50px",
                          textAlign: "center",
                        }}
                      >
                        {bloodType}
                      </Typography>
                      <Typography variant="h4" component="div" color="primary">
                        82%
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                
                
              </Box>
              <UpcomingEvents />
            </Grid>
          </Grid>
        </Container>

        <Box sx={{ mt: "auto" }}>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default BloodRequesterDashboard;
