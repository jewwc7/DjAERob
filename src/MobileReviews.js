import React, { useContext, useState } from "react";
import AppContext from "./context/appContext";
import { Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const themeColors = {
  homeRed: "rgba(161, 8, 59,1)",
  homeDarkOrange: "rgba(247, 188, 0,1)",
  homeLightOrange: "rgba(249, 147, 1,1)",
  homeYellowOrange: "rgba(247, 188, 0,1)",
  homePurple: "rgba(84, 23, 67,1)",
};
export const MobileReviews = () => {
  const appContext = useContext(AppContext);
  const { horizontalPadding } = appContext;

  const reviewArr = [
    {
      reviewer: "Johnny",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      reviewer: "Quin",
      body: "Ipsum Lorem dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      reviewer: "Jackie",

      body: "Consectetur ipsum Lorem dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  ];
  const [currentReview, setCurrentReview] = useState(0);
  function goToNext() {
    const lengthOfReviews = reviewArr.length - 1;
    if (currentReview === lengthOfReviews) return setCurrentReview(0);
    else setCurrentReview(currentReview + 1);
  }
  function goBack() {
    if (currentReview === 0) return;
    else setCurrentReview(currentReview - 1);
  }
  function showReviews() {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            color: themeColors.homePurple,
            fontSize: 60,
            fontFamily: "ReinaNeue-Heavy",
          }}
        >
          "
        </div>

        <div>
          <p style={{ textAlign: "center" }}>{reviewArr[currentReview].body}</p>
          <p style={{ textAlign: "center" }}>
            -- {reviewArr[currentReview].reviewer}
          </p>
        </div>
        <div
          style={{
            color: themeColors.homePurple,
            fontSize: 60,
            fontFamily: "ReinaNeue-Heavy",
          }}
        >
          "
        </div>
      </div>
    );
  }
  return (
    <Grid
      item
      container
      xs={12}
      style={{
        paddingTop: 24,
        paddingBottom: 56,
        paddingLeft: horizontalPadding,
        paddingRight: horizontalPadding,
        flex: 1,
      }}
      alignItems="space-between"
    >
      <Grid item container xs={3} alignItems="center">
        <Grid item xs={12} container justifyContent="flex-start">
          <ArrowBackIosNewIcon
            sx={{ color: themeColors.homeRed, fontSize: 40, cursor: "pointer" }}
            onClick={goBack}
          />
        </Grid>
      </Grid>
      <Grid item container xs={6} alignItems="center" justifyContent="center">
        {showReviews()}
      </Grid>

      <Grid item container xs={3} justifyContent="flex-end" alignItems="center">
        <Grid item container xs={12} justifyContent="flex-end">
          <ArrowForwardIosIcon
            sx={{ color: themeColors.homeRed, fontSize: 40, cursor: "pointer" }}
            onClick={goToNext}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MobileReviews;
