import { useTheme } from "@emotion/react";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  useMediaQuery,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import { Box } from "@mui/system";
import Request from "../components/Request";
import ChatBox from "../components/ChatBox";
import Campaign from "../components/Campaign";
import UpcomingEvents from "../components/UpcomingEvents";
import { campaignsApi, upcomingCampaignsApi } from "../api/api";
import { Menu } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function AdminCampaigns() {
  const navigate = useNavigate();
  const theme = useTheme();

  const [drawerOpen, setDrawerOpen] = useState(true);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [dialogOpen, setDialogOpen] = useState(false);
  const [campaign, setCampaign] = useState([]);

  useEffect(() => {
    campaignsApi().then((data) => {
      console.log(data);

      setCampaign(data.campaigns);
    });
  }, []);

  useEffect(() => {
    if (isMobile) {
      setDrawerOpen(false);
    } else {
      setDrawerOpen(true);
    }
  }, [isMobile]);
  const handleNewRequest = () => {
    alert("New Rquest caputured");
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleDialogClose();
  };

  return (
    <Grid container>
      <Grid item md={3} lg={2}>
        <SideBar
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
          isMobile={isMobile}
          userType="ADMIN"
        />
      </Grid>
      <Grid item md={9} lg={10}>
        <AppBar
          position="static"
          sx={{ background: "transparent", my: 2 }}
          elevation={0}
        >
          <Toolbar>
            {isMobile && (
              <IconButton onClick={() => setDrawerOpen(true)}>
                <Menu />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
        <Dialog open={dialogOpen} onClose={handleDialogClose}>
          <DialogTitle>New Request</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below to create a new request.
            </DialogContentText>
            <form onSubmit={handleFormSubmit}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
              />
              {/* Add more form fields as needed */}
              <DialogActions>
                <Button onClick={handleDialogClose} color="primary">
                  Cancel
                </Button>
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
        <Grid container>
          <Typography variant="h4" component="div" color="primary">
            Campaigns
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleDialogOpen}
            mx={2}
          >
            Add Campaign
          </Button>
        </Grid>
        <Grid container gap={1}>
          <Grid item lg={7} md={9} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                backgroundColor: "whitesmoke",
                borderRadius: "15px",
              }}
            >
              {campaign.map((event) => (
                <Campaign
                  key={event._id}
                  title={event.title}
                  description={event.description}
                />
              ))}
            </Box>
          </Grid>
          <Grid item lg={4} md={9} xs={12}>
            <UpcomingEvents />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
