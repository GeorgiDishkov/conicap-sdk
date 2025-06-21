export interface AssetPlatform {
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

//possible to make one or more files of types depending of how big will grow this project
