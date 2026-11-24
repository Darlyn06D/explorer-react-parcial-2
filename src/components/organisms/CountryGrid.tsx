import type { Country } from "../../types/country";
import { CountryCard } from "../molecules/CountryCard";

interface CountryGridProps {
  countries: Country[];
}

export function CountryGrid({ countries }: CountryGridProps) {
  if (countries.length === 0) {
    return (
      <div className="empty" role="status" aria-live="polite">
        <h2>No se encontraron países</h2>
        <p>Prueba con otro nombre o selecciona una región diferente.</p>
      </div>
    );
  }

  return (
    <div className="country-grid">
      {countries.map((country) => (
        <CountryCard key={country.code} country={country} />
      ))}
    </div>
  );
}
