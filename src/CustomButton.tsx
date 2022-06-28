import React from "react";

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
  buttonStyle?: Object;
  textStyle?: Object;
}

const MyButton: React.FC<ButtonProps> = ({
  onClick,
  children,
  buttonStyle,
  textStyle,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        flexDirection: "row",
        ...defaultButtonStyle,
        ...buttonStyle,
      }}
    >
      <p
        style={{
          ...defaultButtonTextStyle,
          ...textStyle,
        }}
      >
        {children}
      </p>
    </button>
  );
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
  width: 140,
  padding: 16,
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "1px 10px 13px -3px rgba(0,0,0,0.26)",
  cursor: "pointer",
};

const defaultButtonTextStyle = {
  fontSize: 20,
  color: "#ffffff",
};

export default MyButton;
