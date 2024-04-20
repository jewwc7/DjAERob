import React, { useContext } from "react";
import "./App.css";
import {
  Grid,
  Grow,
  ImageList,
  ImageListItem,
  Fab,
  Hidden,
} from "@mui/material";
import AppContext from "./context/appContext";
import { mainColors } from "./themecolors";
import { galleryImages } from "./Photos/gallery/gallery";
import Carousel from "./Carousel";
import MyButton from "./CustomButton";
import { useNavigate } from "react-router-dom";
import { NavPages } from "./utils/navigation";
import { HEADER_BODY_MARGIN } from "./constants";

const Gallery = ({}) => {
  const navigate = useNavigate();

  const appContext = useContext(AppContext);
  //@ts-ignore : don't have context typed
  const { mobile } = appContext;

  const photos = [...galleryImages];
  function navigateToContact() {
    navigate(NavPages.contact);
  }

  return (
    <Grid
      container
      style={{
        backgroundColor: mainColors.black,
        paddingLeft: 16,
        paddingRight: 16,
        height: mobile ? "100%" : "90vh",
      }}
    >
      <Grid
        item
        container
        xs={12}
        alignItems="center"
        justifyContent={mobile ? "center" : "space-between"}
        direction={"row"}
        style={{ height: "15%" }}
      >
        <h1>Gallery</h1>
        {!mobile && (
          <MyButton children="Book now" onClick={navigateToContact} />
        )}
      </Grid>
      <Grid
        item
        container
        xs={12}
        style={{
          height: "85%",
        }}
      >
        <Hidden mdDown>
          <Carousel images={photos} />
        </Hidden>
        <Hidden mdUp>
          <ImageGallery />
        </Hidden>
      </Grid>
      {/* <Fab
        variant="extended"
        style={{
          position: "fixed",
          left: mobile ? "68%" : "88%",
          top: "85%",
          backgroundColor: mainColors.gold,
          height: 80,
          width: 156,
        }}
      >
        <p className="cta-text" style={{ color: mainColors.black }}>
          Book Event
        </p>
      </Fab> */}
    </Grid>
  );
};

const ImageGallery = ({}) => {
  const appContext = useContext(AppContext);
  //@ts-ignore : don;t have the context typed
  const { mobile, tablet } = appContext;
  const photos = [...galleryImages];
  const navigate = useNavigate();

  function navigateToContact() {
    navigate(NavPages.contact);
  }

  const fadeProps = [
    { appear: 1500, enter: 2000, exit: 0 },
    { appear: 1800, enter: 2300, exit: 0 },
    { appear: 2100, enter: 2600, exit: 0 },
    { appear: 2400, enter: 2900, exit: 0 },
    { appear: 2700, enter: 3200, exit: 0 },
    { appear: 3000, enter: 3500, exit: 0 },
    { appear: 3300, enter: 3800, exit: 0 },
    { appear: 3600, enter: 4100, exit: 0 },
    { appear: 3900, enter: 4400, exit: 0 },
  ];

  return (
    <Grid container style={{ marginTop: HEADER_BODY_MARGIN }}>
      <ImageList
        gap={10}
        // rowHeight={"auto"}
        component="div"
        cols={mobile ? 1 : tablet ? 2 : 3}
      >
        {photos.map((item, index) => {
          return (
            <Grow
              in={true}
              timeout={fadeProps[index] ?? 0}
              key={index.toString()}
            >
              <ImageListItem
                key={index}
                //  cols={index === lastImage ? 1 : 1}
                //  rows={Pindex === 0 ? 2 : null}
              >
                <img src={item} alt="name" style={{ objectFit: "contain" }} />
              </ImageListItem>
            </Grow>
          );
        })}
      </ImageList>
      <MyButton
        onClick={navigateToContact}
        buttonStyle={{ position: "fixed", bottom: 20, right: 20 }} //FAB
      />
    </Grid>
  );
};

export default Gallery;
