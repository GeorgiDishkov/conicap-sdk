import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiTags } from "../constants/apiTags";

export const api = createApi({
  reducerPath: "restAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coingecko.com/api/v3",
  }),
  tagTypes: apiTags,
  endpoints: () => ({}),
});
