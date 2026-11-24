import type { Country, CountryApiRecord } from "../types/country";

const API_URL = "https://countries.dev";
const COUNTRY_FIELDS =
  "name,alpha2Code,nativeName,flags,population,region,subregion,capital,area,borders,currencies,languages";

function normalizeCountry(record: CountryApiRecord): Country {
  const name = record.name ?? "Nombre no disponible";
  const nativeName = record.nativeName ?? name;
  const currencies = (record.currencies ?? [])
    .map(({ name: currencyName, symbol }) =>
      [currencyName, symbol].filter(Boolean).join(" "),
    )
    .join(", ");

  return {
    code: record.alpha2Code ?? "",
    name,
    nativeName,
    population: record.population ?? 0,
    region: record.region ?? "Sin región",
    subregion: record.subregion ?? "No disponible",
    capital:
      typeof record.capital === "string"
        ? [record.capital]
        : record.capital ?? [],
    flag: record.flags?.svg ?? "",
    flagAlt: record.flags?.alt || `Bandera de ${name}`,
    area: record.area ?? 0,
    borders: record.borders ?? [],
    currencies: currencies || "No disponible",
    languages:
      (record.languages ?? []).map(({ name: language }) => language).filter(Boolean).join(", ") ||
      "No disponible",
  };
}

async function requestCountries(path: string): Promise<Country[]> {
  const response = await fetch(`${API_URL}${path}`);
  if (!response.ok) {
    throw new Error(`No se pudieron cargar los países (HTTP ${response.status}).`);
  }

  const payload: unknown = await response.json();
  const records = Array.isArray(payload)
    ? (payload as CountryApiRecord[])
    : [payload as CountryApiRecord];
  return records.map(normalizeCountry);
}

export async function fetchCountries(): Promise<Country[]> {
  const countries = await requestCountries(
    `/countries?fields=${encodeURIComponent(COUNTRY_FIELDS)}`,
  );
  return countries.sort((a, b) => a.name.localeCompare(b.name, "es"));
}

export async function fetchCountryByCode(code: string): Promise<Country> {
  const countries = await requestCountries(
    `/alpha/${encodeURIComponent(code)}?fields=${encodeURIComponent(COUNTRY_FIELDS)}`,
  );
  const country = countries[0];
  if (!country) throw new Error("No se encontró el país solicitado.");
  return country;
}
