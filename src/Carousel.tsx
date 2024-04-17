import React, { useState, useContext } from "react";
import MyButton from "./CustomButton";
import { Slide } from "@mui/material";
import AppContext from "./context/appContext";
import { mainColors } from "./themecolors";

const fadeProps = [
  { appear: 1500, enter: 600, exit: 600 },
  { appear: 1800, enter: 900, exit: 600 },
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
      }, 500); //give the pics some time to load, be less than the below timeout

      setTimeout(() => {
        setTransIn(true);
        setTransOut(false);
        resolve(`go`);
      }, 1000); // Simulating a delay of 1 seconds

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
        overflow: "hidden", //stops the slide animation from adding scrollbars. https://github.com/mui/material-ui/issues/13701#issuecomment-666366980
      }}
    >
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          width: "100%",
          height: "85%",
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
