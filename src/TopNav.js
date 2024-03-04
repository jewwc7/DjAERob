import React, { useState, useContext, useEffect } from "react";
import { Grid, IconButton, Hidden } from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { useNavigate } from "react-router-dom";
import AppContext from "./context/appContext";
import Modal from "./Modal";
import MyButton from "./CustomButton";
import logo from "./Photos/logo.png";
import { scrollToSection } from "./context/AppState";
import { mainColors } from "./themecolors";
import { NavPages } from "./utils/navigation";
const themeColors = {
  homeRed: "rgba(161, 8, 59,1)",
  homeDarkOrange: "rgba(247, 188, 0,1)",
  homeLightOrange: "rgba(249, 147, 1,1)",
  homeYellowOrange: "rgba(247, 188, 0,1)",
  homePurple: "rgba(84, 23, 67,1)",
};

export const navButtonArr = [
  {
    title: "Home",
    sectionPostion: 0,
    isScroll: true,
    specialHighlight: themeColors.homePurple,
  },
  {
    title: "Gallery",
    sectionPostion: 0,
    isScroll: false,
    specialHighlight: themeColors.homePurple,
    page: NavPages.gallery,
  },
  {
    title: "Contact",
    sectionPostion: 2400, //document.body.scrollHeight, //this is how you scroll to bottom of page, used timeout so the new pages coordinates can be used(w/o timeout will scroll as far as prior page went down)
    isScroll: false,
    specialHighlight: themeColors.homePurple,
    page: NavPages.contact,
  },
];

const TopNav = () => {
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

  function displayNavBtns() {
    return navButtonArr.map((btn, index) => {
      const { title, sectionPostion, isScroll, page } = btn;
      function highlightGoToPage() {
        if (!page) return alert("Need to input a page to navigate to");
        setOutline(index);
        navigate(page);
        scrollToSection(sectionPostion);
      }

      function highlightScroll() {
        setOutline(index);
        navigate(`/`);

        scrollToSection(sectionPostion);
      }

      return (
        <MyButton
          children={title}
          hoverEffect
          backgroundColor={mainColors.black}
          hoveredTextColor={mainColors.black}
          buttonStyle={{
            backgroundColor: "rgba(255,255,255,0)",
            border:
              outline === index ? `1px solid ${mainColors.black}` : `none`,
            boxShadow: "none",
          }}
          textStyle={{
            color: mainColors.white,
            fontWeight: "200",
          }}
          onClick={isScroll ? highlightScroll : highlightGoToPage}
          key={btn.title}
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
        backgroundColor: mainColors.black,
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
        <img src={logo} alt="logo" style={{ height: 60, width: 100 }}></img>
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
          <IconButton onClick={() => setModalVisible(!modalVisible)}>
            <DehazeIcon style={{ color: mainColors.white }} />
          </IconButton>
        </Hidden>
      </Grid>
      <Modal />
    </Grid>
  );
};

export default TopNav;
