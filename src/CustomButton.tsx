import React, { useState } from "react";
import { mainColors } from "./themecolors";
interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  buttonStyle?: object;
  textStyle?: Object;
  hoverEffect?: Boolean | false;
  raised?: Boolean | undefined;
  backgroundColor?: string; //used for hover effect,
  hoveredTextColor?: string; //used for hover effect,
}

const MyButton: React.FC<ButtonProps> = ({
  onClick,
  children,
  buttonStyle,
  textStyle,
  raised,
  hoverEffect,
  backgroundColor,
  hoveredTextColor,
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
      color: hoveredTextColor || defaultButtonTextStyle.color,
      //   borderColor: hoveredTextColor || defaultButtonTextStyle.color,
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
        {children ?? "Book event"}
      </p>
    </button>
  );
};

const dropShadow = {
  boxShadow: "1px 10px 13px -3px rgba(0,0,0,0.26)",
};

const defaultButtonStyle = {
  display: "flex",
  backgroundColor: mainColors.gold,
  border: "none",
  borderRadius: 10,
  height: 50,
  width: 156,
  padding: 16,
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};

const defaultButtonTextStyle = {
  fontSize: 20,
  color: mainColors.black,
  fontWeight: "bold",
};

export default MyButton;
