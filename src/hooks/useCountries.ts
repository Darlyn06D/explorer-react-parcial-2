import { useCallback, useEffect, useState } from "react";
import { fetchCountries } from "../api/countries";
import type { Country } from "../types/country";

interface CountriesState {
  countries: Country[];
  isLoading: boolean;
  error: string | null;
}

export function useCountries() {
  const [state, setState] = useState<CountriesState>({
    countries: [],
    isLoading: true,
    error: null,
  });
  const [reloadKey, setReloadKey] = useState(0);

  const reload = useCallback(() => {
    setState((current) => ({ ...current, isLoading: true, error: null }));
    setReloadKey((current) => current + 1);
  }, []);

  useEffect(() => {
    let isCurrent = true;
    fetchCountries()
      .then((countries) => {
        if (isCurrent) setState({ countries, isLoading: false, error: null });
      })
      .catch((error: unknown) => {
        if (!isCurrent) return;
        const message =
          error instanceof Error ? error.message : "Ocurrió un error inesperado.";
        setState({ countries: [], isLoading: false, error: message });
      });

    return () => {
      isCurrent = false;
    };
  }, [reloadKey]);

  return { ...state, reload };
}
