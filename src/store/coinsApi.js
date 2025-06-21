"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetCoinsListQuery = exports.coinsApi = void 0;
// src/features/coins/coinsApi.ts
const react_1 = require("@reduxjs/toolkit/query/react");
exports.coinsApi = (0, react_1.createApi)({
    reducerPath: "coinsApi",
    baseQuery: (0, react_1.fetchBaseQuery)({
        baseUrl: "https://pro-api.coingecko.com/api/v3",
        prepareHeaders: (headers, { getState }) => {
            // headers.set('x-cg-pro-api-key', 'YOUR_API_KEY_HERE');
            return headers;
        },
    }),
    tagTypes: ["CoinsList"], // we can move this to config/constants file if grow too much or just for better structure
    endpoints: (builder) => ({
        getCoinsList: builder.query({
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
exports.useGetCoinsListQuery = exports.coinsApi.useGetCoinsListQuery;
