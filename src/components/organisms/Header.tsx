import type { ReactNode } from "react";
import { RegionFilter } from "../molecules/RegionFilter";
import { SearchBar } from "../molecules/SearchBar";

interface HeaderProps {
  children: ReactNode;
  query: string;
  region: string;
  menuOpen: boolean;
  onQueryChange: (value: string) => void;
  onRegionChange: (value: string) => void;
  onMenuToggle: () => void;
  onMenuClose: () => void;
  onClear: () => void;
}

export function Header({
  children,
  query,
  region,
  menuOpen,
  onQueryChange,
  onRegionChange,
  onMenuToggle,
  onMenuClose,
  onClear,
}: HeaderProps) {
  return (
    <header id="inicio" className="site-header">
      <div className="topbar">
        <div className="container navigation">
          <a href="#inicio" className="brand" onClick={onMenuClose}>Explorer App</a>
          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="navigation-menu"
            onClick={onMenuToggle}
          >
            {menuOpen ? "Cerrar menú ✕" : "Abrir menú ☰"}
          </button>
          <nav
            id="navigation-menu"
            aria-label="Principal"
            className={menuOpen ? "nav-links is-open" : "nav-links"}
          >
            <a href="#inicio" onClick={onMenuClose}>Inicio</a>
            <a href="#paises" onClick={onMenuClose}>Países</a>
            <a href="#acerca" onClick={onMenuClose}>Acerca de</a>
          </nav>
        </div>
      </div>

      <div className="container intro">
        <p className="eyebrow">DESCUBRE EL MUNDO</p>
        {children}
        <p>Explora países, sus capitales, regiones y otros datos importantes.</p>
        <div className="filters">
          <SearchBar query={query} onQueryChange={onQueryChange} />
          <RegionFilter region={region} onRegionChange={onRegionChange} />
          <button className="secondary-button" type="button" onClick={onClear}>
            Limpiar filtros
          </button>
        </div>
      </div>
    </header>
  );
}
