import React, { useEffect, useState } from "react";
import { campaignsApi, getCampaignApi, joinCampaignApi } from "../api/api";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import NavBar from "../components/NavBar";
import { getUser } from "../services/user.service";

export default function CampaignOverview() {
  const { campaignId } = useParams();
  const [campaign, setCampaign] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [user, setUser] = useState({});
  const [isJoined, setIsJoined] = useState(false);
  
 

  useEffect(() => {
    getCampaignApi(campaignId).then((data) => {
      console.log(data);
      setCampaign(data.campaign);
    
      const user = getUser();
      console.log(user);
    const storedIsJoined = localStorage.getItem(`campaign_${campaignId}_joined`);
    if (storedIsJoined) {
      setIsJoined(JSON.parse(storedIsJoined));
    }
    });
  }, [campaignId]);

  const formattedDate = campaign?.date
    ? new Date(campaign.date).toLocaleDateString()
    : "";


  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleViewDialogOpen = () => {
    setViewDialogOpen(true);
  };

  const handleViewDialogClose = () => {
    setViewDialogOpen(false);
  };
  const handleUpdateDialogOpen = () => {
    setUpdateDialogOpen(true);
  };
  const handleUpdateDialogClose = () => {
    setUpdateDialogOpen(false);
  };
  const handleSaveDialogOpen = () => {
    setSaveDialogOpen(true);
  };
  const handleJoinCampaign = async () => {
    await joinCampaignApi(campaignId, {
      fullName,
      email,
      phoneNumber,
      address,
      bloodGroup,
    });
    setIsJoined(true);
    localStorage.setItem(`campaign_${campaignId}_joined`, true);
    handleDialogClose();
  };

  return (
    <div>
      <NavBar />
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Join Campaign</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the form below to join the campaign.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="fullName"
            label="Full Name"
            type="text"
            fullWidth
            variant="standard"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="dense"
            id="phoneNumber"
            label="Phone Number"
            type="text"
            fullWidth
            variant="standard"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextField
            margin="dense"
            id="address"
            label="Address"
            type="text"
            fullWidth
            variant="standard"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            margin="dense"
            id="bloodGroup"
            label="Blood Group"
            type="text"
            fullWidth
            variant="standard"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          />
          <DialogActions>
            <Button onClick={handleDialogClose} color="primary">
              Cancel
            </Button>

            <Button
              variant="contained"
              type="button"
              color="primary"
              onClick={handleJoinCampaign}
            >
              Join
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>

      <Dialog open={viewDialogOpen} onClose={handleViewDialogClose}>
        <DialogTitle>Your Registration Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Here are the details you provided for this campaign.
          </DialogContentText>
          <Box>
            <Typography variant="body1">Full Name: {fullName}</Typography>
            <Typography variant="body1">Email: {email}</Typography>
            <Typography variant="body1">Phone Number: {phoneNumber}</Typography>
            <Typography variant="body1">Address: {address}</Typography>
            <Typography variant="body1">Blood Group: {bloodGroup}</Typography>
          </Box>
          <DialogActions>
            <Button
              variant="contained"
              type="button"
              color="primary"
              onClick={handleViewDialogClose} 
            >
              Close
            </Button>
            <Button 
              variant="contained"
              type="button"
              color="primary"
              onClick={ () => {handleUpdateDialogOpen(); handleViewDialogClose();}}
            >
              Update
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>

      <Dialog open={updateDialogOpen} onClose={handleUpdateDialogClose}>
        <DialogTitle>Update Your Registration Details</DialogTitle>
        <DialogContent>
          <TextField
              margin="dense"
              id="phoneNumber"
              label="Phone Number"
              type="text"
              fullWidth
              variant="standard"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              margin="dense"
              id="address"
              label="Address"
              type="text"
              fullWidth
              variant="standard"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <TextField
              margin="dense"
              id="bloodGroup"
              label="Blood Group"
              type="text"
              fullWidth
              variant="standard"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
            />
          <DialogActions>
            <Button
              variant="contained"
              type="button"
              color="primary"
              onClick={handleSaveDialogOpen}
            >
              Save
            </Button>
            <Button
              variant="contained"
              type="button"
              color="primary"
              onClick={handleUpdateDialogClose}
            >
              Cancel
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      <Grid container sx={{ p: 5 }} gap={5}>
        <Typography variant="h4">{campaign?.title}</Typography>
        <Grid
          container
          sx={{
            backgroundColor: "whitesmoke",
            py: 3,
            borderRadius: 5,
            display: "flex",
            justifyContent: "space-around",
          }}
          gap={1}
        >
          <Grid
            item
            lg={4}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              justifyContent: "space-around",
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: 5,
                padding: 3,
                textAlign: "center",
                mt: 4,
              }}
            >
              <Typography variant="h4" color="primary">
                Date
              </Typography>
              <Typography variant="h6">{formattedDate}</Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: 5,
                padding: 3,
                textAlign: "center",
              }}
            >
              <Typography variant="h4" color="primary">
                Location
              </Typography>
              <Typography variant="h6">{campaign?.location}</Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: 5,
                padding: 3,
                textAlign: "center",
              }}
            >
              <Typography variant="h4" color="primary">
                {campaign?.participants ? campaign.participants.length : 0}{" "}
                people have joined
              </Typography>
              {isJoined ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleViewDialogOpen}
                  sx={{ mt: 2 }}
                  >
                    View
                  </Button>
              ) : (
                <Button
                variant="contained"
                color="primary"
                onClick={handleDialogOpen}
                sx={{ mt: 2 }}
              >
                Join Now
              </Button>
              )
              }
            </Box>
          </Grid>
          <Grid item lg={6} md={6}>
            <img
              src={campaign?.imgURL}
              alt="Event Image"
              style={{ maxWidth: "100%" }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ backgroundColor: "white", borderRadius: 5, p: 3 }}
        >
          <Box>
            <Typography variant="h5">Detail</Typography>
            <Typography>{campaign?.description}</Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
