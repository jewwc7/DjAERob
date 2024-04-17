import React, { useContext, useState } from "react";
import AppContext from "./context/appContext";

import MyButton from "./CustomButton";
import { Grid, TextField } from "@mui/material";
import { mainColors } from "./themecolors";
import { Facebook, Insta, PlayButton } from "./MediaIcons";

export const ContactMe = () => {
  const appContext = useContext(AppContext);
  const { horizontalPadding, mobile, commentText } = appContext;

  const [dataSent, setDataSent] = useState(false); //controls the sent modal
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: commentText ? `I am interested in the ${commentText} package` : "",
  });

  ///////////Form submission functions////////////////////////////////////////////////////

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  function handleSubmit(e) {
    if (!formData.name) {
      alert("Name is required");
      return;
    }
    if (!formData.email && !formData.phoneNumber) {
      alert("Phone number or email is required");
      return;
    }
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => setDataSent(true))
      .catch((error) => alert(error));
    e.preventDefault();
  }
  /////////////////////////////////////////////////////////////////////////////////////////

  function updateFormData(e) {
    const field = e.target.name; //get the fileds name so it can be udated in the state(makes it dynamic)
    setFormData((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  }
  function submitData(e) {
    handleSubmit(e);
    e.preventDefault();
    setFormData({
      //clear textfields
      name: "",
      phoneNumber: "",
      email: "",
      message: "",
    });
    setTimeout(() => {
      setDataSent(false);
    }, 3000);
  }

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: mainColors.black,
        position: "relative",
      }}
    >
      <Grid
        item
        container
        xs={12}
        style={{
          paddingTop: 24,
          paddingBottom: 114.5, //not sure why But I need this so no white at bottom
          paddingLeft: horizontalPadding,
          paddingRight: horizontalPadding,
          flex: 1,
          flexDirection: mobile ? "column-reverse" : "row",
        }}
        // justifyContent={mediumScreen ? "space-evenly" : "space-evenly"}
      >
        <Grid
          item
          container
          xs={12}
          md={6}
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            item
            container
            xs={12}
            md={8}
            justifyContent="flex-start"
            alignItems="center"
            style={{
              marginTop: mobile ? 32 : 0,
            }}
            //  flexDirection={mobile ? "column-reverse" : "row"}
          >
            <Grid item xs={6} style={{ display: "flex", alignItems: "center" }}>
              <a href="https://www.instagram.com/djaerob" style={styles.link}>
                <li style={styles.icons}>
                  <Insta
                    className="social-icons"
                    alt="instagram profile"
                    // onClick={() =>
                    //   window.open("https://www.instagram.com/h.o.m.etherapy/?hl=en")
                    // }
                  />
                  Instagram
                </li>
              </a>
            </Grid>
            <Grid
              item
              xs={6}
              style={{ display: "flex", alignItems: "center", marginTop: 8 }}
            >
              <a href="https://facebook.com/dj.a.e.rob/" style={styles.link}>
                <li style={styles.icons}>
                  <Facebook />
                  Facebook
                </li>
              </a>
            </Grid>
            <Grid
              item
              xs={6}
              style={{ display: "flex", alignItems: "center", marginTop: 8 }}
            >
              <a href="https://www.mixcloud.com/djaerob/" style={styles.link}>
                <li style={styles.icons}>
                  <PlayButton />
                  Mixcloud
                </li>
              </a>
            </Grid>
            <Grid
              item
              xs={6}
              style={{ display: "flex", alignItems: "center", marginTop: 8 }}
            >
              <a href="https://linktr.ee/Djaerob" style={styles.link}>
                <li style={styles.icons}>
                  <PlayButton />
                  LinkTree
                </li>
              </a>
            </Grid>
          </Grid>
          <Grid item container xs={12}></Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={6}
          style={{ marginTop: mobile ? 32 : 0 }}
        >
          <Grid item container xs={12}>
            <h1 style={{ textAlign: mobile ? "center" : "left" }}>
              Contact Me
            </h1>
          </Grid>
          <Grid item container xs={12} spacing={4} style={{ marginTop: 16 }}>
            <Grid item container xs={12} spacing={4}>
              <Grid item xs={12} md={9}>
                <TextField
                  autoComplete="name"
                  id="Name"
                  label="Name"
                  name="name"
                  variant="filled"
                  style={{ backgroundColor: "white", width: "100%" }}
                  onChange={updateFormData}
                  value={formData.name}
                />
              </Grid>
              <Grid item xs={12} md={9}>
                <TextField
                  autoComplete="mobile"
                  name="phoneNumber"
                  id="outlined-basic"
                  label="Phone Number"
                  variant="filled"
                  style={{ backgroundColor: "white", width: "100%" }}
                  onChange={(e) => {
                    if (e.target.value.toString().length <= 10) {
                      updateFormData(e);
                    } else {
                      return;
                    }
                  }}
                  //     onChange={updateFormData}
                  value={formData.phoneNumber}
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                    min: 10,
                    max: 10,
                  }}
                  type="number"
                />
              </Grid>
              <Grid item xs={12} md={9}>
                <TextField
                  autoComplete="email"
                  id="outlined-basic"
                  onChange={updateFormData}
                  label="Email"
                  name="email"
                  variant="filled"
                  style={{ backgroundColor: "white", width: "100%" }}
                  value={formData.email}
                />
              </Grid>
              <Grid item xs={12} md={9}>
                <TextField
                  multiline
                  rows={4}
                  name="message"
                  id="outlined-basic"
                  label="Comment"
                  variant="filled"
                  style={{ backgroundColor: "white", width: "100%" }}
                  onChange={updateFormData}
                  value={formData.message}
                />
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <MyButton
                children={dataSent ? "Sent!" : "Submit"}
                hoverEffect
                onClick={submitData}
                buttonStyle={
                  dataSent ? { backgroundColor: mainColors.white } : {}
                }
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const styles = {
  icons: {
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    marginTop: 4,
    color: mainColors.white,
  },
  link: {
    textDecoration: "none",
  },
};

export default ContactMe;
