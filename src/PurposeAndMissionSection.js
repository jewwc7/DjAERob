import React, { useContext } from "react";
import "./App.css";
import { Grid } from "@mui/material";
import AppContext from "./context/appContext";
import { useNavigate } from "react-router-dom";
import purposeImage from "./Photos/purpose.jpeg";
import { NavPages } from "./utils/navigation";
import MyButton from "./CustomButton";
import { SECTION_PADDING_TOP } from "./constants";

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
        paddingTop: SECTION_PADDING_TOP,
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
              }}
            >
              About Me
            </h1>
            <p
              style={{
                marginTop: 4,
                width: mobile ? "100%" : "80%",
                fontSize: 20,
              }}
            >
              DJ Amazingly Entertaining Rob is a DJ who needs no introduction.
              Hailing from Kansas City, Missouri, he brings over a decade of
              experience in curating sounds and hosting events of all kinds.
              Being a versatile DJ, A.E. Rob is your go-to for any occasion.
              <br></br>
              <br></br>
              Whether you’re looking for a club DJ who keeps the crowd moving,
              the perfect segue from ceremony to reception, or a mobile DJ who
              brings the vibes wherever you are – he’s your DJ! As he proudly
              proclaims, “When you need music, think of me – THINK A.E.” Trust
              his expertise to elevate your event and keep your guests moving
              all day and all night!
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
