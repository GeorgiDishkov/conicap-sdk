"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const api_1 = require("./api");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        [api_1.api.reducerPath]: api_1.api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api_1.api.middleware),
});
