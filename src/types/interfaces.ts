export interface Asset {
  id: string;
  chain_identifier: number | null;
  name: string;
  shortname: string;
  native_coin_id: string;

  image: {
    thumb: string;
    small: string;
    large: string;
  };
}
export interface CoinMarketResponse {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  price_change_percentage_24h: number;
  circulating_supply: number;
  last_updated: string;
}

export interface Coin {
  id: string;
  symbol: string;
  name: string;
  platforms: Record<string, string>;
}

export interface AssetsResponse {
  data: Asset[];
  timestamp: number;
}

//possible to make one or more files of types depending of how big will grow this project
