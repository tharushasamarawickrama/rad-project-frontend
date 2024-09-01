import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BloodRequesterDashboard from "./pages/BloodRequesterDashboard";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRequests from "./pages/AdminRequests";
import AdminCampaigns from "./pages/AdminCampaigns";
import RequesterRequests from "./pages/RequesterRequests";
import RequesterProfile from "./pages/RequesterProfile";
import Campaigns from "./pages/Campaigns";
import CampaignOverview from "./pages/CampaignOverview";

export const ThemeContext = createContext();
export const AuthContext = createContext();

function App() {
  const savedUser = JSON.parse(localStorage.getItem("user")) || null;
  const [mode, setMode] = useState("light");
  const [user, setUser] = useState(savedUser);

  const changeTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
    localStorage.setItem("theme", mode === "light" ? "dark" : "light");
  };
  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: "#A80000",
      },
      secondary: {
        main: "#FFABAB",
      },
      background: {
        default: "#FFE5E5",
      },
      text: {
        primary: "#7D0202",
        secondary: "#000000",
        text: "#ffffff",
      },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            width: "100%",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            // borderRadius: 15,
            // width: 150,
            // height: 40,
          },
        },
      },
    },
  });

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setMode(localTheme);
    }
  }, [mode]);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, changeTheme }}>
      <AuthContext.Provider value={{ user, setUser }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Routes>
              {/* General Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/requester-dashboard"
                element={<BloodRequesterDashboard />}
              />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/campaigns" element={<Campaigns />} />
              <Route
                path="/campaign/:campaignId"
                element={<CampaignOverview />}
              />

              {/* Blood Requester Routes */}
              <Route
                path="/requester/dashboard"
                element={
                  user?.userType === "REQUESTER" ? (
                    <BloodRequesterDashboard />
                  ) : (
                    <Login />
                  )
                }
              />
              <Route
                path="/requester/requests"
                element={
                  user?.userType === "REQUESTER" ? (
                    <RequesterRequests />
                  ) : (
                    <Login />
                  )
                }
              />
              <Route
                path="/requester/profile"
                element={
                  user?.userType === "REQUESTER" ? (
                    <RequesterProfile />
                  ) : (
                    <Login />
                  )
                }
              />

              {/* Admin Routes */}
              <Route
                path="/admin/dashboard"
                element={
                  user?.userType === "ADMIN" ? <AdminDashboard /> : <Login />
                }
              />
              <Route
                path="/admin/requests"
                element={
                  user?.userType === "ADMIN" ? <AdminRequests /> : <Login />
                }
              />

              <Route
                path="/admin/campaigns"
                element={
                  user?.userType === "ADMIN" ? <AdminCampaigns /> : <Login />
                }
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
