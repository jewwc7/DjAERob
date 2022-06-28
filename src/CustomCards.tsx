import React from "react";
import MyButton from "./CustomButton";

interface CardProps {
  onClick: () => void;
  children?: React.ReactNode;
  containerStyle?: Object;
  textStyle?: Object;
  image?: string;
  imgStyle?: Object;
  priceText: React.ReactNode;
  title?: string;
}

const MyCard: React.FC<CardProps> = ({
  onClick,
  children,
  containerStyle,
  textStyle,
  image,
  priceText,
  imgStyle,
  title,
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        flexDirection: "column",
        ...defaultCardStyle,
        ...containerStyle,
      }}
    >
      <img
        src={image}
        alt="Input"
        style={{
          ...defaultCardImgStyle,
          ...imgStyle,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          alignItems: "center",
          paddingTop: 16,
        }}
      >
        <p
          style={{
            ...styles.defaultPriceText,
            ...textStyle,
          }}
        >
          {priceText}
        </p>
        <h2
          style={{
            ...styles.defaultTitle,
            ...textStyle,
          }}
        >
          {title}
        </h2>
      </div>
      <div
        style={{ display: "flex", paddingTop: 32, justifyContent: "center" }}
      >
        <MyButton
          children="Book Now"
          onClick={() => console.log("clicked")}
          buttonStyle={{ backgroundColor: webColors.homePurple }}
        />
      </div>
    </div>
  );
};

const webColors = {
  homeRed: "rgba(161, 8, 59,1)",
  homeDarkOrange: "rgba(247, 188, 0,1)",
  homeLightOrange: "rgba(249, 147, 1,1)",
  homeYellowOrange: "rgba(247, 188, 0,1)",
  homePurple: "rgba(84, 23, 67,1)",
};
const defaultCardStyle = {
  height: "100%",
  width: "100%",
  backgroundColor: "#fff",
  paddingBottom: 16,
};

const defaultCardImgStyle = {
  // height: 50,
  width: "100%",
};

const styles = {
  defaultPriceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: webColors.homePurple,
  },
  defaultTitle: {
    color: webColors.homeLightOrange,
    fontWeight: "400",
  },
};
const defaultButtonTextStyle = {
  fontSize: 20,
  color: "#ffffff",
};

export default MyCard;
