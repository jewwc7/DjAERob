import React, { useContext } from "react";
import "./App.css";
import { Grid } from "@mui/material";
import AppContext from "./context/appContext";
import { useNavigate } from "react-router-dom";

import servicesImage from "./Photos/services.jpeg";
import ServiceCard from "./ServicesCards";
import MyButton from "./CustomButton";
import { NavPages } from "./utils/navigation";
import { SECTION_PADDING_TOP } from "./constants";

const servicesArr = [
  "Professional DJ/MC packages",
  "Photo Packages",
  "Uplighting",
];

const Services = () => {
  const appContext = useContext(AppContext);
  const { mobile } = appContext;
  const navigate = useNavigate();

  function navigateToContact() {
    navigate(NavPages.contact);
  }
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
            {servicesArr.map((service) => {
              return <ServiceCard title={service} />;
            })}
          </Grid>
          <div
            style={{
              display: "flex",
              justifyContent: mobile ? "center" : undefined,
              width: "100%",
            }}
          >
            <MyButton
              onClick={navigateToContact}
              buttonStyle={{
                marginTop: 32,
              }}
            />
          </div>
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
