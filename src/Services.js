import React, { useContext } from "react";
import "./App.css";
import { Grid } from "@mui/material";
import AppContext from "./context/appContext";
import servicesImage from "./Photos/services.jpeg";
import ServiceCard, { Extras } from "./ServicesCards";
import { SECTION_PADDING_TOP } from "./constants";
import { extrasArr, serviceArr } from "./data";
import { mainColors } from "./themecolors";

const Services = () => {
  const appContext = useContext(AppContext);
  const { mobile } = appContext;

  return (
    <Grid
      item
      container
      xs={12}
      style={{
        paddingTop: SECTION_PADDING_TOP,
        flex: 1,
      }}
    >
      <Grid
        name="services"
        item
        container
        xs={12}
        alignItems="flex-start"
        justifyContent={"space-between"}
        style={{ height: "40%", paddingTop: 24 }}
      >
        <Grid item container xs={12} md={5} justifyContent={"flex-start"}>
          <Grid item>
            <h1
              style={{
                textAlign: mobile ? "center" : "left",
                marginTop: mobile ? 32 : 0,
              }}
            >
              Services
            </h1>
          </Grid>

          <Grid item container xs={12} spacing={1} style={{ marginTop: 16 }}>
            {serviceArr.map((service) => {
              return <ServiceCard service={service} key={service.title} />;
            })}
          </Grid>
          <Grid item container xs={12} spacing={1} style={{ marginTop: 16 }}>
            <h2
              style={{ color: mainColors.white, marginTop: 8, marginBottom: 8 }}
            >
              Items can be added to your EXPERIENCE!!!!!
            </h2>
            {extrasArr.map((extra) => {
              return <Extras extra={extra} key={extra.title} />;
            })}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          style={{ height: "100%", marginTop: mobile ? 32 : 0 }}
        >
          <img
            src={servicesImage}
            // className="dualpics"
            alt="the dj"
            style={{
              width: "100%",
              height: "100%",
              // height: mediumScreen ? "85%" : "55%",
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
