# Explorer App con React

Darlyn Dinora Andrade Zuniga - U20240714

## Tecnologias
React 18, TypeScript, Vite y Tailwind CSS v4.

## Ejecucion
Instalar Node.js 22.12 o superior y pnpm.
Ejecutar pnpm install y luego pnpm dev.
En PowerShell utilizar pnpm.cmd si se bloquea pnpm.ps1.
Compilar con pnpm build. Revisar con pnpm lint. Previsualizar con pnpm preview.

## Atomic Design
Atoms: Flag y Badge.
Molecules: CountryCard, SearchBar y RegionFilter.
Organisms: Header y CountryGrid.

## Estado y callbacks
App conserva query, region y menuOpen con useState.
Header transmite valores y callbacks a los controles hijos.
SearchBar llama onQueryChange al escribir. RegionFilter llama onRegionChange al seleccionar.
App actualiza el estado y recalcula filteredCountries sin otro estado adicional.

## Datos y funcionamiento
Tres registros locales: El Salvador, Japan y Canada.
Banderas SVG locales simplificadas. Sin API ni React Router.
Ver mas muestra el codigo del pais en la consola.
Grid de cuatro columnas desde 1024px; la muestra contiene tres paises.

## Comprobaciones manuales
Sin filtros: 3 paises.
Buscar SAL con espacios: El Salvador.
America: El Salvador y Canada. Asia: Japan.
Buscar can y America: Canada. Buscar can y Asia: sin resultados.
Limpiar filtros restablece los tres paises.
El menu movil abre y cierra.
