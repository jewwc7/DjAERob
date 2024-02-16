import React from "react";
import { mainColors } from "./themecolors";
import { Grid, Paper } from "@mui/material";

const ServiceCard = ({ title }) => {
  return (
    <Grid item sm={6} xs={12} style={{}}>
      <Paper
        className="nav-btns"
        style={{
          minHeight: 60,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 16,
        }}
      >
        <p style={{ color: mainColors.black }}>{title}</p>
      </Paper>
    </Grid>
  );
};

export default ServiceCard;
