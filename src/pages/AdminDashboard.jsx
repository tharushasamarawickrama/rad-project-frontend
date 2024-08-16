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
        <Drawer
          variant="persistent"
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <List>
            <Logo height={70} width={150} />
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <RequestPage />
                </ListItemIcon>
                <ListItemText primary="Requests" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <Campaign />
                </ListItemIcon>
                <ListItemText primary="Campaigns" />
              </ListItemButton>
            </ListItem>
            {isMobile && (
              <ListItem>
                <ListItemButton onClick={() => setDrawerOpen(false)}>
                  <ListItemIcon>
                    <Close />
                  </ListItemIcon>
                  <ListItemText primary="Close" />
                </ListItemButton>
              </ListItem>
            )}
          </List>
        </Drawer>
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
