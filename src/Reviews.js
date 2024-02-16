import React, { useContext, useState } from "react";
import AppContext from "./context/appContext";
import { Grid, Hidden } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MobileReviews from "./MobileReviews";
import contactImage from "./Photos/contact.jpeg";
import { mainColors } from "./themecolors";
import { NavPages } from "./utils/navigation";
import { useNavigate } from "react-router-dom";
import MyButton from "./CustomButton";
import { reviewArr } from "./reviewsText";
import { SECTION_PADDING_TOP } from "./constants";

export const Reviews = () => {
  const appContext = useContext(AppContext);
  const { mobile } = appContext;
  const navigate = useNavigate();

  function navigateToContact() {
    navigate(NavPages.contact);
  }

  const [currentReview, setCurrentReview] = useState(0);
  function goToNext() {
    const lengthOfReviews = reviewArr.length - 1;
    if (currentReview === lengthOfReviews) return setCurrentReview(0);
    else setCurrentReview(currentReview + 1);
  }
  function goBack() {
    if (currentReview === 0) return;
    else setCurrentReview(currentReview - 1);
  }
  function showReviews() {
    return (
      <div style={{ minHeight: 120, marginTop: 16 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <ArrowBackIosNewIcon
            sx={{
              color: mainColors.gold,
              fontSize: 20,
              cursor: "pointer",
            }}
            onClick={goBack}
          />
          <div
            style={{
              paddingLeft: 16,
              paddingRight: 16,
              width: "70%",
            }}
          >
            <p style={{ textAlign: "center" }} className="reviewP">
              {reviewArr[currentReview].body}
            </p>
            <p
              style={{
                textAlign: "center",
                fontStyle: "italic",
              }}
              className="reviewP"
            >
              -- {reviewArr[currentReview].reviewer}
            </p>
          </div>
          <ArrowForwardIosIcon
            sx={{
              color: mainColors.gold,
              fontSize: 20,
              cursor: "pointer",
            }}
            onClick={goToNext}
          />
        </div>
      </div>
    );
  }
  return (
    <Grid
      item
      container
      xs={12}
      style={{
        paddingTop: SECTION_PADDING_TOP,
        justifyContent: "space-between",
        flex: 1,
      }}
      alignItems="flex-start"
    >
      <Hidden mdDown>
        <Grid item xs={12} md={5} style={{ height: 600 }}>
          <img
            src={contactImage}
            // className="dualpics"
            alt="the dj"
            style={{
              width: "100%",
              height: "100%",
              // height: mediumScreen ? "85%" : "55%",
            }}
          />
        </Grid>
        <Grid
          item
          container
          style={{ height: "80%" }}
          xs={12}
          md={5}
          justifyContent={"flex-start"}
          direction={"column"}
        >
          <Grid item style={{}}>
            <h1
              style={{
                textAlign: mobile ? "center" : "left",
                marginTop: mobile ? 32 : 0,
              }}
            >
              Reviews
            </h1>
          </Grid>
          {showReviews()}
          <MyButton
            onClick={navigateToContact}
            //   buttonStyle={{ marginTop: 80 }}
          />
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <MobileReviews />
      </Hidden>
    </Grid>
  );
};

export default Reviews;
