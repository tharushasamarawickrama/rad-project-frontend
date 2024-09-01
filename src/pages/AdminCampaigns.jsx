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
import {
  campaignsApi,
  createCampaignApi,
  editCampaignApi,
  getCampaignApi,
  upcomingCampaignsApi,
} from "../api/api";
import { Menu } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function AdminCampaigns() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(true);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [dialogOpen, setDialogOpen] = useState(false);
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [campaign, setCampaign] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [imgURL, setURL] = useState("");
  const [campaignId, setCampaignId] = useState("");

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
  const handleCreateCampaign = async () => {
    const response = await createCampaignApi({
      title,
      description,
      location,
      date,
      imgURL,
    });
    handleDialogClose();
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleUpdateOpen = async (id) => {
    const res = await getCampaignApi(id);
    setCampaignId(res.campaign._id);
    setTitle(res.campaign?.title);
    setDescription(res.campaign?.description);
    setLocation(res.campaign?.location);
    setDate(new Date(res.campaign?.date).toLocaleDateString());
    setURL(res.campaign?.imgURL);

    setUpdateDialogOpen(true);
    setDialogOpen(true);
  };

  const handleUpdateClose = () => {
    setUpdateDialogOpen(false);
    setDialogOpen(false);
  };

  const handleUpdateCampaign = async () => {
    const response = await editCampaignApi(campaignId, {
      title,
      description,
      location,
      date,
      imgURL,
    });
    handleUpdateClose();
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
          <DialogTitle>
            {updateDialogOpen ? "Update Campaign" : "Create New Campaign"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below to
              {updateDialogOpen ? " update campaign" : " create new campaign"}
            </DialogContentText>

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              id="location"
              label="Location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              id="description"
              label="Description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              id="date"
              label="Date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              id="imgurl"
              label="Image URL"
              type="url"
              value={imgURL}
              onChange={(e) => setURL(e.target.value)}
              fullWidth
              variant="standard"
            />
            {/* Add more form fields as needed */}
            <DialogActions>
              <Button onClick={handleDialogClose} color="primary">
                Cancel
              </Button>
              {updateDialogOpen ? (
                <Button
                  variant="contained"
                  type="button"
                  color="primary"
                  onClick={handleUpdateCampaign}
                >
                  Update Campaign
                </Button>
              ) : (
                <Button
                  variant="contained"
                  type="button"
                  color="primary"
                  onClick={handleCreateCampaign}
                >
                  Create Campaign
                </Button>
              )}
            </DialogActions>
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
                  imgURL={event.imgURL}
                  handleEdit={() => handleUpdateOpen(event._id)}
                  handleDelete={handleUpdateCampaign}
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
