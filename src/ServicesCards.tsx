import React, { useContext } from "react";
import { mainColors } from "./themecolors";
import { Grid, Paper } from "@mui/material";
import { Services } from "./data";
import MyButton from "./CustomButton";
import { useNavigate } from "react-router-dom";
import { NavPages } from "./utils/navigation";
import AppContext from "./context/appContext";

interface Props {
  service: Services;
  buttonWithBackground?: boolean;
}

export const ServiceCard: React.FC<Props> = ({
  service,
  buttonWithBackground = false,
}) => {
  const { services, title, price, timeAvailable } = service;
  const navigate = useNavigate();
  const appContext = useContext(AppContext);
  //@ts-ignore
  const { setCommentText, mobile } = appContext;
  //@ts-ignore

  function navigateToContact() {
    setCommentText(title);
    navigate(NavPages.contact);
  }

  return (
    <Grid item sm={"auto"} xs={12} style={{}}>
      <Paper
        className="nav-btns"
        style={{
          height: mobile ? "auto" : 300,
          maxWidth: mobile ? "100%" : 250,
          display: "flex",
          justifyContent: "space-between",
          padding: 16,
          flexDirection: "column",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2 style={{ color: mainColors.black, textAlign: "center" }}>
              {title}
            </h2>
            <h4 style={{ color: mainColors.black, textAlign: "center" }}>
              {timeAvailable} hours
            </h4>
          </div>

          <div style={{ marginTop: 8, display: "flex" }}>
            <ul style={{ paddingLeft: 8 }}>
              {services.map((service) => {
                return (
                  <li
                    style={{ lineHeight: 1.4, fontWeight: 400 }}
                    key={service}
                  >
                    {service}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <MyButton
            //@ts-ignore
            onClick={navigateToContact}
            buttonStyle={{
              marginTop: 24,
            }}
            outlined={buttonWithBackground}
            outlineStyleObj={{ borderColor: mainColors.gold, borderWidth: 2 }}
          />
        </div>
      </Paper>
    </Grid>
  );
};

export default ServiceCard;
