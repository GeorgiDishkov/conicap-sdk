import { api } from "../store/api";
import { CoinMarketResponse } from "../types/interfaces";

export const assetsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAssets: builder.query<
      CoinMarketResponse[],
      {
        vs_currency?: string;
        order?: string;
        per_page?: number;
        page?: number;
        sparkline?: boolean;
      }
    >({
      query: ({
        vs_currency = "usd",
        order = "market_cap_desc",
        per_page = 10,
        page = 1,
        sparkline = false,
      }) => ({
        url: "coins/markets",
        params: {
          vs_currency,
          order,
          per_page,
          page,
          sparkline,
        },
      }),
      providesTags: ["Assets"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetAssetsQuery } = assetsApi;
