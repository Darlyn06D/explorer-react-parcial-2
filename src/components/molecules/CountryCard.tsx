import { Link } from "react-router-dom";
import type { Country } from "../../types/country";
import { Flag } from "../atoms/Flag";
import { Badge } from "../atoms/Badge";

interface CountryCardProps {
  country: Country;
}

export function CountryCard({ country }: CountryCardProps) {
  return (
    <article className="card">
      <Link
        className="card-link"
        to={`/country/${country.code.toLowerCase()}`}
        aria-label={`Ver detalle de ${country.name}`}
      >
        <Flag src={country.flag} alt={country.flagAlt || `Bandera de ${country.name}`} />
        <div className="card-body">
          <Badge region={country.region} />
          <h3>{country.name}</h3>
          <p><strong>Población:</strong> {country.population.toLocaleString("es-SV")}</p>
          <p><strong>Capital:</strong> {country.capital[0] ?? "No disponible"}</p>
          <span className="card-action">Ver detalle <span aria-hidden="true">→</span></span>
        </div>
      </Link>
    </article>
  );
}
