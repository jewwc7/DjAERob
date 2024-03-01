import React from "react";
import { mainColors } from "./themecolors";
import { Grid, Paper } from "@mui/material";
import { Extra, Services } from "./data";
import MyButton from "./CustomButton";
import { useNavigate } from "react-router-dom";
import { NavPages } from "./utils/navigation";

interface Props {
  service: Services;
}

export const ServiceCard: React.FC<Props> = ({ service }) => {
  const { services, title, price, timeAvailable } = service;
  const navigate = useNavigate();

  function navigateToContact() {
    navigate(NavPages.contact);
  }

  return (
    <Grid item sm={6} xs={12} style={{}}>
      <Paper
        className="nav-btns"
        style={{
          minHeight: 100,
          display: "flex",
          alignItems: "center",
          padding: 16,
          flexDirection: "column",
        }}
      >
        <h2 style={{ color: mainColors.black }}>{title}</h2>
        <h4 style={{ color: mainColors.black }}>{timeAvailable} hours</h4>
        <div style={{ marginTop: 8 }}>
          <ul>
            {services.map((service) => {
              return <li key={service}>{service}</li>;
            })}
          </ul>
        </div>
        <MyButton
          onClick={navigateToContact}
          buttonStyle={{
            marginTop: 24,
          }}
        />
      </Paper>
    </Grid>
  );
};

interface ExtraProps {
  extra: Extra;
}
export const Extras: React.FC<ExtraProps> = ({ extra }) => {
  const { title, cost } = extra;
  return (
    <Grid item sm={6} xs={12} style={{}}>
      <Paper
        className="nav-btns"
        style={{
          minHeight: 30,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 16,
        }}
      >
        <li style={{ color: mainColors.black, listStyleType: "none" }}>
          {title}
        </li>
        <li style={{ color: mainColors.black }}>${cost}</li>
      </Paper>
    </Grid>
  );
};

export default ServiceCard;
