import { useCryptoContext } from "../context/CryptoContex";
import type { CryptoData } from "../types/types";
export const HomeCard = ({ coin }: { coin: CryptoData }) => {
  const { cryptoList,handlerBuyCoin } = useCryptoContext();
  if (!cryptoList.length) return <p> No data available</p>;

  return (
    <>
      <div>
        <h2>
          {coin.name} ({coin.symbol.toUpperCase()})
        </h2>
        <p>Current Price: ${coin.currentPrice.toFixed(2)}</p>
        <p>24h Change: {coin.priceChange24h.toFixed(2)}%</p>
        <p>Quantity: {coin.quantity}</p>
        <button onClick={()=>handlerBuyCoin(coin.id)}>Buy</button>
      </div>
    </>
  );
};
