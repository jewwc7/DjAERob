import React, { EventHandler, useState } from "react";
import {
  useLoginMutation,
  Login,
  useAccountMutation,
  useAccountBalanceMutation,
} from "../apiSlice";
import { useAppSelector } from "../redux/hooks";

const Account = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const userAccount = useAppSelector((state) => state.user.account);

  const [getAccountNumber, {}] = useAccountMutation();
  const [getAccountBalance, {}] = useAccountBalanceMutation();

  const handleAccountNumberChange = (event) => {
    setAccountNumber(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await getAccountNumber({
      accountNumber: Number(900220),
    }).unwrap();

    if (response[0].id) {
      console.log({ response });
      console.warn("Fetching balance with id", response[0].id);
      const balanceResponse = await getAccountBalance(response[0].id);
      console.log("balance", { balanceResponse });
    }

    setAccountNumber("");
  };

  console.log({ userAccount });

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {userAccount && (
        <div>
          <h1 style={{ color: "black" }}>Balance</h1>
          <p style={{ color: "black", textAlign: "center" }}>
            ${userAccount.balance ?? 0}
          </p>
        </div>
      )}
      <form onSubmit={handleSubmit} style={{ marginTop: 100 }}>
        <div>
          <label htmlFor="username">Account Number</label>
          <input
            type="text"
            id="username"
            value={accountNumber}
            onChange={handleAccountNumberChange}
          />
        </div>
        <button type="submit">Get balance</button>
      </form>
    </div>
  );
};

export default Account;
