import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        py: 5,
        background: "url(/footer_background.png) no-repeat center center",
        backgroundSize: "cover",
        color: "white",
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Logo Section */}
        <Grid item md={4} xs={12} sx={{ textAlign: "center" }}>
          <img src="/logo.png" alt="footer logo" style={{ width: "200px" }} />
          <Typography variant="body2" sx={{ mt: 2 }}>
            Saving lives, one donation at a time.
          </Typography>
        </Grid>

        {/* Quick Links Section */}
        <Grid
          item
          md={4}
          xs={12}
          sx={{ textAlign: "center", color: "white", mt: 7 }}
        >
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Link href="/request-blood" color="inherit" underline="hover">
            Request Blood
          </Link>
          <br />
          <Link href="/donate-blood" color="inherit" underline="hover">
            Donate Blood
          </Link>
          <br />
          <Link href="/campaigns" color="inherit" underline="hover">
            Blood Campaigns
          </Link>
        </Grid>

        {/* Contact Info Section */}
        <Grid
          item
          md={4}
          xs={12}
          sx={{ textAlign: "center", color: "white", mt: 7 }}
        >
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2">
            123 Blood Donation St.
            <br />
            City, Country
            <br />
            Phone: (123) 456-7890
            <br />
            Email: info@blooddonation.com
          </Typography>
        </Grid>
      </Grid>

      {/* Copyright Section */}
      <Typography
        variant="body2"
        color="black"
        align="center"
        sx={{ mt: 5 }}
      >
        Team 29 &copy; {new Date().getFullYear()}. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
