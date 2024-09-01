import { Box, Button, Grid, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <Grid container>
        <Grid item md={6} xs={12}>
          <Box>
            <Typography variant="h3" color="primary">
              Be a Hero
            </Typography>
            <Typography variant="p" color="primary">
              Lorem ipsum dolor sit amet consectetur. In facilisis auctor proin
              sit dui quis. Lacus et donec pellentesque phasellus etiam eu vel.
              Condimentum massa sapien est libero quisque feugiat risus nec
              vulputate. At nunc et non volutpat amet at.
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button variant="contained" color="primary">
                Request Blood
              </Button>
              <Button variant="outlined" color="primary">
                Join Campaign
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <img src="/hero.png" alt="hero" style={{ height: "60vh" }} />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={6} xs={12}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <img src="/who.png" alt="hero" />

            <Typography variant="p" color="primary">
              Lorem ipsum dolor sit amet consectetur. In facilisis auctor proin
              sit dui quis. Lacus et donec pellentesque phasellus etiam eu vel.
              Condimentum massa sapien est libero quisque feugiat risus nec
              vulputate. At nunc et non volutpat amet at.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <img src="/donations.png" alt="hero" />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={6} xs={12}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="p" color="primary">
              Lorem ipsum dolor sit amet consectetur. In facilisis auctor proin
              sit dui quis. Lacus et donec pellentesque phasellus etiam eu vel.
              Condimentum massa sapien est libero quisque feugiat risus nec
              vulputate. At nunc et non volutpat amet at.
            </Typography>
            <Typography variant="p" color="primary">
              Lorem ipsum dolor sit amet consectetur. In facilisis auctor proin
              sit dui quis. Lacus et donec pellentesque phasellus etiam eu vel.
              Condimentum massa sapien est libero quisque feugiat risus nec
              vulputate. At nunc et non volutpat amet at.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <img src="/can.png" alt="hero" />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={6} xs={12}>
          <img src="/how.png" alt="hero" />
        </Grid>
        <Grid item md={6} xs={12}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="p" color="primary">
              Lorem ipsum dolor sit amet consectetur. In facilisis auctor proin
              sit dui quis. Lacus et donec pellentesque phasellus etiam eu vel.
              Condimentum massa sapien est libero quisque feugiat risus nec
              vulputate. At nunc et non volutpat amet at.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={6} xs={12}>
          <img src="/join.png" alt="hero" width="100%" />
        </Grid>
        <Grid item md={6} xs={12}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h3" color="primary">
              Join Us
            </Typography>
            <Typography variant="h3" color="primary">
              Today
            </Typography>
            <Button variant="contained" color="primary">
              Register
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={6} xs={12}>
          <img src="/logo.png" alt="hero" width="100%" />
        </Grid>
        <Grid item md={6} xs={12}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h3" color="primary">
              Our Services
            </Typography>
            <Typography variant="h6" color="primary">
              Request Blood
            </Typography>
            <Typography variant="h6" color="primary">
              Donate Blood
            </Typography>
            <Typography variant="h6" color="primary">
              Blood Campaigns
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
