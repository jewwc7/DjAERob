import React, { useContext } from "react";
import AppContext from "./context/appContext";
import { Grid } from "@mui/material";
import MyCard from "./CustomCards";
import SportThumbnail from "./WebPhotos/SportThumbnail.png";
import SwedishThumbnail from "./WebPhotos/SwedishThumbnail.png";
import DeepTissueThumbnail from "./WebPhotos/DeepTissueThumbnail.png";
import ThirtyMinute from "./WebPhotos/ThirtyMinute.png";

import { useNavigate } from "react-router-dom";
import { scrollToSection } from "./context/AppState";

export const Services = () => {
  const navigate = useNavigate();
  const appContext = useContext(AppContext);
  const { horizontalPadding, connectSection } = appContext;

  function bookMassage() {
    navigate(`/`);
    scrollToSection(connectSection.sectionPostion);
    //  window.open("https://pocketsuite.io/book/keke-jones");
  }
  const servicesArr = [
    {
      image: SportThumbnail,

      title: "Prenatal Massage",
      priceText: "Starting at $80",
    },
    {
      image: SwedishThumbnail,
      title: "Relaxation Massage",
      priceText: "Starting at $100",
    },

    {
      image: DeepTissueThumbnail,
      title: "Deep Tissue Massage",
      priceText: "Starting at $160",
    },
    {
      image: ThirtyMinute,
      title: "Couples Massage",
      priceText: "Starting at $220",
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
        justifyContent={"space-between"}
        style={{
          paddingTop: 24,
          paddingLeft: horizontalPadding,
          paddingRight: horizontalPadding,
        }}
      >
        {showServices()}
      </Grid>
    </Grid>
  );
};

export default Services;
