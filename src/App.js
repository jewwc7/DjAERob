import React, { useContext } from "react";

import "./App.css";
import MyButton from "./CustomButton";
import TopNav from "./TopNav";
import hero from "./Photos/hero.jpg";
import purposeImg from "./Photos/purposeImg.jpg";

import {
  Grid,
  Button,
  IconButton,
  Paper,
  Hidden,
  Container,
  useMediaQuery,
  useTheme,
  createTheme,
  Icon,
  Slide,
  Fade,
} from "@mui/material";
import AppContext from "./context/appContext";
import AppState from "./context/AppState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./Services";
import { mainColors } from "./themecolors";
import ContactMe from "./ContactMe";
import Reviews from "./Reviews";
import Disclaimer from "./Disclaimer";
import ServicesPage from "./Servicespage";

function AppWrapper() {
  return (
    <AppState>
      <Router>
        <App />
      </Router>
    </AppState>
  );
}

function App() {
  return (
    <div className="App">
      <div style={{ height: 500 }}>
        <Hero />
      </div>
      <div
        style={{
          flex: 1,
        }}
      >
        <div style={{ flex: 1, paddingLeft: 80, paddingRight: 80 }}>
          <PurposeAndMission />
        </div>
        <div
          style={{
            flex: 1,
            backgroundColor: mainColors.homeRed,
            marginTop: 32,
          }}
        >
          <Services />
        </div>
        <div
          style={{
            flex: 1,
            marginTop: 32,
          }}
        >
          <MeetKEKE />
        </div>
        <div
          style={{
            flex: 1,
            backgroundColor: mainColors.homeRed,
            marginTop: 32,
            paddingLeft: 80,
            paddingRight: 80,
          }}
        >
          <ContactMe />
        </div>
        <div
          style={{
            flex: 1,
            marginTop: 32,
            paddingLeft: 80,
            paddingRight: 80,
          }}
        >
          <Reviews />
        </div>
        <div
          style={{
            flex: 1,
          }}
        >
          <Disclaimer />
        </div>
        <div
          style={{
            flex: 1,
            marginTop: 60,
          }}
        >
          <ServicesPage />
        </div>
      </div>
    </div>
  );
}

const Hero = () => {
  // const appContext = useContext(AppContext);
  //  const { lineHeight, afterHeaderMargin, smallScreen } = appContext;
  return (
    <Grid
      item
      container
      xs={12}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", //100% looks good on desktop, make tenary if want to change
        height: "100%",
        width: "100%",
        position: "relative",
      }}
      justify="center"
      alignItems="center"
    >
      <Grid
        item
        container
        xs={12}
        //   md={6}
        justify="center"
        alignItems="center"
      >
        <Grid
          xs={12}
          item
          container
          direction="column"
          alignItems="center"
          style={{}}
        >
          <h1
            style={{
              color: "white",
              fontSize: 48,
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            Mobile Massage Therapist
          </h1>
          <p
            style={{
              color: "white",
              marginTop: 24,
              textAlign: "center",
            }}
          >
            A better mind, body and spirit - One day at a time
          </p>
          <div style={{ marginTop: 32 }}>
            <MyButton
              children="Book Now"
              onClick={() => console.log("clicked")}
            />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

const PurposeAndMission = () => {
  const appContext = useContext(AppContext);
  const {
    lineHeight,
    afterHeaderMargin,
    smallScreen,
    mediumScreen,
    largeScreen,
    horizonalPadding,
    e,
  } = appContext;
  return (
    <Grid
      item
      container
      xs={12}
      style={{
        marginTop: 24,
        flex: 1,
      }}
      // justifyContent={mediumScreen ? "space-evenly" : "space-evenly"}
    >
      <Grid
        name="purpose div"
        item
        container
        xs={12}
        justifyContent={mediumScreen ? "space-evenly" : "space-evenly"}
        alignItems="center"
        style={{ height: "40%" }}
      >
        <Grid item xs={12} md={5} style={{ height: "100%" }}>
          <img
            src={purposeImg}
            // className="dualpics"
            alt="massage"
            style={{
              width: "100%",
              height: "100%",
              // height: mediumScreen ? "85%" : "55%",
            }}
          />
        </Grid>
        <Grid item container xs={12} md={5} style={{}}>
          <Grid item container>
            <h1
              style={{
                color: "#151515",
                lineHeight: 1.2,
              }}
            >
              Our Purpose
            </h1>
            <p
              style={{
                color: "#151515",
                marginTop: 4,
                width: "80%",
              }}
            >
              The "Home" is a physical and mental space not just where you
              reside physically, but mentally as well. In these spaces - one
              looks for peace, love, serenity and security. A secure place to be
              open and received. With H.O.M.E Therapy you will be treated with
              the utmost respect and attention.
            </p>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        name="mission div"
        item
        container
        xs={12}
        justifyContent={mediumScreen ? "space-evenly" : "space-evenly"}
        alignItems="flex-end"
        style={{ height: "40%", marginTop: 60 }}
      >
        <Grid item container xs={12} md={5} style={{}}>
          <Grid item container>
            <h1
              style={{
                color: "#151515",
                lineHeight: 1.2,
                textAlign: "left",
              }}
            >
              Our Mission
            </h1>
            <p
              style={{
                color: "#151515",
                marginTop: 4,
                width: "80%",
              }}
            >
              The "Home" is a physical and mental space not just where you
              reside physically, but mentally as well. In these spaces - one
              looks for peace, love, serenity and security. A secure place to be
              open and received. With H.O.M.E Therapy you will be treated with
              the utmost respect and attention.
            </p>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5} style={{ height: "100%" }}>
          <img
            src={purposeImg}
            // className="dualpics"
            alt="massage"
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

const MeetKEKE = () => {
  return (
    <Grid item container style={{ paddingTop: 32, paddingBottom: 32 }}>
      <Grid
        item
        container
        xs={12}
        md={6}
        alignItems="center"
        justifyContent={"center"}
      >
        <img src={purposeImg} alt="owner" height="400" width="400" />
      </Grid>
      <Grid item container xs={12} md={6} style={{}}>
        <Grid item container>
          <h1
            style={{
              color: "#151515",
              lineHeight: 1.2,
            }}
          >
            Meet Keke
          </h1>
          <p
            style={{
              color: "#151515",
              marginTop: 4,
              width: "80%",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default AppWrapper;
