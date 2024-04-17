import React, { useContext, useState } from "react";
import AppContext from "./context/appContext";
import { Grid, Hidden, Paper } from "@mui/material";
import { mainColors } from "./themecolors";
import { reviewArr } from "./reviewsText";
import { HEADER_BODY_MARGIN, SECTION_PADDING_TOP } from "./constants";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import MyButton from "./CustomButton";

const paperPadding = 16;

const Reviews = () => {
  const appContext = useContext(AppContext);
  const { mobile } = appContext;
  return (
    <Grid
      container
      item
      xs={12}
      md={12}
      style={{ paddingTop: SECTION_PADDING_TOP }}
    >
      <Grid
        item
        container
        xs={12}
        style={{
          justifyContent: mobile ? "center" : "left",
          marginBottom: HEADER_BODY_MARGIN,
        }}
      >
        <h1
          style={{
            textAlign: mobile ? "center" : "left",
            marginTop: mobile ? 32 : 0,
          }}
        >
          Reviews
        </h1>
      </Grid>

      <Hidden mdDown>
        <Grid
          item
          container
          xs={12}
          justifyContent="center"
          direction="row"
          spacing={2}
        >
          {reviewArr.map((review) => {
            const { body, reviewer, event } = review;
            return (
              <Grid item xs={4}>
                <Paper
                  elevation={4}
                  style={{
                    padding: paperPadding,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p
                    style={{
                      color: "rgba(100,100,100,1)",
                      textAlign: "left",
                    }}
                  >
                    {body}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: 16,
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <p style={{ color: mainColors.black }}> {reviewer}</p>
                      <h4 style={{ color: mainColors.black }}>{event}</h4>
                    </div>
                  </div>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <SmallScreenReviews />
      </Hidden>
    </Grid>
  );
};

export const SmallScreenReviews = ({}) => {
  const appContext = useContext(AppContext);
  const { mobile } = appContext;
  const [reviewNum, setReviewNum] = useState(0);

  function randomNum() {
    if (reviewNum + 1 === reviewArr.length) {
      setReviewNum(0);
      return;
    }
    setReviewNum(reviewNum + 1);
  }

  return (
    <Grid item container xs={12} justifyContent="center">
      <Grid item xs={10}>
        <Paper
          elevation={4}
          style={{
            padding: paperPadding,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <SwitchTransition mode="out-in">
            <CSSTransition
              classNames="review"
              key={reviewArr[reviewNum].body}
              //this is needed if timeout not provided. If timeout provided I beleive it will run the timeouts instead of the css
              addEndListener={(node, done) => {
                node.addEventListener("transitionend", done, false);
              }}
            >
              <p
                style={{
                  color: "rgba(100,100,100,1)",
                  textAlign: "left",
                  //   textIndent: "-.5em",
                }}
              >
                {reviewArr[reviewNum].body}
              </p>
            </CSSTransition>
          </SwitchTransition>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 16,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ color: mainColors.black }}>
                {reviewArr[reviewNum].reviewer}
              </p>
              <h4> {reviewArr[reviewNum].event}</h4>
            </div>
            <div style={{ marginLeft: 48 }}>
              <MyButton
                children={"Next"}
                onClick={randomNum}
                outlined
                buttonStyle={{ width: 50, height: 50 }}
              />
            </div>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default Reviews;
