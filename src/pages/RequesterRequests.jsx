import { useTheme, } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
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
import { createBloodRequestApi, getRequestsApi, deleteBloodRequestApi } from "../api/api";
import { Menu } from "@mui/icons-material";

export default function RequesterRequests() {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [bloodGroup, setBloodGroup] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [requestToDelete, setRequestToDelete] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleNewRequest = async () => {
    await createBloodRequestApi({
      bloodGroup,
      location,
      description,
    });
    setDialogOpen(false);
  };

  const openConfirmDialog = (requestId) => {
    setRequestToDelete(requestId);
    setConfirmDialogOpen(true);
  };

  const handleDeleteRequest = async () => {
    try {
      await deleteBloodRequestApi(requestToDelete);
      setRequests(requests.filter((request) => request._id !== requestToDelete));
      setConfirmDialogOpen(false);
      setRequestToDelete(null);
    } catch (error) {
      console.error("Failed to delete request:", error);
    }
  };

  useEffect(() => {
    if (isMobile) {
      setDrawerOpen(false);
    } else {
      setDrawerOpen(true);
    }
  }, [isMobile]);

  useEffect(() => {
    getRequestsApi().then((res) => {
      setRequests(res.requests);
    });
  }, []);

  return (
    <Grid container>
      <Grid item md={3} lg={2}>
        <SideBar
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
          isMobile={isMobile}
          userType="REQUESTER"
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
          <DialogTitle>New Blood Request</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below to create a new blood request
            </DialogContentText>

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Blood Group"
              type="text"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
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
              multiline
              rows={5}
            />
            <DialogActions>
              <Button onClick={handleDialogClose} color="primary">
                Cancel
              </Button>

              <Button
                variant="contained"
                type="button"
                color="primary"
                onClick={handleNewRequest}
              >
                Send Request
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
        <Grid container gap={1} sx={{ paddingLeft: 2, paddingRight: 2 }}>
          <Grid item lg={7} md={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                mb: 2,
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4" component="div" color="primary">
                Requests
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={handleDialogOpen}
              >
                New Request
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid container gap={1} sx={{ paddingLeft: 2, paddingRight: 2 }}>
          <Grid item lg={7} md={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                backgroundColor: "whitesmoke",
                borderRadius: "15px",
                p: 2,
                gap: 2,
              }}
            >
              {requests ? (
                requests.map((request) => (
                  <Box key={request._id}>
                    <Request
                      data={request}
                      setSelectedRequest={setSelectedRequest}
                    />
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => openConfirmDialog(request._id)}
                    >
                      Delete
                    </Button>
                  </Box>
                ))
              ) : (
                <Typography>No requests found</Typography>
              )}
            </Box>
          </Grid>
          <Grid item lg={4} md={12} xs={12}>
            {selectedRequest && <ChatBox requestId={selectedRequest} />}
          </Grid>
        </Grid>

        {/* Confirmation Dialog */}
        <Dialog
          open={confirmDialogOpen}
          onClose={() => setConfirmDialogOpen(false)}
        >
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this blood request?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setConfirmDialogOpen(false)}>Cancel</Button>
            <Button
              onClick={handleDeleteRequest}
              color="secondary"
              variant="contained"
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid>
  );
}
