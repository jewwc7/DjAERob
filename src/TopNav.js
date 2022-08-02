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
import Modal from "./Modal";
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
  const {
    setOutline,
    outline,
    modalVisible,
    setModalVisible,
    horizontalPadding,
  } = appContext;
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
      specialHighlight: themeColors.homePurple,
    },
    {
      title: "Services",
      sectionPostion: 0,
      page: "services",
      specialHighlight: themeColors.homePurple,
    },
    {
      title: "Therapist",
      sectionPostion: 1800,
      isScroll: true,
      specialHighlight: themeColors.homePurple,
    },
    {
      title: "Connect",
      sectionPostion: 2400, //document.body.scrollHeight, //this is how you scroll to bottom of page, used timeout so the new pages coordinates can be used(w/o timeout will scroll as far as prior page went down)
      isScroll: true,
      specialHighlight: themeColors.homePurple,
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
          hoverEffect
          backgroundColor={themeColors.homePurple}
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
      justifyContent={"space-between"}
      style={{
        height: 80,
        alignItems: "center",
        backgroundColor: "#fff",
        paddingLeft: horizontalPadding,
        paddingRight: horizontalPadding,
        zIndex: 100,
      }}
      className={`${stickyClass}`}
    >
      <Grid
        item
        container
        alignItems="center"
        direction={"row"}
        style={{
          height: "80%",
          //  paddingLeft: 8,
          cursor: "pointer",
          // backgroundColor: "blue",
        }}
        xs={6}
        md={4}
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
      <Grid
        item
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
        xs={6}
      >
        <Hidden mdDown>{displayNavBtns()}</Hidden>
        <Hidden mdUp>
          <IconButton>
            <DehazeIcon onClick={() => setModalVisible(!modalVisible)} />
          </IconButton>
        </Hidden>
      </Grid>
      <Modal />
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
