import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRequests from "./pages/AdminRequests";

export const ThemeContext = createContext();

function App() {
  const [mode, setMode] = useState("light");

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

  return (
    <ThemeContext.Provider value={{ mode, changeTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            {/* General Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            {/* Blood Requester Routes */}
            <Route path="/requester/dashboard" element={<Home />} />
            <Route path="/requester/requests" element={<Home />} />
            <Route path="/requester/profile" element={<Home />} />
            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/requests" element={<AdminRequests />} />
            <Route path="/admin/campaigns" element={<Home />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
