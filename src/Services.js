import React, { useContext } from "react";
import "./App.css";
import { Grid, Paper } from "@mui/material";
import AppContext from "./context/appContext";
import ServiceCard from "./ServicesCards";
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
        item
        container
        xs={12}
        md={12}
        style={{
          justifyContent: mobile ? "center" : "flex-start",
        }}
      >
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
          <Grid item container xs={12} sm={9} spacing={1}>
            {serviceArr.map((service, index) => {
              const lastCard = serviceArr.length - 1 === index;

              return (
                <ServiceCard
                  service={service}
                  key={service.title}
                  buttonWithBackground={!lastCard}
                />
              );
            })}
          </Grid>
          <Grid
            item
            container
            sm={2}
            xs={12}
            style={{
              marginTop: mobile ? 16 : 0,
              justifyContent: mobile ? "center" : undefined,
            }}
          >
            <Paper
              style={{
                height: mobile ? "auto" : 120,
                maxWidth: mobile ? "100%" : 250,
                display: "flex",
                padding: 16,
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h2 style={{ color: mainColors.black, textAlign: "center" }}>
                  Add-ons
                </h2>
                <ul style={{ paddingLeft: 8 }}>
                  {extrasArr.map((extra) => {
                    const { title, cost } = extra;

                    return (
                      <li
                        style={{ lineHeight: 1.4, fontWeight: 400 }}
                        key={title}
                      >
                        {title}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
