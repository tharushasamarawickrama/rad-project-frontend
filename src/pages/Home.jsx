import { Box, Button, Grid, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleRequestBlood = () => {
    navigate("/signup");
  };

  const handleJoinCampaign = () => {
    navigate("/campaigns");
  };

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
              marginLeft: 10,
            }}
          >
            <Typography variant="h1" color="white">
              Be a Hero
            </Typography>
            <Typography variant="p" color="white">
              Welcome to our Blood Donation Platform! Save lives by joining our
              community of donors. Easily find nearby donation centers, track
              your donation history, and stay updated on blood drives. Together,
              we can make a difference—one donation at a time. Start your
              life-saving journey today!
            </Typography>
            <Box sx={{ display: "flex", gap: 2, my: 5 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleRequestBlood()}
              >
                Request Blood
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleJoinCampaign()}
              >
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
            <img
              src="/heroimg.png"
              alt="who we are"
              style={{ width: 500, height: 400, marginLeft: 100 }}
            />

            <Typography variant="p" color="primary" sx={{ px: 10 }}>
            We are a dedicated community committed to saving lives through blood donations. Our mission
             is to connect generous donors with those in need, providing a platform to request and donate blood 
             efficiently. Together, we can help save lives and make a positive impact in the healthcare system.
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
            Donating blood through our platform is simple and impactful. Start by registering as 
            a donor on our website, where you'll create a profile and provide necessary information.
             After registration, you'll be able to check your eligibility by answering a few health-related 
             questions. If you're eligible, you can then schedule a donation appointment at one of our nearby partner centers.
            </Typography>
            <Typography variant="p" color="primary">
            On the day of your donation, you’ll undergo a quick health screening to ensure you’re
             fit to donate. After donating, you'll be provided with refreshments and a brief recovery period. Your contribution will be tracked,
              and you’ll receive notifications when your blood has been used to save lives.
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
            style={{ width: 400, height: 400 }}
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
            style={{ width: 400, height: 400 }}
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
          Once registered, you'll be guided through the donation process, 
          including pre-donation screening and scheduling an appointment. After
           donating, you’ll receive updates on how your blood is used to help others.
            Each step is designed to ensure a safe and effective donation experience.
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
            <Typography variant="h1" color="primary" textAlign="center">
              Today
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleRequestBlood()}
            >
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
            <Typography
              variant="h6"
              color="white"
              onClick={() => handleRequestBlood()}
            >
              Request Blood
            </Typography>
            <Typography
              variant="h6"
              color="white"
              onClick={() => handleJoinCampaign()}
            >
              Donate Blood
            </Typography>
            <Typography
              variant="h6"
              color="white"
              onClick={() => handleJoinCampaign()}
            >
              Blood Campaigns
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
