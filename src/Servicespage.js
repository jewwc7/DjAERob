import React, { useContext, useState } from "react";
import MyButton from "./CustomButton";

import { Grid } from "@mui/material";
import Disclaimer from "./Disclaimer";
import TopNav from "./TopNav";
import SwedishHeader from "./WebPhotos/SwedishHeader.png";
import SportSportHeader from "./WebPhotos/SportSportHeader.png";
import DeepTissueHeader from "./WebPhotos/DeepTissueHeader.png";

const themeColors = {
  homeRed: "rgba(161, 8, 59,1)",
  homeDarkOrange: "rgba(247, 188, 0,1)",
  homeLightOrange: "rgba(249, 147, 1,1)",
  homeYellowOrange: "rgba(247, 188, 0,1)",
  homePurple: "rgba(84, 23, 67,1)",
};
const Section_Margin_TOP = 64;

export const ServicesPage = () => {
  const servicesArr = [
    {
      image: SwedishHeader,
      title: "Relaxation Massage",
      purpose: `Relaxing and calming massage used to assist in pain management, increasing blood flow, reducing stress, increasing a higher sense of well-being and overall relaxation
          ---Includes complimentary hot stones and aromatherapy.
        `,
      benefits:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      image: SportSportHeader,
      title: "Prenatal Massage",
      purpose:
        "Prenatal massage is a relaxation massage for the expecting mother that aims to relax tension, improve circulation and mobility - all while creating a sense of oneness between the mother and their growing child.",
      benefits:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      image: DeepTissueHeader,
      title: "Deep Tissue Massage",
      purpose:
        "Combined massage techniques utilizing deeper manipulations that focus on the soft and connective tissues of the body to foster imbalance corrections. Sports massage helps increase range of motion, flexibility, joint mobility, alleviate muscle tension and muscle aches --- Only 90 and 120 minutes due to time for proper muscle manipulation",
      benefits:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    /* {
      image: ThirtyMinute,
      title: "30 Minute Refresher",
      purpose:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      benefits:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },*/
  ];

  function bookMassage() {
    window.open("https://pocketsuite.io/book/keke-jones");
  }

  function showServices() {
    return servicesArr.map((service) => {
      const { image, title, purpose, benefits } = service;
      return (
        <Grid item container xs={12} style={{ marginTop: Section_Margin_TOP }}>
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
                children="BOOK NOW"
                buttonStyle={{ backgroundColor: themeColors.homePurple }}
                onClick={bookMassage}
                hoverEffect
                backgroundColor={themeColors.homePurple}
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
        flex: 1,
      }}
      // justifyContent={mediumScreen ? "space-evenly" : "space-evenly"}
    >
      <TopNav />
      <Grid item container xs={12} justifyContent="center">
        <Grid item xs={12} md={6} xl={3}>
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
                Hot Towel Treatment - $10.00
              </p>
              <p style={{ color: themeColors.homeYellowOrange }}>
                Aromatherapy - $5.00
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
