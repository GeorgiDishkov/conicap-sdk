import { AssetPlatform } from "../types/interfaces";

export async function fetchAssets(limit = 20): Promise<AssetPlatform[]> {
  const res = await fetch(`https://api.coincap.io/v2/assets?limit=${limit}`);
  const json = await res.json();
  return json.data;
}
