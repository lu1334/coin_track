import { useContext,createContext,useState } from "react";
import type{ CryptoData } from "../types/types";

interface CryptoInterface{

    cryptoList:CryptoData[]
    setCryptoList:(list:CryptoData[])=>void
}

const CryptoContext = createContext<CryptoInterface|undefined>(undefined)

export const CryptoProvider = ({children}: {children: React.ReactNode})=>{
   const [cryptoList,setCryptoList] = useState<CryptoData[]>([])

   return (
    <CryptoContext value={{cryptoList,setCryptoList}}>
        {children}
    </CryptoContext>
   )
}
 export const useCryptoContext = ()=>{
   const res = useContext(CryptoContext)
   if(!res)throw new Error("provider not found");
   return res
}