import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { editCampaignApi } from "../api/api";
import { getUser } from "../services/user.service";
import { useNavigate, useNavigation } from "react-router-dom";

export default function Campaign({
  _id,
  title,
  description,
  imgURL,
  handleEdit,
  handleDelete,
}) {
  const user = getUser();
  const navigate = useNavigate();
  const openCampaign = () => {
    navigate(`/campaign/${_id}`);
  };
  return (
    <Grid
      container
      sx={{
        backgroundColor: "white",
        px: 3,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        borderRadius: "15px",
        m: 2,
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Grid item md={8} sx={{ py: 3 }}>
        <Box>
          <Typography variant="h5" component="div" color="primary">
            {title}
          </Typography>
          <Typography variant="body2" component="div" color="primary">
            {description}
          </Typography>
        </Box>
      </Grid>
      <Grid item md={4}>
        <img src={imgURL} alt="Event Image" style={{ maxWidth: "100%" }} />

        <Box sx={{ display: "flex", justifyContent: "flex-end", my: 2 }}>
          {user?.userType === "ADMIN" && (
            <>
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
            </>
          )}
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: "20px", px: 3, marginRight: 2 }}
            onClick={openCampaign}
          >
            View
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
