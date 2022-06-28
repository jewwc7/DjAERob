import React, { useContext, useState } from "react";
import MyButton from "./CustomButton";
import hero from "./Photos/hero.jpg";

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
import Disclaimer from "./Disclaimer";

const themeColors = {
  homeRed: "rgba(161, 8, 59,1)",
  homeDarkOrange: "rgba(247, 188, 0,1)",
  homeLightOrange: "rgba(249, 147, 1,1)",
  homeYellowOrange: "rgba(247, 188, 0,1)",
  homePurple: "rgba(84, 23, 67,1)",
};
export const ServicesPage = () => {
  const servicesArr = [
    {
      image: hero,
      title: "Swedish Massage",
      purpose:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      benefits:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      image: hero,
      title: "Sports Massage",
      purpose:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      benefits:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      image: hero,
      title: "Deep Tissue Massage",
      purpose:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      benefits:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      image: hero,
      title: "30 Minute Refresher",
      purpose:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      benefits:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];
  const [currentReview, setCurrentReview] = useState(0);

  function showServices() {
    return servicesArr.map((service) => {
      const { image, title, purpose, benefits } = service;
      return (
        <Grid item container xs={12} style={{ marginTop: 32 }}>
          <Grid item xs={12}>
            <img
              src={image}
              alt="massage service"
              height={240}
              width="100%"
            ></img>
          </Grid>
          <Grid item style={{ paddingLeft: 80, paddingRight: 80 }}>
            <h1 style={{ color: themeColors.homePurple }}>{title}</h1>
            <div style={{ marginTop: 24 }}>
              <h3 style={{ color: themeColors.homeYellowOrange }}>Purpose</h3>
              <p>{purpose}</p>
            </div>
            <div style={{ marginTop: 32 }}>
              <h3 style={{ color: themeColors.homeYellowOrange }}>Benefits</h3>
              <p>{benefits}</p>
            </div>
            <div style={{ marginTop: 48 }}>
              <MyButton
                children="Book Now"
                buttonStyle={{ backgroundColor: themeColors.homePurple }}
              />
            </div>
          </Grid>
        </Grid>
      );
    });
  }
  return (
    <Grid
      item
      container
      xs={12}
      style={{
        paddingTop: 24,
        flex: 1,
      }}
      // justifyContent={mediumScreen ? "space-evenly" : "space-evenly"}
    >
      <Grid item container xs={12} justifyContent="center">
        <Grid item xs={10}>
          <div
            style={{
              borderWidth: 2,
              borderColor: themeColors.homeYellowOrange,
              padding: 16,
              display: "flex",
              justifyContent: "space-between",
              border: `2px solid ${themeColors.homeYellowOrange}`,
            }}
          >
            <h2 style={{ color: themeColors.homeYellowOrange }}>Add-Ons</h2>
            <div>
              <p style={{ color: themeColors.homeYellowOrange }}>
                Hot Towel Treatment - $5.00
              </p>
              <p style={{ color: themeColors.homeYellowOrange }}>
                Aromatherapy - $5.00
              </p>
              <p style={{ color: themeColors.homeYellowOrange }}>
                Full Body Stretching (additional 20 minutes) - $25.00
              </p>
            </div>
          </div>
        </Grid>
        <Grid item container xs={12}>
          {showServices()}
        </Grid>
      </Grid>
      <div style={{ marginTop: 48 }}>
        <Disclaimer />
      </div>
    </Grid>
  );
};

export default ServicesPage;
