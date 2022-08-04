import React, { useContext, useState } from "react";
import AppContext from "./context/appContext";

import MyButton from "./CustomButton";
import {
  Grid,
  Button,
  IconButton,
  Paper,
  Hidden,
  Container,
  useMediaQuery,
  useTheme,
  createTheme,
  Icon,
  Slide,
  Fade,
  TextField,
} from "@mui/material";
import MyCard from "./CustomCards";
import purposeImg from "./Photos/purposeImg.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const themeColors = {
  homeRed: "rgba(161, 8, 59,1)",
  homeDarkOrange: "rgba(247, 188, 0,1)",
  homeLightOrange: "rgba(249, 147, 1,1)",
  homeYellowOrange: "rgba(247, 188, 0,1)",
  homePurple: "rgba(84, 23, 67,1)",
};
export const ContactMe = () => {
  const appContext = useContext(AppContext);
  const { horizontalPadding, mobile } = appContext;

  const [dataSent, setDataSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    console.log(e.target);
    //  setQuote(e.target.value);
    updateFormData(e);
  };

  ///////////Form submission functions////////////////////////////////////////////////////

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  function handleSubmit(e) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "jobappMark", ...formData }),
    })
      .then(() => console.log("Success"))
      .catch((error) => alert(error));
    e.preventDefault();
  }
  /////////////////////////////////////////////////////////////////////////////////////////

  function updateFormData(e) {
    console.log(formData);
    console.log(e.target.name + "what looking at");
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
  }

  return (
    <Grid
      item
      container
      xs={12}
      style={{
        paddingTop: 24,
        paddingBottom: 56,
        paddingLeft: horizontalPadding,
        paddingRight: horizontalPadding,
        flex: 1,
      }}
      // justifyContent={mediumScreen ? "space-evenly" : "space-evenly"}
    >
      <Grid item container xs={12} md={6}>
        <Grid item container xs={12}>
          <h1 style={{ textAlign: mobile ? "center" : "left" }}>
            Lets Connect
          </h1>
        </Grid>
        <Grid item container xs={12} spacing={4} style={{ marginTop: 16 }}>
          <Grid item container xs={12} spacing={4}>
            <Grid item xs={12} md={9}>
              <TextField
                id="Name"
                label="Name"
                name="name"
                variant="filled"
                style={{ backgroundColor: "white", width: "100%" }}
                onChange={updateFormData}
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <TextField
                id="outlined-basic"
                onChange={updateFormData}
                label="Email"
                name="email"
                variant="filled"
                style={{ backgroundColor: "white", width: "100%" }}
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
              />
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <MyButton children="Submit" hoverEffect onClick={submitData} />
          </Grid>
        </Grid>
      </Grid>

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
          //  flexDirection={mobile ? "column-reverse" : "row"}
        >
          <Grid item xs={12} style={{ display: "flex", alignItems: "center" }}>
            <InstagramIcon
              className="social-icons"
              alt="instagram profile"
              onClick={() =>
                window.open("https://www.instagram.com/h.o.m.etherapy/?hl=en")
              }
            />
            <p className="footerP">@h.o.m.etherapy</p>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ display: "flex", alignItems: "center", marginTop: 8 }}
          >
            <EmailIcon className="social-icons" alt="email profile" />
            <p className="footerP">homestudiotherapy@gmail.com</p>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ display: "flex", alignItems: "center", marginTop: 8 }}
          >
            <PhoneIcon className="social-icons" alt="phone number" />
            <p className="footerP">816-692-2747</p>
          </Grid>
        </Grid>
        <Grid item container xs={12}></Grid>
      </Grid>
    </Grid>
  );
};

const Footer = ({ tablet, mobile }) => {
  const btnHieght = tablet ? "100%" : "100%";
  return (
    <Grid
      item
      container
      xs={12}
      md={6}
      style={{ height: 160 }}
      alignItems="center"
    >
      <Grid
        item
        container
        xs={12}
        md={8}
        justifyContent="space-evenly"
        alignItems="center"
        //  flexDirection={mobile ? "column-reverse" : "row"}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <InstagramIcon
            className="social-icons"
            alt="instagram profile"
            onClick={() => window.open("https://www.twitter.com/Smarket_King/")}
          />
          <p>@h.o.m.etherapy</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <EmailIcon
            className="social-icons"
            alt="email profile"
            onClick={() => window.open("https://www.twitter.com/Smarket_King/")}
          />
          <p>homestudiotherapy@gmail.com</p>
        </div>
      </Grid>
      <Grid item container xs={12}></Grid>
    </Grid>
  );
};

export default ContactMe;
