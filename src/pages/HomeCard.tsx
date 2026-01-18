import { useCryptoContext } from "../context/CryptoContex"; // Hook con estado global de criptos
import type { CryptoData } from "../types/types"; // Tipo de dato para la moneda
import { maximoQuantityCoin } from "../utils/calculadora"; // Utilidad para la moneda con mayor cantidad

export const HomeCard = ({ coin }: { coin: CryptoData }) => {
  const { cryptoList, handlerBuyCoin ,handlerSellCoin} = useCryptoContext(); // Datos y handlers del contexto
  if (!cryptoList.length) return <p> No data available</p>; // Estado vacío si no hay datos

  const coinQueen = maximoQuantityCoin(cryptoList) // Calcula la moneda con mayor cantidad

  return (
    <>
      <div className= {coinQueen===coin.name?"coin-card__gold":"coin-card"}> {/* Destaca la moneda reina */}
        <h2 className="coin-title">
          {coin.name} ({coin.symbol.toUpperCase()})
        </h2>
        <p className="coin-price">Current Price: ${coin.currentPrice.toFixed(2)}</p> {/* Precio actual */}
        <p className="coin-change" style={{color:coin.priceChange24h>=0?"green":"red"}}>
          24h Change: {coin.priceChange24h.toFixed(2)}%
        </p>
        <p className="coin-qty">Quantity: {coin.quantity}</p> {/* Cantidad comprada */}
        <div className="coin-actions"> {/* Acciones de compra/venta */}
          <button className="btn primary" onClick={() => handlerBuyCoin(coin.id)}>Buy</button> {/* Comprar */}
          <button className="btn ghost" onClick={()=> handlerSellCoin(coin)}>Sell</button> {/* Vender */}
        </div>
      </div>
    </>
  );
};
