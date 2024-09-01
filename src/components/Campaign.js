import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { editCampaignApi } from "../api/api";

export default function Campaign({
  title,
  description,
  imgURL,
  handleEdit,
  handleDelete,
}) {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        px: 3,
        py: 3,
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
        <Box sx={{ display: "flex", ml: "auto" }}>
          <img
            src={imgURL}
            alt="Event Image"
            style={{ width: 120, height: 120, marginLeft: 10 }}
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignSelf: "flex-end", mt: 2 }}>
        <Button>
          <DeleteOutlineRoundedIcon onClick={handleDelete} />
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
