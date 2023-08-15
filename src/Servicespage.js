import React, { useContext, useState } from "react";
import MyButton from "./CustomButton";

import { Grid } from "@mui/material";
import Disclaimer from "./Disclaimer";
import TopNav from "./TopNav";
import SwedishHeader from "./WebPhotos/SwedishHeader.png";
import SportSportHeader from "./WebPhotos/SportSportHeader.png";
import DeepTissueHeader from "./WebPhotos/DeepTissueHeader.png";
import ThirtyMinute from "./WebPhotos/ThirtyMinute.png";

import AppContext from "./context/appContext";
import { scrollToSection } from "./context/AppState";
import { useNavigate } from "react-router-dom";

const themeColors = {
  homeRed: "rgba(161, 8, 59,1)",
  homeDarkOrange: "rgba(247, 188, 0,1)",
  homeLightOrange: "rgba(249, 147, 1,1)",
  homeYellowOrange: "rgba(247, 188, 0,1)",
  homePurple: "rgba(84, 23, 67,1)",
};
const Section_Margin_TOP = 64;

export const ServicesPage = () => {
  const navigate = useNavigate();
  const appContext = useContext(AppContext);

  const { tablet, mobile, horizontalPadding, connectSection } = appContext;
  const servicesArr = [
    {
      image: SwedishHeader,
      title: "Relaxation Massage",
      purpose: `Relaxing and calming massage used to assist in pain management, increasing blood flow, reducing stress, increasing a higher sense of well-being and overall relaxation
          ---Includes complimentary hot stones and aromatherapy.
        `,
      benefits:
        "Increased Blood Flow, Relieves Stress, Muscle Tension and an Increased Sense of Well Being.",
    },
    {
      image: SportSportHeader,
      title: "Prenatal Massage",
      purpose:
        "Prenatal massage is a relaxation massage for the expecting mother that aims to relax tension, improve circulation and mobility - all while creating a sense of oneness between the mother and their growing child.",
      benefits:
        "Alleviating Muscle and Joint Pain, Reduced Labor Pain During Childbirth, Improved Mood, Reduction of Stress and Anxiety.",
    },
    {
      image: DeepTissueHeader,
      title: "Deep Tissue Massage",
      purpose:
        "Combined massage techniques utilizing deeper manipulations that focus on the soft and connective tissues of the body to foster imbalance corrections. --- Only 90 and 120 minutes due to time for proper muscle manipulation.",
      benefits:
        "Reduction in Pain, Stress Relief, Rehabilition of Injured Muscles, Lower Blood Pressure and Scar Tissue Break-up.",
    },
    {
      image: ThirtyMinute,
      title: "Couples Massage",
      purpose:
        "In busy times, its hard to find quality time with your special someone. A couples massage is an intentioal reconnection with your person so both parties can relax and recenter.",
      benefits:
        "A potential increase in feelings of affection and intimacy within the relationship by the release of stress and happy hormones such as oxytocin, serotonin and dopamine.",
    },
  ];

  function bookMassage() {
    navigate(`/`);
    scrollToSection(connectSection.sectionPostion);
    //  window.open("https://pocketsuite.io/book/keke-jones");
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
              height="auto"
              width="100%"
            ></img>
          </Grid>
          <Grid
            item
            style={{
              paddingLeft: horizontalPadding,
              paddingRight: horizontalPadding,
              marginTop: 32,
            }}
          >
            <h1
              style={{
                color: themeColors.homePurple,
                textAlign: mobile ? "center" : "left",
              }}
            >
              {title}
            </h1>
            <div style={{ marginTop: 24 }}>
              <h3
                style={{
                  color: themeColors.homeYellowOrange,
                  textAlign: mobile ? "center" : "left",
                }}
              >
                Purpose
              </h3>
              <p style={{ textAlign: mobile ? "center" : "left" }}>{purpose}</p>
            </div>
            <div style={{ marginTop: 32 }}>
              <h3
                style={{
                  color: themeColors.homeYellowOrange,
                  textAlign: mobile ? "center" : "left",
                }}
              >
                Benefits
              </h3>
              <p style={{ textAlign: mobile ? "center" : "left" }}>
                {benefits}
              </p>
            </div>
            <div
              style={{
                marginTop: 48,
                display: "flex",
                justifyContent: mobile ? "center" : null,
              }}
            >
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
      container
      xs={12}
      style={{
        flex: 1,
        position: "relative",
        width: "100%",
      }}
      // justifyContent={mediumScreen ? "space-evenly" : "space-evenly"}
    >
      <TopNav />
      <Grid item container xs={12} justifyContent={mobile ? null : "center"}>
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

//Not in use
function AddOnBox() {
  const appContext = useContext(AppContext);

  const { tablet, mobile, horizontalPadding } = appContext;
  return (
    <Grid
      item
      xs={12}
      md={6}
      xl={6}
      style={{
        paddingLeft: horizontalPadding,
        paddingRight: horizontalPadding,
        marginTop: 32,
      }}
    >
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
  );
}
export default ServicesPage;
