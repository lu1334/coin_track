import { useContext,createContext,useState } from "react";
import type{ CryptoData } from "../types/types";

interface CryptoInterface{
    cryptoCoin:CryptoData
    cryptoList:CryptoData[]
    setCryptoList:(list:CryptoData[])=>void
    handlerBuyCoin:(id:string) => void
}

const CryptoContext = createContext<CryptoInterface|undefined>(undefined)

export const CryptoProvider = ({children}: {children: React.ReactNode})=>{
   const [cryptoList,setCryptoList] = useState<CryptoData[]>([])
   const cryptoCoin = {} as CryptoData
   const handlerBuyCoin = (id: string) => {
  setCryptoList((prev) =>
    prev.map((c) => {  
      return c.id === id? {...c, quantity: c.quantity + 1 }:c
      }
     
    ))
};
   return (
    <CryptoContext value={{cryptoList,setCryptoList,handlerBuyCoin,cryptoCoin}}>
        {children}
    </CryptoContext>
   )
}
 export const useCryptoContext = ()=>{
   const res = useContext(CryptoContext)
   if(!res)throw new Error("provider not found");
   return res
}