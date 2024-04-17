import React, { useContext } from "react";
import "./App.css";
import { Grid, Hidden } from "@mui/material";
import AppContext from "./context/appContext";
import AppState, { scrollToSection } from "./context/AppState";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { mainColors } from "./themecolors";
import ContactMe from "./ContactMe";
import Reviews, { SmallScreenReviews } from "./Reviews";
import Disclaimer from "./Disclaimer";
import TopNav from "./TopNav";
import heroImage from "./Photos/header.jpeg";
import Services from "./Services";
import { NavPages } from "./utils/navigation";
import PurposeAndMission from "./PurposeAndMissionSection";
import Gallery from "./Gallery";
import MediaSection from "./MediaSection";

//TODO
//Delete WEbPhotos and photography FOlder
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
    <div>
      <TopNav />
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path={`${NavPages.contact}`} element={<ContactMe />}></Route>
        <Route path={`${NavPages.gallery}`} element={<Gallery />}></Route>
      </Routes>
    </div>
  );
}

const HomeScreen = () => {
  const appContext = useContext(AppContext);
  const { horizontalPadding } = appContext;
  return (
    <Grid style={{ flex: 1, position: "relative", maxWidth: "100%" }}>
      <div style={{ flex: 1 }}>
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
            backgroundColor: mainColors.black,
          }}
        >
          <PurposeAndMission />
        </div>
        <div
          style={{
            flex: 1,
            backgroundColor: mainColors.black,
            paddingLeft: horizontalPadding,
            paddingRight: horizontalPadding,
          }}
        >
          <Services />
        </div>

        {/* when I add back, the reviews needs to go back to backgroundColor:black */}
        <div
          style={{
            flex: 1,
            paddingTop: 32,
            paddingLeft: horizontalPadding,
            paddingRight: horizontalPadding,
            backgroundColor: mainColors.black,
          }}
        >
          <MediaSection />
        </div>
        <div
          style={{
            flex: 1,
            paddingLeft: horizontalPadding,
            paddingRight: horizontalPadding,
            backgroundColor: mainColors.black,
          }}
        >
          <Reviews />
        </div>
        <div
          style={{
            flex: 1,
            backgroundColor: mainColors.black,
          }}
        >
          <Disclaimer />
        </div>
      </div>
    </Grid>
  );
};

const Hero = () => {
  return (
    <Grid
      item
      container
      xs={12}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, 0.1)), url(${heroImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover", //100% looks good on desktop, make tenary if want to change
        // backgroundSize: `100% auto`,
        height: "100vh",
        //  width: "100%",
        position: "relative",
        //  filter: "grayscale(100%)",
      }}
      justify="center"
      alignItems="center"
    >
      {/* <Grid
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
      </Grid> */}
    </Grid>
  );
};

export default AppWrapper;
