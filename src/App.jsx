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
            borderRadius: 20,
            width: 150,
            height: 40,
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
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
