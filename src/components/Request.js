import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import { getUser } from "../services/user.service";
import { acceptRequestApi, declineRequestApi } from "../api/api";

export default function Request({
  data,
  setSelectedRequest,
  openConfirmDialog,
}) {
  const handleRequest = () => {
    setSelectedRequest(data._id);
  };

  const acceptRequest = async () => {
    await acceptRequestApi(data._id);
  };

  const declineRequest = async () => {
    await declineRequestApi(data._id);
  };

  const user = getUser();

  return (
    <Box
      sx={{
        backgroundColor: "white",
        px: 5,
        py: 2,
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        borderRadius: "15px",
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <Avatar sx={{ mr: 2 }}>{data?.userId?.email[0]}</Avatar>
        <Box>
          <Typography variant="h6" component="div" color="primary">
            {data?.userId?.email}
          </Typography>
          <Typography variant="body2">
            {new Date(data?.date).toLocaleString()}
          </Typography>
        </Box>
      </Box>

      <Typography variant="body1" component="div" color="primary">
        {data?.description}
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 1,
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: "20px", px: 3, mt: 2, alignSelf: "flex-end" }}
          onClick={handleRequest}
        >
          View
        </Button>
        {user.userType === "REQUESTER" && (
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: "20px", px: 3, mt: 2, alignSelf: "flex-end" }}
            onClick={() => openConfirmDialog(data._id)}
          >
            Delete
          </Button>
        )}
        {user.userType === "ADMIN" && (
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: "20px", px: 3, mt: 2, alignSelf: "flex-end" }}
            onClick={acceptRequest}
          >
            Approve
          </Button>
        )}
        {user.userType === "ADMIN" && (
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: "20px", px: 3, mt: 2, alignSelf: "flex-end" }}
            onClick={declineRequest}
          >
            Decline
          </Button>
        )}
      </Box>
    </Box>
  );
}
