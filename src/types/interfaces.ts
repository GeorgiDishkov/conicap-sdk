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

export interface CoinMarketResponse {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number | null;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  last_updated: string;
}

//possible to make one or more files of types depending of how big will grow this project
