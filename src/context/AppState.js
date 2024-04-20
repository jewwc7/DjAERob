import React, { useState } from "react";
import AppContext from "./appContext";

import { useMediaQuery, createTheme } from "@mui/material";
import { navButtonArr } from "../TopNav";

export function scrollToSection(fromTopDistance) {
  setTimeout(() => {
    window.scrollTo({
      top: fromTopDistance || 0,
      behavior: "smooth",
    });
  }, 500);
}

//State File. Import context File and Return ContextFile.Provider
//in value attribute pass any data you want to be accessed
//Don't forget to put/extropolate {props.children}
//this component will wrapped around the entire main app
//main app can access anything in the value by initializing myContext= useContext(MYcontext)
//very important! Have to intialize the context within child components. Not the main app, if I do the main app, intial value of context will be provided all the time
//review onenote for the above
const AppState = (props) => {
  const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        largeTablet: 840, //haldSCreen too
        laptop: 1024,
        desktop: 1200,
      },
    },
  });
  const mobile = useMediaQuery(theme.breakpoints.down("tablet"), {}); //xs, sm
  const tablet = useMediaQuery(theme.breakpoints.down("largeTablet"), {}); //md
  const largeTablet = useMediaQuery(theme.breakpoints.down("laptop"), {}); //md
  const laptop = useMediaQuery(theme.breakpoints.down("desktop"), {}); //large
  const desktop = useMediaQuery(theme.breakpoints.up("desktop"), {}); //xl
  const horizontalPadding = mobile ? 20 : 80;

  const connectSection = navButtonArr[navButtonArr.length - 1];

  const [modalVisible, setModalVisible] = useState(false);
  const [outline, setOutline] = useState({ home: true });
  const [commentText, setCommentText] = useState("");

  //add state for showing/hiding modal
  return (
    <AppContext.Provider
      value={{
        modalVisible,
        setModalVisible,
        mobile,
        tablet,
        largeTablet,
        laptop,
        desktop,
        outline,
        setOutline,
        horizontalPadding,
        scrollToSection,
        connectSection,
        setCommentText,
        commentText,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
