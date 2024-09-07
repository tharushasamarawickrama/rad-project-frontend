import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";
import { contactApi } from "../api/api";

function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleContactSubmit = async () => {
    await contactApi({ fullName, email, message });
    setFullName("");
    setEmail("");
    setMessage("");
    setSuccess(true);
  }
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
              <TextField label="Your Name" variant="outlined" fullWidth value={fullName} onChange={(e) => setFullName(e.target.value)} />
              <TextField label="Your Email" variant="outlined" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
              <TextField
                label="Your Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {success && <Typography color="success">Message sent successfully!</Typography>}
              <Button variant="contained" color="primary" onClick={handleContactSubmit}>
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
