// src/features/coins/coinsApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Coin } from "../types/interfaces";

export const coinsApi = createApi({
  reducerPath: "coinsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pro-api.coingecko.com/api/v3",
    prepareHeaders: (headers, { getState }) => {
      // headers.set('x-cg-pro-api-key', 'YOUR_API_KEY_HERE');
      return headers;
    },
  }),
  tagTypes: ["CoinsList"], // we can move this to config/constants file if grow too much or just for better structure
  endpoints: (builder) => ({
    getCoinsList: builder.query<
      Coin[],
      { include_platform?: boolean; status?: "active" | "inactive" }
    >({
      query: ({ include_platform = false, status = "active" } = {}) => ({
        url: "coins/list",
        params: {
          include_platform,
          status,
        },
      }),
      keepUnusedDataFor: 300,
      providesTags: ["CoinsList"],
    }),
  }),
});

export const { useGetCoinsListQuery } = coinsApi;
