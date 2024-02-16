import React, { useContext } from "react";
import "./App.css";
import { Grid } from "@mui/material";
import AppContext from "./context/appContext";
import { useNavigate } from "react-router-dom";
import purposeImage from "./Photos/purpose.jpeg";
import { NavPages } from "./utils/navigation";
import MyButton from "./CustomButton";
import { mainColors } from "./themecolors";

//TODO
//Delete WEbPhotos and photography FOlder

const PurposeAndMission = () => {
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
            src={purposeImage}
            // className="dualpics"
            alt="the dj"
            style={{
              width: "100%",
              height: "100%",
              // height: mediumScreen ? "85%" : "55%",
            }}
          />
        </Grid>
        <Grid item container xs={12} md={5} justifyContent={"flex-start"}>
          <Grid item>
            <h1
              style={{
                textAlign: mobile ? "center" : "left",
                marginTop: mobile ? 32 : 0,
                color: mainColors.black,
              }}
            >
              About Me
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
            <div
              style={{
                display: "flex",
                justifyContent: mobile ? "center" : undefined,
              }}
            >
              <MyButton
                onClick={navigateToContact}
                buttonStyle={{
                  marginTop: 24,
                }}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PurposeAndMission;
