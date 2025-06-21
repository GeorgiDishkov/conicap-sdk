"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
// src/store.ts
const toolkit_1 = require("@reduxjs/toolkit");
const coinsApi_1 = require("./coinsApi");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        [coinsApi_1.coinsApi.reducerPath]: coinsApi_1.coinsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coinsApi_1.coinsApi.middleware),
});
