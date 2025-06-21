"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetAssetsQuery = exports.assetsApi = void 0;
const api_1 = require("../store/api");
exports.assetsApi = api_1.api.injectEndpoints({
    endpoints: (builder) => ({
        getAssets: builder.query({
            query: ({ vs_currency = "usd", order = "market_cap_desc", per_page = 10, page = 1, sparkline = false, }) => ({
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
exports.useGetAssetsQuery = exports.assetsApi.useGetAssetsQuery;
