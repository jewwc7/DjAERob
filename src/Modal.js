import React, { useContext } from "react";
import AppContext from "./context/appContext";

import { Drawer, Button, List, ListItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NavPages } from "./utils/navigation";
const Modal = () => {
  const appContext = useContext(AppContext);
  const { modalVisible, setModalVisible } = appContext;
  const navigate = useNavigate();
  async function goToPage(page) {
    navigate(page);
  }
  return (
    <Drawer
      anchor="right"
      open={modalVisible}
      onClick={() => setModalVisible(false)}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="text"
          style={{ fontSize: 20, color: "#151515" }}
          onClick={() => setModalVisible(false)}
        >
          X
        </Button>
      </div>
      <div className={useStyles.modalContainer}>
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        ></div>
        <List style={{ paddingTop: "3%" }}>
          <ListItem
            button
            divider
            onClick={() => {
              goToPage("/");
              setTimeout(() => {
                window.scrollTo({
                  //this is how you scroll to bottom of page, used timeout so the new pages coordinates can be used(w/o timeout will scroll as far as prior page went down)
                  top: 0,
                  behavior: "smooth",
                });
              }, 200);
            }}
            style={styles.linkText}
          >
            {" "}
            Home
          </ListItem>
          <ListItem
            button
            divider
            onClick={() => {
              goToPage("/");
              setTimeout(() => {
                window.scrollTo({
                  //this is how you scroll to bottom of page, used timeout so the new pages coordinates can be used(w/o timeout will scroll as far as prior page went down)
                  top: 1600,
                  behavior: "smooth",
                });
              }, 200);
            }}
            style={styles.linkText}
          >
            {" "}
            Services
          </ListItem>
          <ListItem
            button
            divider
            onClick={() => {
              goToPage(NavPages.contact);

              setTimeout(() => {
                window.scrollTo({
                  //this is how you scroll to bottom of page, used timeout so the new pages coordinates can be used(w/o timeout will scroll as far as prior page went down)
                  // top: document.body.scrollHeight,
                  top: 4800,

                  behavior: "smooth",
                });
              }, 200);
            }}
            style={styles.linkText}
          >
            Contact
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

const useStyles = {
  modalContainer: {
    //had to put a div within the drawer becuase I could not get the actual drawer to change colors, this works though
    //backgroundColor:'rgba(27, 29, 30, 1)',
    backgroundColor: "rgba(210,210,210,.3)",
    height: "100%",
    width: 250,
  },
  listItem: {
    backgroundColor: "red",
    borderWidth: 5,
    borderColor: "blue",
  },
};

const styles = {
  linkText: {
    color: "rgba(70,70,70,1)",
    textDecoration: "none",
    fontSize: 20,
  },
};

export default Modal;
