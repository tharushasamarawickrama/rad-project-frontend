import { useTheme } from "@emotion/react";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  useMediaQuery,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import { Box } from "@mui/system";
import Request from "../components/Request";
import ChatBox from "../components/ChatBox";
import { getRequestsApi } from "../api/api";
import { Menu } from "@mui/icons-material";

export default function RequesterRequests() {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleNewRequest = () => {
    alert("New Rquest caputured");
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
        <Box sx={{ display: "flex", mb: 2 }}>
          <Typography variant="h4" component="div" color="primary">
            Requests
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNewRequest}
          >
            New Request
          </Button>
        </Box>
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
              {requests &&
                requests.map((request) => (
                  <Request
                    key={request._id}
                    data={request}
                    setSelectedRequest={setSelectedRequest}
                  />
                ))}
            </Box>
          </Grid>
          <Grid item lg={4} md={12} xs={12}>
            {selectedRequest && <ChatBox requestId={selectedRequest} />}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
