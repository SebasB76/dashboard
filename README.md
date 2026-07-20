# Dashboard del Clima

Dashboard meteorológico construido con **React + TypeScript + Vite** y **Material UI (MUI)**, que consume la API de [Open-Meteo](https://open-meteo.com/en/docs) para mostrar indicadores del clima en tiempo real.

Proyecto desarrollado a lo largo de las **Guías 12 a 15** de Desarrollo de Aplicaciones Web y Móviles.

## Contenido por guía

- **Guía 12 — React y MUI (Introducción):** inicialización con Vite (React + TS), instalación de MUI, estructura responsiva con `Grid` de 7 secciones y configuración de despliegue con `gh-pages`.
- **Guía 13 — Componentes, Interfaces y Props:** componentes `HeaderUI` y `AlertUI` (props tipadas con interfaces de TypeScript).
- **Guía 14 — Eventos y Hooks (`useState`):** componente `SelectorUI` con evento `onChange` y estado con `useState`.
- **Guía 15 — Hooks (`useEffect`):** hook `useFetchData` con `useEffect` para peticiones asíncronas, tipos en `DashboardTypes`, y componente `IndicatorUI` (Cards) con datos reales de Open-Meteo.

## Estructura

```
src/
├── App.tsx                 # Layout Grid + integración de componentes
├── components/
│   ├── HeaderUI.tsx        # Encabezado (Guía 13)
│   ├── AlertUI.tsx         # Alerta con props (Guía 13)
│   ├── SelectorUI.tsx      # Selector de ciudad + useState (Guía 14)
│   └── IndicatorUI.tsx     # Tarjeta indicador (Guía 15)
├── hooks/
│   └── useFetchData.tsx    # Fetch con useEffect (Guía 15)
└── types/
    └── DashboardTypes.tsx  # Interfaces de la respuesta de Open-Meteo (Guía 15)
```

## Uso local

```bash
npm install
npm run dev
```

## Despliegue (GitHub Pages)

```bash
npm run deploy
```

Sitio publicado en: https://sebasb76.github.io/dashboard
