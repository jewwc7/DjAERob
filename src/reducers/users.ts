import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiSlice } from "../apiSlice";

interface InitialState {
  user: { username: string; userid: number; accountNumber?: number } | null;
  token: string | null;
}
const initialState: InitialState = {
  user: null,
  token: null,
};
const api = "";

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

    setFundViewing: (state, action: PayloadAction<EntireFundView | null>) => {
      return {
        ...state,
        fundViewing: action.payload,
      };
    },
    setTickerViewing: (
      state,
      action: PayloadAction<initialState["tickerViewing"]>
    ) => {
      return {
        ...state,
        tickerViewing: {
          ticker: action.payload.ticker,
          isVisible: action.payload.isVisible,
        },
      };
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
            username,
            userid,
          },
          token: action.payload.token,
        };
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.account.matchFulfilled,
      (state, action) => {
        console.log("account.matchFulfilled", { action });

        return {
          ...state,
        };
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
export default userReducer.reducer;
export const { setToken } = userReducer.actions;
