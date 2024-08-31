import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

export default function Campaign({ title, description }) {
  const handleEdit = () => {
    alert("Editing Event details");
  };
  return (
    <Box
      sx={{
        backgroundColor: "white",
        px: 5,
        py: 5,
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        borderRadius: "15px",
        m: 2,
        width: "100%",
      }}
    >
      <Typography variant="h5" component="div" color="primary">
        {title}
      </Typography>
      <Box sx={{ display: "flex", mt: 2 }}>
        <Typography variant="body2" component="div" color="primary">
          {description}
        </Typography>
        <Box>
          <img
            src={process.env.PUBLIC_URL + "/event-img.jpg"}
            alt="Event Image"
            style={{ width: 80, height: 80, marginRight: 2 }}
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignSelf: "flex-end", mt: 2 }}>
        <Button>
          <DeleteOutlineRoundedIcon />
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: "20px", px: 3, marginRight: 2 }}
          onClick={handleEdit}
        >
          Edit
        </Button>
      </Box>
    </Box>
  );
}
