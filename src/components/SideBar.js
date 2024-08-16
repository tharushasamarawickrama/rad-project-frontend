import { Campaign, Close, Dashboard, RequestPage } from "@mui/icons-material";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";

export default function SideBar({ drawerOpen, setDrawerOpen, isMobile }) {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      sx={{ borderRadius: 5 }}
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
  );
}
