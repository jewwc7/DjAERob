import React, { EventHandler, useState } from "react";
import { useLoginMutation, Login, useAccountMutation } from "../apiSlice";

const LoginForm = () => {
  const [userData, setUserData] = useState<Login>({
    username: "",
    password: "",
  });

  const [login, { data, isSuccess, isError, isLoading, error }] =
    useLoginMutation();

  const [getAccountNumber, {}] = useAccountMutation();

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
    console.log({ response });
    setUserData({ username: "", password: "" });
  };

  async function doSOmethingElse(event) {
    event.preventDefault();

    const response = await getAccountNumber({ accountNumber: 900220 });
    console.log("accountNumber", { response });
  }

  return (
    <div>
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

      <form onSubmit={doSOmethingElse} style={{ marginTop: 100 }}>
        <div>
          <label htmlFor="username">Account Number</label>
          <input
            type="text"
            id="username"
            value={"placeholder"}
            //onChange={handleUsernameChange}
          />
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default LoginForm;
