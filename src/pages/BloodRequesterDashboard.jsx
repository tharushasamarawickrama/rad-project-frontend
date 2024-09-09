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
import UpcomingEvents from "../components/UpcomingEvents";
import Logout from "../components/Logout";
import { getRequesterDashboardData } from "../api/api";

function BloodRequesterDashboard() {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [requestData, setRequestData] = useState([]);
  const [aplus, setAplus] = useState(0);
  const [bplus, setBplus] = useState(0);
  const [oplus, setOplus] = useState(0);
  const [ominus, setOminus] = useState(0);
  const [aminus, setAminus] = useState(0);
  const [bminus, setBminus] = useState(0);
  const [abplus, setAbplus] = useState(0);
  const [abminus, setAbminus] = useState(0);

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
    getRequesterDashboardData().then((data) => {
      console.log(data);

      setAplus(data.bloodStock.find((item) => item.bloodGroup === "A+")?.stock);
      setAminus(
        data.bloodStock.find((item) => item.bloodGroup === "A-")?.stock
      );
      setBplus(data.bloodStock.find((item) => item.bloodGroup === "B+")?.stock);
      setBminus(
        data.bloodStock.find((item) => item.bloodGroup === "B-")?.stock
      );
      setOplus(data.bloodStock.find((item) => item.bloodGroup === "O+")?.stock);
      setOminus(
        data.bloodStock.find((item) => item.bloodGroup === "O-")?.stock
      );
      setAbplus(
        data.bloodStock.find((item) => item.bloodGroup === "AB+")?.stock
      );
      setAbminus(
        data.bloodStock.find((item) => item.bloodGroup === "AB-")?.stock
      );
      setRequestData(data);
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
            <Typography
              variant="h4"
              component="div"
              color="primary"
              sx={{ flexGrow: 1 }}
            >
              Blood Requester Dashboard
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
                  Pending
                </Typography>
                <Typography variant="h3">
                  {requestData.pendingRequests}
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
                  Accepted
                </Typography>
                <Typography variant="h3">
                  {requestData.acceptedRequests}
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
                  Rejected
                </Typography>
                <Typography variant="h3">
                  {requestData.rejectedRequests}
                </Typography>
              </Box>
            </Box>
            <Typography variant="h5" sx={{ my: 5 }}>
              Blood Stock Statistics
            </Typography>
            <BarChart
              series={[
                {
                  data: [
                    aplus,
                    aminus,
                    bplus,
                    bminus,
                    abplus,
                    abminus,
                    oplus,
                    ominus,
                  ],
                },
              ]}
              height={290}
              xAxis={[
                {
                  data: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
                  scaleType: "band",
                },
              ]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
          </Grid>
          <Grid item lg={4} xs={12} md={2}>
            <UpcomingEvents />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BloodRequesterDashboard;
