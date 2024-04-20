import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiSlice } from "../apiSlice";
import Account from "../components/Account";

export interface Account {
  accountTerm: string;
  accountType: string;
  autoPay: boolean;
  billingAddress: string;
  createdDate: Date;
  distributionMethods: string[];
  id: number;
  name: string;
  number: number;
  status: string;
  tierLevel: number;
  balance?: number;
}
interface InitialState {
  user: {
    username: string;
    userid: number;
  } | null;
  account: Account | null;
  token: string | null;
}
const initialState: InitialState = {
  user: null,
  token: null,
  account: null,
};

const userReducer = createSlice({
  name: "userReducer",
  initialState: initialState,

  reducers: {
    reset: () => {
      return {
        ...initialState,
      };
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      return state;
    },
  },
  extraReducers(builder) {
    ///need these so when get funds is successful, the action.payload
    //from RTK query gets sent here
    builder.addMatcher(
      apiSlice.endpoints.login.matchFulfilled,
      (state, action) => {
        console.log({ action });
        const { username, userid } = action.payload;
        return {
          ...state,
          user: {
            ...state.user,
            username,
            userid,
          },
          token: action.payload.token,
        };
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.account.matchFulfilled,
      (state, action): InitialState => {
        console.log("account.matchFulfilled", { action });
        return {
          ...state,
          account: action.payload[0],
        };
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.accountBalance.matchFulfilled,
      (state, action): InitialState => {
        console.log("accountBalance.matchFulfilled", { action });
        if (state.account) {
          return {
            ...state,
            account: {
              ...state.account,
              balance: action.payload.balance,
            },
          };
        } else return state;
      }
    );
  },
});

//
//TODO:
//figure out where to add this middleware to catch all sucess falses
// middleware: (getDefaultMiddleware) =>
// getDefaultMiddleware().concat((api) => async (next) => {
//   try {
//     const result = await next(api);
//     // Check if the response has success: false
//     if ('success' in result && result.success === false) {
//       // Throw an error with the error response
//       throw new Error((result as ErrorResponse).error);
//     }
//     return result;
//   } catch (error) {
//     // Handle any other errors
//     console.error('API Error:', error.message);
//     throw error;
//   }
// }),

// Accounts {
//   accountTerm: "RESIDENTIAL";
//   accountType: "RESIDENTIAL";
//   autoPay: true;
//   billingAddress: "149 S. Barrington Ave, #707, Los Angeles, California 90049";
//   createdDate: "2024-04-11 18:13:19";
//   distributionMethods: ["Email"];
//   id: 49113;
//   name: "ReactDeveloper Interview";
//   number: 900220;
//   status: "Active";
//   tierLevel: 0;
// }
export default userReducer.reducer;
export const { setToken } = userReducer.actions;
