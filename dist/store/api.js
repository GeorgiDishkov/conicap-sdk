"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const react_1 = require("@reduxjs/toolkit/query/react");
const apiTags_1 = require("../constants/apiTags");
exports.api = (0, react_1.createApi)({
    reducerPath: "restAPI",
    baseQuery: (0, react_1.fetchBaseQuery)({
        baseUrl: "https://api.coingecko.com/api/v3",
    }),
    tagTypes: apiTags_1.apiTags,
    endpoints: () => ({}),
});
