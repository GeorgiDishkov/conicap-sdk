"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLazyGetAssetByIdQuery = exports.useGetAssetByIdQuery = exports.useGetAssetsQuery = exports.assetsApi = void 0;
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
        getAssetById: builder.query({
            query: (id) => ({
                url: `coins/markets`,
                params: {
                    vs_currency: "usd",
                    ids: id,
                },
            }),
            transformResponse: (response) => response[0],
            providesTags: (result, error, id) => [{ type: "Assets", id }],
        }),
    }),
    overrideExisting: false,
});
// this endpoint does not return total elements or current pages , like normal paginated endpoints
exports.useGetAssetsQuery = exports.assetsApi.useGetAssetsQuery, exports.useGetAssetByIdQuery = exports.assetsApi.useGetAssetByIdQuery, exports.useLazyGetAssetByIdQuery = exports.assetsApi.useLazyGetAssetByIdQuery;
