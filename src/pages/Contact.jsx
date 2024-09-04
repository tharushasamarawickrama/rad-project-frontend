import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <NavBar backgroundColor="#FF5959" />
      <Grid
        container
        sx={{
          background: "url(/contact_background.png) no-repeat center center",
          backgroundSize: "cover",
          height: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2" color="white" textAlign="center">
          Contact Us
        </Typography>
      </Grid>
      <Grid container py={10} px={2}>
        <Grid item md={6} xs={12}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h4" color="primary">
              Get in Touch
            </Typography>
            <Typography variant="body1" color="primary">
              We're here to help! Reach out to us with any questions, concerns, 
              or feedback. Fill out the form below, and our team will get back 
              to you as soon as possible.
            </Typography>
            <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 3 }}>
              <TextField label="Your Name" variant="outlined" fullWidth />
              <TextField label="Your Email" variant="outlined" fullWidth />
              <TextField
                label="Your Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
              />
              <Button variant="contained" color="primary">
                Send Message
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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/contact_us.png"
            alt="Contact Us"
            style={{ width: 400, height: 200 }}
          />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default Contact;
