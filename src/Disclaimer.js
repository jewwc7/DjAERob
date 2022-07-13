import React from "react";
import { Grid } from "@mui/material";

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
        All deposits associated with an appointment are non-refundable and
        non-transferable. The appointment must be canceled prior to the 24 hour
        cancellation deadline to avoid being charged the remaining amount to
        total 100% of the service charge. All no call/no shows and appointments
        canceled within the policy window are subject to being charged. In order
        to reschedule a new appointment a new non-refundable and
        non-transferable $25.00 deposit will be due upon booking.
      </p>
      <div
        style={{
          height: 1,
          width: "100%",
          marginTop: 32,
          backgroundColor: "#fff",
        }}
      ></div>
      <h3 style={{ marginTop: 24, color: "#fff" }}>
        ©2022 Home Therapy, LLC. All rights reserved.
      </h3>
    </Grid>
  );
};

export default Disclaimer;
