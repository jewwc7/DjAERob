import React, { EventHandler, useState } from "react";
import { useLoginMutation, Login } from "../apiSlice";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const LoginForm = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState<Login>({
    username: "",
    password: "",
  });

  const [login, { data, isSuccess, isError, isLoading, error }] =
    useLoginMutation();

  const handleUsernameChange = (event) => {
    setUserData({
      ...userData,
      username: event.target.value,
    });
  };

  const handlePasswordChange = (event) => {
    setUserData({
      ...userData,
      password: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await login(userData);
    console.log("Login form response:", { response });
    if (response) {
      console.warn("GOing to account component");
      navigate("/account");
    }
    setUserData({ username: "", password: "" });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={userData.username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={userData.password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
