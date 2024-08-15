import React, { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const theme = useTheme();
  const navigation = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Contact", path: "/contact" },
    { text: "Login", path: "/login" },
    { text: "Dashboard", path: "/requester-dashboard" }
  ];

  const handleNavigation = (path) => {
    navigation(path);
    setDrawerOpen(false);
  };
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
      }}
    >
      <Toolbar>
        <Logo height={70} width={150} />
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setDrawerOpen(!drawerOpen)}
              sx={{ display: "flex", justifyContent: "flex-end", flexGrow: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <Box sx={{ width: 250, paddingTop: 2 }}>
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.text}
                    onClick={() => handleNavigation(item.path)}
                  >
                    <Typography
                      textAlign="center"
                      color={theme.palette.primary.main}
                    >
                      {item.text}
                    </Typography>
                  </MenuItem>
                ))}
              </Box>
            </Drawer>
          </>
        ) : (
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", flexGrow: 1 }}
          >
            {menuItems.map((item) => (
              <MenuItem
                key={item.text}
                onClick={() => handleNavigation(item.path)}
              >
                <Typography color={theme.palette.primary.main}>
                  {item.text}
                </Typography>
              </MenuItem>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
