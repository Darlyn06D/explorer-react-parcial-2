import { Link, useParams } from "react-router-dom";
import { Badge } from "../components/atoms/Badge";
import { Flag } from "../components/atoms/Flag";
import { useCountry } from "../hooks/useCountry";

function formatNumber(value: number): string {
  return new Intl.NumberFormat("es-SV").format(value);
}

export function CountryDetailPage() {
  const { code } = useParams<{ code: string }>();
  const { country, isLoading, error } = useCountry(code?.toUpperCase());

  return (
    <main className="detail-page container">
      <Link className="back-link" to="/">
        <span aria-hidden="true">←</span> Volver al listado
      </Link>

      {isLoading && (
        <div className="state-panel" role="status" aria-live="polite">
          <span className="loader" aria-hidden="true" />
          <p>Cargando información del país…</p>
        </div>
      )}

      {error && (
        <div className="state-panel error-panel" role="alert">
          <h1>No encontramos ese país</h1>
          <p>{error}</p>
          <Link className="button-link" to="/">Regresar al listado</Link>
        </div>
      )}

      {country && (
        <article className="detail-card">
          <div className="detail-flag-wrap">
            <Flag src={country.flag} alt={country.flagAlt} />
          </div>
          <div className="detail-content">
            <Badge region={country.region} />
            <p className="eyebrow">DETALLE DEL PAÍS · {country.code}</p>
            <h1>{country.name}</h1>
            <p className="native-name">Nombre nativo: {country.nativeName}</p>

            <dl className="detail-grid">
              <div><dt>Capital</dt><dd>{country.capital.join(", ") || "No disponible"}</dd></div>
              <div><dt>Región</dt><dd>{country.region}</dd></div>
              <div><dt>Subregión</dt><dd>{country.subregion}</dd></div>
              <div><dt>Población</dt><dd>{formatNumber(country.population)}</dd></div>
              <div><dt>Superficie</dt><dd>{formatNumber(country.area)} km²</dd></div>
              <div><dt>Moneda</dt><dd>{country.currencies}</dd></div>
              <div><dt>Idiomas</dt><dd>{country.languages}</dd></div>
              <div>
                <dt>Países fronterizos</dt>
                <dd>
                  {country.borders.length > 0 ? (
                    <span className="border-list">
                      {country.borders.map((border) => (
                        <Link key={border} to={`/country/${border.toLowerCase()}`}>
                          {border}
                        </Link>
                      ))}
                    </span>
                  ) : "No tiene fronteras terrestres"}
                </dd>
              </div>
            </dl>
          </div>
        </article>
      )}
    </main>
  );
}
