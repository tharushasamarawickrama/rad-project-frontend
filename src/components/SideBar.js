import {
  AccountCircle,
  Campaign,
  Close,
  Dashboard,
  RequestPage,
} from "@mui/icons-material";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useEffect } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";

export default function SideBar({
  drawerOpen,
  setDrawerOpen,
  isMobile,
  userType,
}) {
  const [menuItems, setMenuItems] = React.useState([]);
  useEffect(() => {
    switch (userType) {
      case "REQUESTER":
        setMenuItems([
          { label: "Dashboard", icon: <Dashboard />, link: "dashboard" },
          { label: "Requests", icon: <RequestPage />, link: "requests" },
          { label: "Profile", icon: <AccountCircle />, link: "profile" },
        ]);
        break;
      case "ADMIN":
        setMenuItems([
          { label: "Dashboard", icon: <Dashboard />, link: "dashboard" },
          { label: "Requests", icon: <RequestPage />, link: "requests" },
          { label: "Campaigns", icon: <Campaign />, link: "campaigns" },
        ]);
        break;
      default:
        setMenuItems([
          { label: "Dashboard", icon: <Dashboard />, link: "dashboard" },
          { label: "Requests", icon: <RequestPage />, link: "requests" },
          { label: "Campaigns", icon: <Campaign />, link: "campaigns" },
        ]);
    }
  }, [userType]);

  const renderMenuItems = () =>
    menuItems.map((item, index) => (
      <ListItem key={index}>
        <ListItemButton onClick={() => (window.location.href = item.link)}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.label} />
        </ListItemButton>
      </ListItem>
    ));

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
    >
      <List>
        <Logo height={70} width={150} />
        {/* <ListItem>
          <ListItemButton onClick={() => (window.location.href = "dashboard")}>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => (window.location.href = "requests")}>
            <ListItemIcon>
              <RequestPage />
            </ListItemIcon>
            <ListItemText primary="Requests" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => (window.location.href = "campaigns")}>
            <ListItemIcon>
              <Campaign />
            </ListItemIcon>
            <ListItemText primary="Campaigns" />
          </ListItemButton>
        </ListItem> */}
        {renderMenuItems()}
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
  );
}
