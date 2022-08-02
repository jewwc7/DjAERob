import React, { useContext, useState } from "react";

import "./App.css";
import MyButton from "./CustomButton";

import { Grid } from "@mui/material";
import AppContext from "./context/appContext";
import AppState from "./context/AppState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./Services";
import { mainColors } from "./themecolors";
import ContactMe from "./ContactMe";
import Reviews from "./Reviews";
import Disclaimer from "./Disclaimer";
import ServicesPage from "./Servicespage";
import TopNav from "./TopNav";
import heroImage from "./WebPhotos/HeaderImageB&W.png";
import purposeImg from "./WebPhotos/OurPurpose.png";
import missionImg from "./WebPhotos/OurMission.png";
import Keala from "./Photography/Keala.jpg";

const Section_Margin_TOP = 64;
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
    <Routes>
      <Route path="/" element={<HomeScreen />}></Route>
      <Route path="/services" element={<ServicesPage />}></Route>
    </Routes>
  );
}

const HomeScreen = () => {
  const appContext = useContext(AppContext);
  const { mobile, horizontalPadding } = appContext;
  return (
    <Grid style={{ flex: 1, position: "relative" }}>
      <TopNav />
      <div style={{ height: 500 }}>
        <Hero />
      </div>
      <div
        style={{
          flex: 1,
        }}
      >
        <div
          style={{
            flex: 1,
            paddingLeft: horizontalPadding,
            paddingRight: horizontalPadding,
          }}
        >
          <PurposeAndMission />
        </div>
        <div
          style={{
            flex: 1,
            backgroundColor: mainColors.homeRed,
            marginTop: Section_Margin_TOP,
          }}
        >
          <Services />
        </div>
        <div
          style={{
            flex: 1,
            marginTop: 32,
            paddingLeft: horizontalPadding,
            paddingRight: horizontalPadding,
          }}
        >
          <MeetKEKE />
        </div>
        <div
          style={{
            flex: 1,
            backgroundColor: mainColors.homeRed,
            marginTop: Section_Margin_TOP,
          }}
        >
          <ContactMe />
        </div>
        <div
          style={{
            flex: 1,
            marginTop: Section_Margin_TOP,
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
      </div>
    </Grid>
  );
};
const Hero = () => {
  // const appContext = useContext(AppContext);
  //  const { lineHeight, afterHeaderMargin, smallScreen } = appContext;

  function bookMassage() {
    window.open("https://pocketsuite.io/book/keke-jones");
  }
  return (
    <Grid
      item
      container
      xs={12}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
        backgroundRepeat: "no-repeat",
        // backgroundSize: "cover", //100% looks good on desktop, make tenary if want to change
        height: "100%",
        width: "100%",
        position: "relative",
        //  filter: "grayscale(100%)",
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
            <MyButton children="BOOK NOW" onClick={bookMassage} hoverEffect />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

const PurposeAndMission = () => {
  const appContext = useContext(AppContext);
  const { mobile } = appContext;
  return (
    <Grid
      item
      container
      xs={12}
      style={{
        paddingTop: 24,
        flex: 1,
      }}
      // justifyContent={mediumScreen ? "space-evenly" : "space-evenly"}
    >
      <Grid
        name="purpose div"
        item
        container
        xs={12}
        alignItems="flex-start"
        justifyContent={"space-between"}
        style={{ height: "40%", paddingTop: 24 }}
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
        <Grid item container xs={12} md={5} justifyContent={"flex-start"}>
          <Grid item container>
            <h1
              className="purple-header"
              style={{ textAlign: mobile ? "center" : "left" }}
            >
              Purpose
            </h1>
            <p
              style={{
                color: "#151515",
                marginTop: 4,
                width: mobile ? "100%" : "80%",
                textAlign: mobile ? "center" : "left",
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
        justifyContent={"space-between"}
        alignItems="flex-start"
        style={{ height: "40%", marginTop: 60 }}
      >
        <Grid item container xs={12} md={5} style={{}}>
          <Grid item container>
            <h1
              className="purple-header "
              style={{ textAlign: mobile ? "center" : "left" }}
            >
              Mission
            </h1>
            <p
              style={{
                color: "#151515",
                marginTop: 4,
                width: mobile ? "100%" : "80%",
                textAlign: mobile ? "center" : "left",
              }}
            >
              Fostering an environment that stimulates one's mental, physical
              and spiritual growth and overall well-being through the healing
              property of touch.
            </p>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5} style={{ height: "100%" }}>
          <img
            src={missionImg}
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
  const appContext = useContext(AppContext);
  const { tablet, mobile } = appContext;
  return (
    <Grid item container style={{ paddingTop: 32, paddingBottom: 32 }}>
      <Grid
        item
        container
        xs={12}
        md={6}
        alignItems="flex-start"
        justifyContent={"space-between"}
      >
        <img src={Keala} alt="owner" height="400" width="400" />
      </Grid>
      <Grid item container xs={12} md={6} style={{}}>
        <Grid item container>
          <h1
            className="purple-header"
            style={{ textAlign: mobile ? "center" : "left" }}
          >
            Meet Keke
          </h1>
          <p
            style={{
              color: "#151515",
              marginTop: 4,
              width: mobile ? "100%" : "80%",
              textAlign: mobile ? "center" : "left",
            }}
          >
            As a former collegiate athlete and having a love for the human body
            as a whole - KeKe received a Bachelors of Science in Exercise
            Science from the University of Tampa in 2015. In time, realizing and
            fostering her ability to nurture in conjunction with her natural
            passion of helping others - She became a Licensed Massage Therapist
            on December 12th, 2020. She combines the best techniques including
            Relaxation and Deep Tissue massage to create a comforting and
            therapeutic treatment that is unique and customized for each
            person's own individual healing experience.
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AppWrapper;
