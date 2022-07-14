import React, { useState, useContext, useEffect } from "react";
//import Modal from "./Modal";
import { Grid, Button, IconButton, Paper, Hidden } from "@mui/material";
//import { makeStyles } from "@mui/material/styles";
import DehazeIcon from "@mui/icons-material/Dehaze";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useNavigate,
} from "react-router-dom";
import AppContext from "./context/appContext";
import MyButton from "./CustomButton";
import logo from "./Photography/HTherapylogo.png";
const themeColors = {
  homeRed: "rgba(161, 8, 59,1)",
  homeDarkOrange: "rgba(247, 188, 0,1)",
  homeLightOrange: "rgba(249, 147, 1,1)",
  homeYellowOrange: "rgba(247, 188, 0,1)",
  homePurple: "rgba(84, 23, 67,1)",
};
const TopNav = ({ mobile, tablet, desktop, laptop }) => {
  const [stickyClass, setStickyClass] = useState("");
  const appContext = useContext(AppContext);
  const { setOutline, outline } = appContext;
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const navigate = useNavigate();

  function stickNavbar() {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      //use a percent of the windowheight so can work on mobile
      windowHeight > 150 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  }

  function scrollToSection(fromTopDistance) {
    setTimeout(() => {
      window.scrollTo({
        top: fromTopDistance || 0,
        behavior: "smooth",
      });
    }, 500);
  }

  const navButtonArr = [
    {
      title: "Home",
      sectionPostion: 0,
      isScroll: true,
    },
    {
      title: "Services",
      sectionPostion: 0,
      page: "services",
      specialHighlight: "pink",
    },
    {
      title: "Therapist",
      sectionPostion: 1800,
      isScroll: true,
    },
    {
      title: "Connect",
      sectionPostion: 2400, //document.body.scrollHeight, //this is how you scroll to bottom of page, used timeout so the new pages coordinates can be used(w/o timeout will scroll as far as prior page went down)
      isScroll: true,
    },
  ];

  function displayNavBtns() {
    return navButtonArr.map((btn, index) => {
      const { title, sectionPostion, isScroll, page, specialHighlight } = btn;
      function highlightGoToPage() {
        if (!page) return alert("Need to input a page to navigate to");
        setOutline(index);
        navigate(`/${page}`);
        scrollToSection(sectionPostion);
      }

      function highlightScroll() {
        setOutline(index);
        navigate(`/`);

        scrollToSection(sectionPostion);
      }
      //  const borderShown = outline
      return (
        <MyButton
          children={title}
          buttonStyle={{
            backgroundColor: "rgba(255,255,255,0)",
            border:
              outline === index
                ? `1px solid ${
                    specialHighlight || themeColors.homeYellowOrange
                  }`
                : `none`,
            boxShadow: "none",
          }}
          textStyle={{
            color:
              outline === index
                ? specialHighlight || themeColors.homeYellowOrange
                : themeColors.homeRed,
            fontWeight: "200",
          }}
          onClick={isScroll ? highlightScroll : highlightGoToPage}
        />
      );
    });
  }
  return (
    <Grid
      item
      container
      style={{
        height: 80,
        alignItems: "center",
        backgroundColor: "#fff",
        paddingLeft: 8,
        paddingRight: 8,
        zIndex: 100,
      }}
      className={`${stickyClass}`}
    >
      <Grid
        item
        container
        // justifyContent={smallScreen ? "space-between" : "center"}
        alignItems="center"
        direction={"row"}
        style={{
          height: "80%",
          //  paddingLeft: 8,
          cursor: "pointer",
          // backgroundColor: "blue",
        }}
        xs={12}
        md={6}
        onClick={() => {
          navigate(`/`);
          setTimeout(() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }, 500);
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{ height: "100%", width: "100%" }}
        ></img>
      </Grid>
      <Hidden mdDown>
        <Grid
          item
          style={{
            paddingRight: "5%",
            justifyContent: "flex-end",
            display: "flex",
          }}
          xs={6}
        >
          <Hidden smDown>{displayNavBtns()}</Hidden>
          <Hidden mdUp>
            <IconButton>
              <DehazeIcon />
            </IconButton>
          </Hidden>
        </Grid>
      </Hidden>
    </Grid>
  );
};

const styles = {
  mainContainer: {
    width: "100%",
    height: 100,
    display: "flex",
    //   backgroundColor: '#3f0d12',
    //  backgroundImage: 'linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)',
    backgroundColor: "rgba(250,250,50,1)",
    // flex: 1,
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
};

export default TopNav;
