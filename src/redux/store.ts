import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/users";
import messageReducer from "../reducers/messages";
import { apiSlice } from "../apiSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    messages: messageReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});

export default store;

//add new reducers here as I create them. Sign up and betting pages

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
