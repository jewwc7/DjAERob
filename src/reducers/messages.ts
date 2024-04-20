import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { apiSlice } from "../apiSlice";

interface InitialState {
  isVisible: boolean;
  message: string | null;
  type: "fail" | "success" | null;
}
const initialState: InitialState = {
  isVisible: false,
  message: null,
  type: null,
};

const messageReducer = createSlice({
  name: "userReducer",
  initialState: initialState,

  reducers: {
    hideMessage: (): InitialState => {
      return {
        ...initialState,
      };
    },
  },
  extraReducers(builder) {
    ///need these so when get funds is successful, the action.payload
    //from RTK query gets sent here
    builder.addMatcher(
      isAnyOf(
        apiSlice.endpoints.login.matchRejected,
        apiSlice.endpoints.account.matchRejected
      ),
      (state, action) => {
        action.payload?.data as {
          error: { code: string; message: string };
          success: false;
        };
        console.log(action);
        return {
          isVisible: true,
          message: action.payload?.data?.error.message ?? "Failed",
          type: "fail",
        };
      }
    );
    builder.addMatcher(
      isAnyOf(
        apiSlice.endpoints.login.matchFulfilled,
        apiSlice.endpoints.account.matchFulfilled
      ),
      (state, action) => {
        return {
          isVisible: true,
          message: "Success!",
          type: "success",
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
export default messageReducer.reducer;
export const { hideMessage } = messageReducer.actions;
