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
    getAssetById: builder.query<CoinMarketResponse, string>({
      query: (id: string) => ({
        url: `coins/markets`,
        params: {
          vs_currency: "usd",
          ids: id,
        },
      }),
      transformResponse: (response: CoinMarketResponse[]) => response[0],
      providesTags: (result, error, id) => [{ type: "Assets", id }],
    }),
  }),

  overrideExisting: false,
});

// this endpoint does not return total elements or current pages , like normal paginated endpoints

export const {
  useGetAssetsQuery,
  useGetAssetByIdQuery,
  useLazyGetAssetByIdQuery,
} = assetsApi;
