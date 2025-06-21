"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAssets = fetchAssets;
async function fetchAssets(limit = 20) {
    const res = await fetch(`https://api.coincap.io/v2/assets?limit=${limit}`);
    const json = await res.json();
    return json.data;
}
