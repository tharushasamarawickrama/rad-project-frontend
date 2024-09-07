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
import { getUserData, updateUserData } from "../api/api";
import Logout from "../components/Logout";

export default function RequesterProfile() {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [userData, setUserData] = useState({
    email: "",
    bloodGroup: "",
  });
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
    getUserData().then((data) => {
      setUserData(data.user);
    });
  }, []);

  const handleUpdate = async () => {
    await updateUserData(userData);
  };

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
            <Typography
              variant="h4"
              component="div"
              color="primary"
              sx={{ flexGrow: 1 }}
            >
              Blood Requester Profile
            </Typography>
            <Logout />
          </Toolbar>
        </AppBar>
        <Grid container sx={{ paddingLeft: 2, paddingRight: 2 }}>
          <Grid item lg={7} xs={12} md={10}>
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
                    <TextField
                      variant="outlined"
                      fullWidth
                      value={userData?.email}
                      onChange={(e) =>
                        setUserData({ ...userData, email: e.target.value })
                      }
                    />
                    <InputLabel>Blood Group</InputLabel>
                    <TextField
                      variant="outlined"
                      fullWidth
                      value={userData?.bloodGroup}
                      onChange={(e) =>
                        setUserData({ ...userData, bloodGroup: e.target.value })
                      }
                    />

                    <InputLabel>Address</InputLabel>
                    <TextField
                      variant="outlined"
                      fullWidth
                      value={userData?.address}
                      onChange={(e) =>
                        setUserData({ ...userData, address: e.target.value })
                      }
                    />

                    <InputLabel>Phone</InputLabel>
                    <TextField
                      variant="outlined"
                      fullWidth
                      value={userData?.phoneNumber}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          phoneNumber: e.target.value,
                        })
                      }
                    />
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
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleUpdate}
                >
                  Update
                </Button>
              </Grid>
            </Box>
          </Grid>
          <Grid item lg={4} xs={12} md={2}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
