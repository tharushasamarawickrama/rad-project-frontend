import { Box, Button, Grid, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <NavBar backgroundColor="#FF5959" />
      <Grid
        container
        px={2}
        sx={{
          background: "url(/hero_background.png) no-repeat center center",
          backgroundSize: "cover",
          height: "80vh",
        }}
      >
        <Grid item md={6} xs={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              gap: 1,
            }}
          >
            <Typography variant="h1" color="white">
              Be a Hero
            </Typography>
            <Typography variant="p" color="white">
              Lorem ipsum dolor sit amet consectetur. In facilisis auctor proin
              sit dui quis. Lacus et donec pellentesque phasellus etiam eu vel.
              Condimentum massa sapien est libero quisque feugiat risus nec
              vulputate. At nunc et non volutpat amet at.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, my: 5 }}>
              <Button variant="contained" color="primary">
                Request Blood
              </Button>
              <Button variant="contained" color="primary">
                Join Campaign
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="/hero.png" alt="hero" style={{ height: 500, width: 400 }} />
        </Grid>
      </Grid>
      <Grid container py={10}>
        <Grid item md={6} xs={12}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <img src="/who.png" alt="who we are" style={{ width: 300 }} />

            <Typography variant="p" color="primary" sx={{ px: 10 }}>
              Lorem ipsum dolor sit amet consectetur. In facilisis auctor proin
              sit dui quis. Lacus et donec pellentesque phasellus etiam eu vel.
              Condimentum massa sapien est libero quisque feugiat risus nec
              vulputate. At nunc et non volutpat amet at.
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
          }}
        >
          <img
            src="/donations.png"
            alt="donations"
            style={{ width: 400, height: 400 }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={6} xs={12}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 10 }}>
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
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: {
              xs: "flex-end",
              md: "center",
            },
            alignItems: "center",
          }}
        >
          <img
            src="/can.png"
            alt="who can"
            style={{ width: 300, height: 300 }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="/how.png"
            alt="how to join"
            style={{ width: 300, height: 300 }}
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
            p: 10,
          }}
        >
          <Typography variant="p" color="primary">
            Lorem ipsum dolor sit amet consectetur. In facilisis auctor proin
            sit dui quis. Lacus et donec pellentesque phasellus etiam eu vel.
            Condimentum massa sapien est libero quisque feugiat risus nec
            vulputate. At nunc et non volutpat amet at.
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ p: 10 }}>
        <Grid item md={6} xs={12}>
          <img src="/join.png" alt="hero" width="100%" />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Typography variant="h3" color="primary" textAlign="center">
              Join Us
            </Typography>
            <Typography variant="h3" color="primary" textAlign="center">
              Today
            </Typography>
            <Button variant="contained" color="primary">
              Register
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          py: 5,
          background: "url(/footer_background.png) no-repeat center center",
          backgroundSize: "cover",
        }}
      >
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="/logo.png" alt="footer logo" style={{ width: "250px" }} />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h3" color="white">
              Our Services
            </Typography>
            <Typography variant="h6" color="white">
              Request Blood
            </Typography>
            <Typography variant="h6" color="white">
              Donate Blood
            </Typography>
            <Typography variant="h6" color="white">
              Blood Campaigns
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
