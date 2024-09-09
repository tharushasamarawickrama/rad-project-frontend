import { Box, Grid, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <NavBar backgroundColor="#FF5959" />
      <Grid
        container
        sx={{
          background: "url(https://files.123freevectors.com/wp-content/original/111138-dark-red-blurred-background-vector.jpg) no-repeat center center",
          backgroundSize: "cover",
          height: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2" color="white" textAlign="center">
          About Us
        </Typography>
      </Grid>
      <Grid container py={10} px={2}>
        <Grid item md={6} xs={12}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h4" color="primary">
              Our Mission
            </Typography>
            <Typography variant="body1" color="primary">
              Our mission is to connect donors and recipients, making the
              process of donating and receiving blood as seamless as possible.
              We strive to save lives by promoting blood donation and organizing
              campaigns that encourage community participation.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/about_mission.png"
            alt="Our Mission"
            style={{ width: 400, height: 250 }}
          />
        </Grid>
      </Grid>
      <Grid container sx={{ p: 10, backgroundColor: "#F9F9F9" }}>
        <Grid item md={6} xs={12}>
          <img
            src="/about_team.png"
            alt="Our Team"
            style={{ width: 400, height: 260 }}
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h4" color="primary">
            Our Team
          </Typography>
          <Typography variant="body1" color="primary">
            We are a dedicated team of professionals and volunteers committed to
            making a positive impact. Our team works tirelessly to ensure that
            every donation counts and reaches those in need.
          </Typography>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default About;
