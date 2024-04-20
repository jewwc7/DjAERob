import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { hideMessage } from "../reducers/messages";

export const Message = () => {
  const dispatch = useAppDispatch();

  const { isVisible, message, type } = useAppSelector(
    (state) => state.messages
  );
  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        dispatch(hideMessage());
      }, 2000);
    }
  }, [isVisible]);

  return (
    <div
      style={{
        height: 400,
        width: 400,
        visibility: isVisible ? "visible" : "hidden",
        position: "absolute",
        backgroundColor: type === "fail" ? "red" : "green",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <p> {message}</p>
    </div>
  );
};

export default Message;
