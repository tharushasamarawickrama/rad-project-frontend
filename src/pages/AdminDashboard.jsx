import {
  AppBar,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ReactComponent as Logo } from "../assets/logo.svg";
import {
  Campaign,
  Close,
  Dashboard,
  Home,
  Menu,
  RequestPage,
} from "@mui/icons-material";
import { BarChart, Gauge } from "@mui/x-charts";
import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import SideBar from "../components/SideBar";

function AdminDashboard() {
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
          sx={{ background: "transparent" }}
          elevation={0}
        >
          <Toolbar>
            {isMobile && (
              <IconButton onClick={() => setDrawerOpen(true)}>
                <Menu />
              </IconButton>
            )}
            <Typography
              variant="h6"
              component="div"
              color="primary"
              sx={{ flexGrow: 1 }}
            >
              Admin Dashboard
            </Typography>
            <Button color="primary">LogOut</Button>
          </Toolbar>
        </AppBar>
        <Grid container>
          <Grid item sx={12} md={10}>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
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
                  borderRadius: "8px",
                }}
              >
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Donation Requests
                </Typography>
                <Typography variant="h3">100</Typography>
              </Box>

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
                  borderRadius: "8px",
                }}
              >
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Donation Campaigns
                </Typography>
                <Typography variant="h3">20</Typography>
              </Box>

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
                  borderRadius: "8px",
                }}
              >
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  No. of Registered Donators
                </Typography>
                <Typography variant="h3">200</Typography>
              </Box>
            </Box>
            <Typography variant="h5">Blood Requests</Typography>
            <BarChart
              series={[
                { data: [35, 44, 24, 34] },
                { data: [51, 6, 49, 30] },
                { data: [15, 25, 30, 50] },
                { data: [60, 50, 15, 25] },
              ]}
              height={290}
              xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
            <Typography variant="h5">Blood Stock Stats</Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Gauge
                width={100}
                height={100}
                value={50}
                valueMin={10}
                valueMax={60}
              />
              <Gauge
                width={100}
                height={100}
                value={50}
                valueMin={10}
                valueMax={60}
              />
              <Gauge
                width={100}
                height={100}
                value={50}
                valueMin={10}
                valueMax={60}
              />
              <Gauge
                width={100}
                height={100}
                value={50}
                valueMin={10}
                valueMax={60}
              />
              <Gauge
                width={100}
                height={100}
                value={50}
                valueMin={10}
                valueMax={60}
              />
            </Box>
          </Grid>
          <Grid item sx={12} md={2}>
            <Typography variant="h5">Upcoming Events</Typography>
            <Typography>Event 1</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AdminDashboard;
