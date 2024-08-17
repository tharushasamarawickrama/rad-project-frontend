import { useTheme } from "@emotion/react";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Menu,
  Toolbar,
  useMediaQuery,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import { Box } from "@mui/system";
import Request from "../components/Request";
import ChatBox from "../components/ChatBox";
import Campaign from "../components/Campaign";
import UpcomingEvents from "../components/UpcomingEvents";

export default function AdminCampaigns() {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
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
  return (
    <Grid container>
      <Grid item md={3} lg={2}>
        <SideBar
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
          isMobile={isMobile}
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

            <Button sx={{ flexGrow: 2 }} color="primary">
              LogOut
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container>
          <Typography variant="h4" component="div" color="primary">
            Campaigns
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNewRequest}
            mx={2}
          >
            Add Campaign
          </Button>
        </Grid>
        <Grid container gap={1}>
          <Grid item lg={7} md={9} sx={12}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                backgroundColor: "whitesmoke",
                borderRadius: "15px",
              }}
            >
              <Campaign />
            </Box>
          </Grid>
          <Grid item lg={4} md={9} sx={12}>
            <UpcomingEvents />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
