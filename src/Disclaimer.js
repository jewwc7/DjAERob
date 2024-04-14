import React, { useContext } from "react";
import AppContext from "./context/appContext";
import { Grid } from "@mui/material";
import { mainColors } from "./themecolors";
import { SECTION_PADDING_TOP } from "./constants";

const themeColors = {
  homeRed: "rgba(161, 8, 59,1)",
  homeDarkOrange: "rgba(247, 188, 0,1)",
  homeLightOrange: "rgba(249, 147, 1,1)",
  homeYellowOrange: "rgba(247, 188, 0,1)",
  homePurple: "rgba(84, 23, 67,1)",
};
export const Disclaimer = () => {
  const appContext = useContext(AppContext);
  const { horizontalPadding } = appContext;
  return (
    <Grid
      item
      container
      xs={12}
      style={{
        paddingTop: SECTION_PADDING_TOP + 100,
        paddingBottom: 56,
        flex: 1,
        backgroundColor: themeColors.white,
        paddingLeft: horizontalPadding,
        paddingRight: horizontalPadding,
      }}
      // justifyContent={mediumScreen ? "space-evenly" : "space-evenly"}
    >
      <h3
        style={{
          color: mainColors.white,
        }}
      >
        Cancellation & Rescheduling Policy
      </h3>
      <p
        style={{
          color: mainColors.white,
          marginTop: 24,
          marginLeft: 0,
        }}
        className="footerP"
      >
        All deposits associated with events are non-refundable . Events must be
        canceled within 30 days to avoid being charged the remaining amount to
        total 100% of the service charge. In the event the DJ terminates the
        agreement within the time set above the DJ shall reimburse the deposit
        to purchaser.
      </p>
      <div
        style={{
          height: 1,
          width: "100%",
          marginTop: 32,
          backgroundColor: mainColors.black,
        }}
      ></div>
      <h3 style={{ marginTop: 24, color: mainColors.white }}>
        ©2024 RefreshKC, LLC. All rights reserved.
      </h3>
    </Grid>
  );
};

export default Disclaimer;
