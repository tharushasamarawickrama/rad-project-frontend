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

export default function AdminRequests() {
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
            Requests
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNewRequest}
            mx={2}
          >
            New Request
          </Button>
        </Grid>
        <Grid container>
          <Grid item lg={8} md={9} sx={12}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                backgroundColor: "whitesmoke",
                borderRadius: "15px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  px: 5,
                  py: 5,
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "left",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  borderRadius: "15px",
                  m: 2,
                }}
              >
                <Typography variant="h6" component="div" color="primary">
                  Request 1
                </Typography>
                <Typography variant="body1" component="div" color="primary">
                  Request 1 details
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={4} md={3} sx={12}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
