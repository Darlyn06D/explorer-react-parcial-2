export interface Country {
  code: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  flag: string;
  flagAlt: string;
  area: number;
  borders: string[];
  currencies: string;
  languages: string;
}

export interface CountryApiRecord {
  name?: string;
  nativeName?: string;
  alpha2Code?: string;
  population?: number;
  region?: string;
  subregion?: string;
  capital?: string | string[];
  area?: number;
  borders?: string[];
  currencies?: Array<{ name?: string; symbol?: string }>;
  languages?: Array<{ name?: string }>;
  flags?: { svg?: string; alt?: string };
}
