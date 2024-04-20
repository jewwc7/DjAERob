import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setToken } from "./reducers/users";
import { RootState } from "./redux/store";

const baseUrl = "https://sandbox-api.camvio.cloud/aboss-api/rest/v1/";
export enum HttpMethods {
  get = "GET",
  post = "POST",
  put = "PUT",
  delete = "DELETE",
}

export enum EndPoints {
  login = "auth/login",
  accounts = "accounts?limit=20&searchType=ACCOUNTNUMBER&term",
  accountBalance = "account",
  payment = "account",
}

export interface Login {
  password: string;
  username: string;
}

export interface LoginSuccess {
  success: boolean; //true,
  userid: number;
  username: string;
  isTempPassword: boolean;
  token: string; //"QCWtU8Fb8FhJjXuwskx2XQzBYOtQWE//f8Y9f2QPiv3syd3YsV2onQ==",
  refreshToken: string; //"QCWtU8Fb8FhJjXuwskx2Xfq5vvYUKznhf8Y9f2QPiv3syd3YsV2onQ=="
}

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
    timeout: 5000,
    prepareHeaders: (headers, { getState }) => {
      const rootState = getState() as RootState;
      const { token } = rootState.user;
      if (token) {
        console.log({ token });
        headers.set("X-API-Token", token);
      }
      console.log(headers.forEach((h) => console.log({ h })));

      return headers;
    },
  }),

  endpoints: (builder) => ({
    login: builder.mutation<LoginSuccess, Login>({
      query: ({ password, username }) => {
        return {
          url: `${EndPoints.login}?j_password=${password}&j_username=${username}`,
          method: HttpMethods.get,
        };
      },
    }), //expected to be returned, parameters sent via body
    account: builder.mutation<any, { accountNumber: number }>({
      query: ({ accountNumber }) => ({
        url: `${EndPoints.accounts}=${accountNumber}`,
        method: HttpMethods.get,
      }),
    }),
    accountBalance: builder.query<any, { accountId: number }>({
      query: ({ accountId }) => ({
        url: `${EndPoints.accounts}/${accountId}/balance`,
        method: HttpMethods.get,
      }),
    }),
    payment: builder.mutation<any, { accountId: number }>({
      query: ({ accountId }) => ({
        url: `${EndPoints.payment}/${accountId}/payments/external`,
        method: HttpMethods.post,
      }),
    }),
  }),
});

export { apiSlice };
export const {
  useLoginMutation,
  useAccountBalanceQuery,
  useAccountMutation,
  usePaymentMutation,
} = apiSlice;
