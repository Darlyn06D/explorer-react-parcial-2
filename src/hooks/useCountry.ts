import { useEffect, useState } from "react";
import { fetchCountryByCode } from "../api/countries";
import type { Country } from "../types/country";

interface CountryState {
  code: string | null;
  country: Country | null;
  isLoading: boolean;
  error: string | null;
}

export function useCountry(code: string | undefined) {
  const [state, setState] = useState<CountryState>({
    code: null,
    country: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let isCurrent = true;
    if (!code) return;
    fetchCountryByCode(code)
      .then((country) => {
        if (isCurrent) setState({ code, country, isLoading: false, error: null });
      })
      .catch((error: unknown) => {
        if (!isCurrent) return;
        const message =
          error instanceof Error ? error.message : "Ocurrió un error inesperado.";
        setState({ code, country: null, isLoading: false, error: message });
      });

    return () => {
      isCurrent = false;
    };
  }, [code]);

  if (!code) {
    return { country: null, isLoading: false, error: "Código de país inválido." };
  }
  if (state.code !== code) {
    return { country: null, isLoading: true, error: null };
  }
  return state;
}
