import { useTheme } from "@emotion/react";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  useMediaQuery,
  Typography,
  TextField,
  InputLabel,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import { Box } from "@mui/system";
import Request from "../components/Request";
import ChatBox from "../components/ChatBox";
import { Menu } from "@mui/icons-material";
import { getUserData } from "../api/api";

export default function RequesterProfile() {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [userData, setUserData] = useState();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    if (isMobile) {
      setDrawerOpen(false);
    } else {
      setDrawerOpen(true);
    }
  }, [isMobile]);

  useEffect(() => {
  getUserData().then(data=>{
    console.log(data);
    setUserData(data.user);
  })
  }, [])
  

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
      <Grid item md={10} lg={10}>
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
            Profile
          </Typography>
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
              <Grid container gap={1} sx={{ paddingLeft: 2, paddingRight: 2 }}>
                <Grid item lg={12} md={12} xs={12}>
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
                    <InputLabel>Email</InputLabel>
                    <TextField variant="outlined" fullWidth value={userData?.email} />
                    <TextField label="Phone" variant="outlined" fullWidth />
                  </Box>
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  display: "flex",
                  flexDirection: "row-reverse",
                }}
              >
                <Button variant="contained" color="primary">
                  Update
                </Button>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
