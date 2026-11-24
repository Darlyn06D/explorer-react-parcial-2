# Explorer App

Aplicación web adaptable para explorar países. El listado permite buscar por nombre y filtrar por región; cada tarjeta abre una página de detalle con información del país. La información se consulta desde countries.dev API.

**Autora:** Darlyn Dinora Andrade Zuniga · U20240714

**Curso:** Diseño Web Adaptable · UNIVO

## Capturas

### Listado de países

![Listado de países con búsqueda y filtro por región](docs/capturas/listado.jpg)

### Detalle de un país

![Detalle de Argentina](docs/capturas/detalle.jpg)

## Tecnologías

- React 18 y TypeScript
- Vite
- Tailwind CSS v4 y CSS responsivo
- React Router para navegación entre listado y detalle
- countries.dev API para consultar los países sin configurar una clave

## Requisitos

- Node.js 22.12 o superior
- pnpm

## Instalación y ejecución

```bash
pnpm install
pnpm dev
```

Abre en el navegador la dirección local que Vite muestra en la terminal. Para generar la versión de producción y previsualizarla:

```bash
pnpm build
pnpm preview
```

Para revisar el estilo del código:

```bash
pnpm lint
```

## Funcionalidades

- Carga de todos los países desde countries.dev.
- Búsqueda por nombre y filtro por región, que se pueden combinar.
- Limpieza de los controles y mensaje cuando no hay coincidencias.
- Tarjetas responsivas con bandera, nombre, región, capital y población.
- Página de detalle con nombre nativo, capital, regiones, población, superficie, moneda, idiomas y fronteras.
- Navegación sin recargar la página y enlaces directos por código de país.
- Estados visibles de carga y error, con opción de volver a intentar.
- Menú adaptable y controles etiquetados para facilitar su uso con teclado.

## Organización del proyecto

```text
src/
├── api/                 # Consultas y normalización de datos de REST Countries
├── components/
│   ├── atoms/           # Badge y Flag
│   ├── molecules/       # CountryCard, SearchBar y RegionFilter
│   └── organisms/       # CountryGrid y Header
├── hooks/               # Hooks reutilizables de consulta de países
├── pages/               # Listado, detalle y página 404
└── types/               # Interfaces TypeScript
```

## Verificación manual

1. Abre el listado y confirma que aparecen los países junto con su bandera, población, región y capital.
2. Busca un país por nombre; luego combina una búsqueda con el filtro de región.
3. Limpia los controles y verifica que vuelve el listado completo. Prueba una consulta sin coincidencias.
4. Abre una tarjeta, revisa que el código de la URL corresponda con el país y usa el enlace para volver al listado.
5. Actualiza directamente una dirección como `/country/sv` y comprueba que el detalle se abre correctamente.
6. Revisa el menú y la distribución de controles en escritorio y móvil.
7. Desconecta temporalmente la red para observar el mensaje de error y volver a intentar la carga.

## Fuente de datos

countries.dev API: <https://countries.dev/docs>
