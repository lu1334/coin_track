import { useCryptoContext } from "../context/CryptoContex";
import type { CryptoData } from "../types/types";
import { maximoQuantityCoin } from "../utils/calculadora";

export const HomeCard = ({ coin }: { coin: CryptoData }) => {
  const { cryptoList, handlerBuyCoin ,handlerSellCoin} = useCryptoContext();
  if (!cryptoList.length) return <p> No data available</p>;

  const coinQueen = maximoQuantityCoin(cryptoList)

  return (
    <>
      <div className= {coinQueen===coin.name?"coin-card__gold":"coin-card"}>
        <h2 className="coin-title">
          {coin.name} ({coin.symbol.toUpperCase()})
        </h2>
        <p className="coin-price">Current Price: ${coin.currentPrice.toFixed(2)}</p>
        <p className="coin-change" style={{color:coin.priceChange24h>=0?"green":"red"}}>
          24h Change: {coin.priceChange24h.toFixed(2)}%
        </p>
        <p className="coin-qty">Quantity: {coin.quantity}</p>
        <div className="coin-actions">
          <button className="btn primary" onClick={() => handlerBuyCoin(coin.id)}>Buy</button>
          <button className="btn ghost" onClick={()=> handlerSellCoin(coin)}>Sell</button>
        </div>
      </div>
    </>
  );
};
