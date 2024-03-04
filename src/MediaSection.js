import React, { useContext } from "react";
import "./App.css";
import { Grid } from "@mui/material";
import AppContext from "./context/appContext";
import mediaImage from "./Photos/media.jpeg";
import { mainColors } from "./themecolors";
import { Facebook, Insta, PlayButton } from "./MediaIcons";

const MediaSection = () => {
  const appContext = useContext(AppContext);
  const { mobile } = appContext;
  return (
    <Grid
      item
      container
      xs={12}
      style={{
        flex: 1,
      }}
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
            src={mediaImage}
            alt="the dj"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Grid>
        <Grid item container xs={12} md={5} justifyContent={"flex-start"}>
          <Grid
            item
            container
            xs={12}
            style={{
              justifyContent: mobile ? "center" : "left",
            }}
          >
            <h1
              style={{
                textAlign: mobile ? "center" : "left",
                marginTop: mobile ? 32 : 0,
              }}
            >
              Media
            </h1>
            {/* <div style={{ flexDirection: "row" }}>
              <iframe
                width="100%"
                height="200" //default is 300
                scrolling="no"
                frameborder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1610328087&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
              <div style={soundsCloudstyle.div}>
                <a
                  href="https://soundcloud.com/rodwave"
                  title="Rod Wave"
                  target="_blank"
                  style={soundsCloudstyle.a}
                >
                  Rod Wave
                </a>{" "}
                ·{" "}
                <a
                  href="https://soundcloud.com/rodwave/track-13"
                  title="Great Gatsby"
                  target="_blank"
                  style={soundsCloudstyle.a}
                >
                  Great Gatsby
                </a>
              </div>

              <iframe
                width="100%"
                height="200" //default is 300
                scrolling="no"
                frameborder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1610328087&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
              <div style={soundsCloudstyle.div}>
                <a
                  href="https://soundcloud.com/rodwave"
                  title="Rod Wave"
                  target="_blank"
                  style={soundsCloudstyle.a}
                >
                  Rod Wave
                </a>{" "}
                ·{" "}
                <a
                  href="https://soundcloud.com/rodwave/track-13"
                  title="Great Gatsby"
                  target="_blank"
                  style={soundsCloudstyle.a}
                >
                  Great Gatsby
                </a>
              </div>
            </div> */}
            <Grid
              item
              container
              xs={12}
              style={{
                marginTop: 16,
                justifyContent: mobile ? "center" : "left",
              }}
            >
              <div>
                <iframe
                  width="auto"
                  height="315"
                  src="https://www.youtube.com/embed/9QqTRdjv14k"
                ></iframe>
              </div>
            </Grid>
            <Grid
              item
              container
              xs={12}
              style={{
                marginTop: 16,
                justifyContent: mobile ? "center" : "left",
                flexDirection: mobile ? "inherit" : "column",
              }}
            >
              <p>Follow me: @DJAERob </p>
              <Grid
                item
                container
                xs={12}
                md={8}
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid
                  item
                  xs={6}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <a
                    href="https://www.instagram.com/djaerob"
                    style={styles.link}
                  >
                    <li style={styles.icons}>
                      <Insta className="social-icons" alt="instagram profile" />
                      Instagram
                    </li>
                  </a>
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: 8,
                  }}
                >
                  <a
                    href="https://facebook.com/dj.a.e.rob/"
                    style={styles.link}
                  >
                    <li style={styles.icons}>
                      <Facebook />
                      Facebook
                    </li>
                  </a>
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: 8,
                  }}
                >
                  <a
                    href="https://www.mixcloud.com/djaerob/"
                    style={styles.link}
                  >
                    <li style={styles.icons}>
                      <PlayButton />
                      Mixcloud
                    </li>
                  </a>
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: 8,
                  }}
                >
                  <a href="https://linktr.ee/Djaerob" style={styles.link}>
                    <li style={styles.icons}>
                      <PlayButton />
                      LinkTree
                    </li>
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const soundsCloudstyle = {
  div: {
    fontSize: 10,
    color: "#cccccc",
    lineBreak: "anywhere",
    wordBreak: "normal",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    // fontFamily:
    //   "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
    fontWeight: 100,
  },
  a: {
    color: "#cccccc",
    textDecoration: "none",
  },
};

const styles = {
  icons: {
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    marginTop: 4,
    color: mainColors.white,
  },
};

export default MediaSection;
