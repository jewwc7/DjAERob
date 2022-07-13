import React from "react";
import { Grid } from "@mui/material";
import MyCard from "./CustomCards";
import SportThumbnail from "./WebPhotos/SportThumbnail.png";
import SwedishThumbnail from "./WebPhotos/SwedishThumbnail.png";
import DeepTissueThumbnail from "./WebPhotos/DeepTissueThumbnail.png";

export const Services = () => {
  function bookMassage() {
    window.open("https://pocketsuite.io/book/keke-jones");
  }
  const servicesArr = [
    {
      image: SwedishThumbnail,
      title: "Relaxation Massage",
      priceText: "90 minutes - $100",
    },
    {
      image: SportThumbnail,

      title: "Sports Massage",
      priceText: "90 minutes - $100",
    },
    {
      image: DeepTissueThumbnail,
      title: "Deep Tissue Massage",
      priceText: "90 minutes - $100",
    },
  ];

  function showServices() {
    return servicesArr.map((service) => {
      const { image, title, priceText } = service;
      return (
        <Grid item container xs={12} md={3}>
          <MyCard
            priceText={priceText}
            image={image}
            title={title}
            onClick={bookMassage}
          />
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
        <h1 style={{ textAlign: "center" }}>Services</h1>
      </Grid>
      <Grid
        item
        container
        xs={12}
        spacing={4}
        justifyContent="space-evenly"
        style={{ paddingTop: 24, paddingLeft: 80, paddingRight: 80 }}
      >
        {showServices()}
      </Grid>
    </Grid>
  );
};

export default Services;
