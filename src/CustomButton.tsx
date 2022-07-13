import React, { useState } from "react";

interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string;
  width: string;
  buttonStyle: object;
}

interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  buttonStyle?: object;
  textStyle?: Object;
  hoverEffect?: Boolean | false;
  raised?: Boolean | undefined;
  backgroundColor?: string; //used for hover effect,
}

const MyButton: React.FC<ButtonProps> = ({
  onClick,
  children,
  buttonStyle,
  textStyle,
  raised,
  hoverEffect,
  backgroundColor,
}) => {
  const raisedObj = raised ? dropShadow : {};
  const [hovered, setHovered] = useState({});
  const [textHoveredColor, setTextHoveredColor] = useState({});
  function buttonIsHovered() {
    if (!hoverEffect) return;
    setHovered({
      backgroundColor: "white",
      border: `2px solid ${
        backgroundColor || defaultButtonStyle.backgroundColor
      }`,
    });
    setTextHoveredColor({
      color: backgroundColor || defaultButtonStyle.backgroundColor,
    });
  }

  function buttonIsNotHovered() {
    setHovered({});
    setTextHoveredColor({});
  }
  return (
    <button
      onClick={onClick}
      style={{
        flexDirection: "row",
        ...defaultButtonStyle,
        ...buttonStyle,
        ...raisedObj,
        ...hovered,
      }}
      onMouseOver={buttonIsHovered}
      onMouseOut={buttonIsNotHovered}
    >
      <p
        style={{
          ...defaultButtonTextStyle,
          ...textStyle,
          ...textHoveredColor,
        }}
      >
        {children}
      </p>
    </button>
  );
};

const dropShadow = {
  boxShadow: "1px 10px 13px -3px rgba(0,0,0,0.26)",
};
const buttonColors = {
  homeRed: "rgba(161, 8, 59,1)",
  homeDarkOrange: "rgba(247, 188, 0,1)",
  homeLightOrange: "rgba(249, 147, 1,1)",
  homeYellowOrange: "rgba(247, 188, 0,1)",
  homePurple: "rgba(84, 23, 67,1)",
};
const defaultButtonStyle = {
  display: "flex",
  backgroundColor: buttonColors.homeLightOrange,
  border: "none",
  borderRadius: "none",
  height: 50,
  width: 156,
  padding: 16,
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};

const defaultButtonTextStyle = {
  fontSize: 20,
  color: "#ffffff",
};

export default MyButton;
