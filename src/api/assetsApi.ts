import { api } from "../store/api";
import { AssetsResponse } from "../types/interfaces";

export const assetsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAssets: builder.query<AssetsResponse, { limit?: number }>({
      query: ({ limit = 20 }) => `assets?limit=${limit}`,
      providesTags: ["Assets"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetAssetsQuery } = assetsApi;
