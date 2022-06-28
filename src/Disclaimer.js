import React, { useContext, useState } from "react";
import MyButton from "./CustomButton";
import {
  Grid,
  Button,
  IconButton,
  Paper,
  Hidden,
  Container,
  useMediaQuery,
  useTheme,
  createTheme,
  Icon,
  Slide,
  Fade,
  TextField,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const themeColors = {
  homeRed: "rgba(161, 8, 59,1)",
  homeDarkOrange: "rgba(247, 188, 0,1)",
  homeLightOrange: "rgba(249, 147, 1,1)",
  homeYellowOrange: "rgba(247, 188, 0,1)",
  homePurple: "rgba(84, 23, 67,1)",
};
export const Disclaimer = () => {
  return (
    <Grid
      item
      container
      xs={12}
      style={{
        paddingTop: 24,
        paddingBottom: 56,
        flex: 1,
        backgroundColor: themeColors.homePurple,
        paddingLeft: 80,
        paddingRight: 80,
      }}
      // justifyContent={mediumScreen ? "space-evenly" : "space-evenly"}
    >
      <h3
        style={{
          color: "white",
        }}
      >
        Cancellation & Rescheduling Policy
      </h3>
      <p
        style={{
          color: "white",
          marginTop: 24,
          marginLeft: 0,
        }}
        className="footerP"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div
        style={{
          height: 1,
          width: "100%",
          marginTop: 32,
          backgroundColor: "#fff",
        }}
      ></div>
      <h3 style={{ marginTop: 24 }}>
        ©2022 Home Therapy, LLC. All rights reserved.
      </h3>
    </Grid>
  );
};

export default Disclaimer;
