# Coin Track

App web para seguir criptomonedas, ver precios en tiempo real y gestionar un portafolio con compras/ventas simuladas.

## Demo

Pega aqui el enlace de la demo:
- [Demo en vivo](REEMPLAZAR_POR_ENLACE)

## Funcionalidades

- Lista de criptomonedas con precio actual y cambio 24h.
- Buscador por nombre de moneda.
- Comprar y vender monedas desde la lista.
- Portafolio con total invertido y moneda con mayor cantidad.
- Interfaz con estilo de app crypto y diseno responsive.

## Tecnologias

- React
- TypeScript
- Vite
- React Router

## Como usar

```bash
# instalar dependencias
yarn

# levantar en desarrollo
yarn dev
```

## Estructura principal

- `src/pages/Home.tsx`: pantalla principal con busqueda y listado.
- `src/pages/HomeCard.tsx`: tarjeta de cada moneda.
- `src/pages/portafolio.tsx`: resumen del portafolio.
- `src/context/CryptoContex.tsx`: estado global de criptos.
- `src/services/getCryptoMarket.ts`: consumo de datos del mercado.
- `src/utils/calculadora.ts`: calculos del portafolio.

## Notas

- La compra/venta es simulada (no realiza transacciones reales).
- El estado del portafolio se mantiene en memoria durante la sesion.
