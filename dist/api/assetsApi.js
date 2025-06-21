"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetAssetsQuery = exports.assetsApi = void 0;
const api_1 = require("../store/api");
exports.assetsApi = api_1.api.injectEndpoints({
    endpoints: (builder) => ({
        getAssets: builder.query({
            query: ({ limit = 20 }) => `assets?limit=${limit}`,
            providesTags: ["Assets"],
        }),
    }),
    overrideExisting: false,
});
exports.useGetAssetsQuery = exports.assetsApi.useGetAssetsQuery;
