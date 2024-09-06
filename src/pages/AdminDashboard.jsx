import {
  AppBar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  Campaign,
  Close,
  Dashboard,
  Home,
  Menu,
  RequestPage,
} from "@mui/icons-material";
import { BarChart, Gauge } from "@mui/x-charts";
import { useContext, useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import SideBar from "../components/SideBar";
import UpcomingEvents from "../components/UpcomingEvents";
import Logout from "../components/Logout";
import { dashboardApi, updateDashboardApi } from "../api/api";
import { getUser } from "../services/user.service";
import { AuthContext } from "../App";

function AdminDashboard() {
  const savedUser = getUser();
  const [drawerOpen, setDrawerOpen] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [dashboardData, setDashboardData] = useState({});
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [aplus, setAplus] = useState(0);
  const [bplus, setBplus] = useState(0);
  const [oplus, setOplus] = useState(0);
  const [ominus, setOminus] = useState(0);

  useEffect(() => {
    if (isMobile) {
      setDrawerOpen(false);
    } else {
      setDrawerOpen(true);
    }
  }, [isMobile]);

  useEffect(() => {
    dashboardApi().then((data) => {
      console.log(data);
      setDashboardData(data);
      setAplus(data.bloodData[0].stock);
      setBplus(data.bloodData[1].stock);
      setOplus(data.bloodData[2].stock);
      setOminus(data.bloodData[3].stock);
    });
  }, []);

  const handleUpdateDialogOpen = () => {
    setUpdateDialogOpen(true);
  };

  const handleUpdateDialogClose = () => {
    setUpdateDialogOpen(false);
  };

  const handleUpdateStock = async () => {
    await updateDashboardApi({
      bloodData: [
        { group: "A+", stock: aplus },
        { group: "B+", stock: bplus },
        { group: "O+", stock: oplus },
        { group: "O-", stock: ominus },
      ],
    });
    await dashboardApi().then((data) => {
      setDashboardData(data);
    });
    handleUpdateDialogClose();
  };

  return (
    <Grid container>
      <Dialog open={updateDialogOpen} onClose={handleUpdateDialogClose}>
        <DialogTitle>Join Campaign</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the form below to join the campaign.
          </DialogContentText>
          <TextField
            margin="dense"
            id="aplus"
            label="A+"
            type="number"
            fullWidth
            value={aplus}
            onChange={(e) => setAplus(e.target.value)}
          />
          <TextField
            margin="dense"
            id="bplus"
            label="B+"
            type="number"
            fullWidth
            value={bplus}
            onChange={(e) => setBplus(e.target.value)}
          />
          <TextField
            margin="dense"
            id="oplus"
            label="O+"
            type="number"
            fullWidth
            value={oplus}
            onChange={(e) => setOplus(e.target.value)}
          />
          <TextField
            margin="dense"
            id="ominus"
            label="O-"
            type="number"
            fullWidth
            value={ominus}
            onChange={(e) => setOminus(e.target.value)}
          />
          <DialogActions>
            <Button onClick={handleUpdateDialogClose} color="primary">
              Cancel
            </Button>

            <Button
              variant="contained"
              type="button"
              color="primary"
              onClick={handleUpdateStock}
            >
              Join
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
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
            <Typography
              variant="h4"
              component="div"
              color="primary"
              sx={{ flexGrow: 1 }}
            >
              Admin Dashboard
            </Typography>
            <Logout />
          </Toolbar>
        </AppBar>
        <Grid container>
          <Grid item lg={7} xs={12} md={10}>
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
                  borderRadius: "20px",
                  width: "30%",
                }}
              >
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Requests
                </Typography>
                <Typography variant="h3">
                  {dashboardData?.numRequests || 0}
                </Typography>
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
                  borderRadius: "20px",
                  width: "30%",
                }}
              >
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Campaigns
                </Typography>
                <Typography variant="h3">
                  {dashboardData?.numCampaigns || 0}
                </Typography>
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
                  borderRadius: "20px",
                  width: "30%",
                }}
              >
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Donors
                </Typography>
                <Typography variant="h3">
                  {dashboardData?.numDonors || 0}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                m: 2,
              }}
            >
              <Typography variant="h5">Blood Stock Statistics</Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={handleUpdateDialogOpen}
              >
                Update Stock
              </Button>
            </Box>
            {/* Bar chart */}
            <BarChart
              series={[
                {
                  data: dashboardData?.bloodData
                    ? dashboardData.bloodData.map((group) => group.stock)
                    : [],
                },
              ]}
              height={290}
              xAxis={[{ data: ["A+", "O+", "B+", "O-"], scaleType: "band" }]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
          </Grid>
          {/* Upcoming events */}
          <Grid item lg={4} xs={12} md={2}>
            <UpcomingEvents />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AdminDashboard;
