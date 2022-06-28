import React, { useContext } from "react";
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
} from "@mui/material";
import MyCard from "./CustomCards";
import purposeImg from "./Photos/purposeImg.jpg";

const themeColors = {
  homeRed: "rgba(161, 8, 59,1)",
  homeDarkOrange: "rgba(247, 188, 0,1)",
  homeLightOrange: "rgba(249, 147, 1,1)",
  homeYellowOrange: "rgba(247, 188, 0,1)",
  homePurple: "rgba(84, 23, 67,1)",
};
export const Services = () => {
  const servicesArr = [
    {
      image: purposeImg,
      title: "Swedish Massage",
      priceText: "90 minutes - $100",
    },
    {
      image: purposeImg,

      title: "Sports Massage",
      priceText: "90 minutes - $100",
    },
    {
      image: purposeImg,

      title: "Deep Tissue Massage",
      priceText: "90 minutes - $100",
    },
  ];

  function showServices() {
    return servicesArr.map((service) => {
      const { image, title, priceText } = service;
      return (
        <Grid item xs={12} md={3}>
          <MyCard priceText={priceText} image={image} title={title} />
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
        paddingBottom: 56,

        flex: 1,
      }}
      // justifyContent={mediumScreen ? "space-evenly" : "space-evenly"}
    >
      <Grid item xs={12}>
        <h1 style={{ textAlign: "center" }}>Our Services</h1>
      </Grid>
      <Grid
        item
        container
        xs={12}
        spacing={4}
        justifyContent="center"
        style={{ paddingTop: 24 }}
      >
        {showServices()}
      </Grid>
    </Grid>
  );
};

export default Services;
