import React, { useState, useContext } from "react";
import MyButton from "./CustomButton";
import { Slide } from "@mui/material";
import AppContext from "./context/appContext";
import { mainColors } from "./themecolors";

const fadeProps = [
  { appear: 1500, enter: 1000, exit: 1300 },
  { appear: 1800, enter: 1300, exit: 1600 },
];

const Carousel = ({ images }: { images: string[] }) => {
  const appContext = useContext(AppContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [transIn, setTransIn] = useState(true);
  const [transOut, setTransOut] = useState(false);

  const doTransition = (button: "prev" | "next") => {
    return new Promise((resolve, reject) => {
      // This is the executor function that takes two parameters: resolve and reject.
      setTransOut(true);
      setTransIn(false);
      // Simulate an asynchronous operation (e.g., fetching data from an API)
      setTimeout(() => {
        if (button === "prev") {
          const prevIndex = (currentIndex - 2 + images.length) % images.length;
          setCurrentIndex(prevIndex);
        }
        if (button === "next") {
          const prevIndex = (currentIndex - 2 + images.length) % images.length;
          setCurrentIndex(prevIndex);
        }
      }, 1500); //give the pics some time to load

      setTimeout(() => {
        setTransIn(true);
        setTransOut(false);
        resolve(`go`);
      }, 2000); // Simulating a delay of 2 seconds

      return;
    });
  };

  const goToNextSlide = () => {
    doTransition("next");
  };

  const goToPrevSlide = () => {
    doTransition("prev");
  };

  const buttonStyle = {
    top: "50%",
    // transform: "translateY(-50%)",
    //  backgroundColor: "transparent",
    // border: "none",
    cursor: "pointer",
    // backgroundColor: undefined,
  };

  const prevButtonStyle = { ...buttonStyle, left: 0 };
  const nextButtonStyle = { ...buttonStyle, right: 0 };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          width: "100%",
          height: "85%",
          //   alignItems: "center",
        }}
      >
        <Slide
          in={transIn}
          timeout={fadeProps[0]}
          exit={transOut}
          direction="left"
        >
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            style={{ width: "50%", height: "100%", objectFit: "cover" }}
            //objectFit:'contain'
          />
        </Slide>

        <Slide
          in={transIn}
          timeout={fadeProps[1]}
          exit={transOut}
          direction="left"
        >
          <img
            src={images[currentIndex + 1]}
            alt={`Slide ${currentIndex + 2}`}
            style={{ width: "50%", height: "100%", objectFit: "cover" }}
          />
        </Slide>
      </div>

      <div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "15%",
        }}
      >
        <MyButton
          buttonStyle={prevButtonStyle}
          onClick={goToPrevSlide}
          children={"Previous"}
          outlined={true}
          textStyle={{ color: mainColors.white }}
        />
        <MyButton
          buttonStyle={nextButtonStyle}
          onClick={goToNextSlide}
          children={"Next"}
          outlined={true}
          textStyle={{ color: mainColors.white }}
        />
      </div>
    </div>
  );
};

export default Carousel;
