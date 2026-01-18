import { useContext, createContext, useState, useEffect } from "react";
import type { CryptoData } from "../types/types";

interface CryptoInterface {
  cryptoList: CryptoData[];
  setCryptoList: (list: CryptoData[]) => void;
  handlerBuyCoin: (id: string) => void;
  handlerSellCoin:(c:CryptoData)=> void
 
}

const CryptoContext = createContext<CryptoInterface | undefined>(undefined);

export const CryptoProvider = ({ children }: { children: React.ReactNode }) => {
  const [cryptoList, setCryptoList] = useState<CryptoData[]>(() => {
    const res = localStorage.getItem("list");
    return res ? JSON.parse(res) : [];
  });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(cryptoList));
  }, [cryptoList]);

  
  const handlerBuyCoin = (id: string) => {
    setCryptoList((prev) =>
      prev.map((c) => {
        return c.id === id ? { ...c, quantity: c.quantity + 1 } : c;
      })
    );
   
  };

  const handlerSellCoin = (coin:CryptoData)=>{
      
      setCryptoList((prev)=> prev.map((c)=>{//si la cantidad es <= 0 dejamos 0 sino restamos 1
        return c.id === coin.id ? {...c,quantity:c.quantity <=0?0:c.quantity-1}:c
      }))
  }

  return (
    <CryptoContext
      value={{ cryptoList, setCryptoList, handlerBuyCoin,handlerSellCoin}}
    >
      {children}
    </CryptoContext>
  );
};
export const useCryptoContext = () => {
  const res = useContext(CryptoContext);
  if (!res) throw new Error("provider not found");
  return res;
};
