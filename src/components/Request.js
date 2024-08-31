import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";

export default function Request({ data, setSelectedRequest }) {
  const handleRequest = () => {
    setSelectedRequest(data._id);
  };

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
      <Button
        variant="contained"
        color="primary"
        sx={{ borderRadius: "20px", px: 3, mt: 2, alignSelf: "flex-end" }}
        onClick={handleRequest}
      >
        View
      </Button>
    </Box>
  );
}
