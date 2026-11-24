import { useMemo, useState } from "react";
import { CountryGrid } from "../components/organisms/CountryGrid";
import { Header } from "../components/organisms/Header";
import { useCountries } from "../hooks/useCountries";

export function CountryListPage() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { countries, isLoading, error, reload } = useCountries();

  const filteredCountries = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("es");
    return countries.filter((country) => {
      const matchesName = country.name.toLocaleLowerCase("es").includes(normalizedQuery);
      const matchesRegion = region === "" || country.region === region;
      return matchesName && matchesRegion;
    });
  }, [countries, query, region]);

  function clearFilters(): void {
    setQuery("");
    setRegion("");
  }

  return (
    <>
      <Header
        query={query}
        region={region}
        menuOpen={menuOpen}
        onQueryChange={setQuery}
        onRegionChange={setRegion}
        onMenuToggle={() => setMenuOpen((isOpen) => !isOpen)}
        onMenuClose={() => setMenuOpen(false)}
        onClear={clearFilters}
      >
        <h1>Un mundo por explorar</h1>
      </Header>

      <main id="paises" className="container page-content">
        <div className="results">
          <div>
            <h2>Países</h2>
            {!isLoading && !error && (
              <p className="result-count" role="status" aria-live="polite">
                {filteredCountries.length} países encontrados
              </p>
            )}
          </div>
        </div>

        {isLoading && (
          <div className="state-panel" role="status" aria-live="polite">
            <span className="loader" aria-hidden="true" />
            <p>Cargando países…</p>
          </div>
        )}

        {error && (
          <div className="state-panel error-panel" role="alert">
            <h2>No se pudieron cargar los países</h2>
            <p>{error} Revisa tu conexión e inténtalo de nuevo.</p>
            <button type="button" onClick={reload}>Intentar de nuevo</button>
          </div>
        )}

        {!isLoading && !error && <CountryGrid countries={filteredCountries} />}
      </main>

      <footer id="acerca" className="container site-footer">
        <p>Explorer App · Información obtenida de countries.dev</p>
        <p>Darlyn Dinora Andrade Zuniga · U20240714</p>
        <p>Diseño Web Adaptable · UNIVO</p>
      </footer>
    </>
  );
}
