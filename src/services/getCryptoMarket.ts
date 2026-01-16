import { url_base } from "./getUrl";
import type { CryptoMarket} from "../types/types";
export const getCryptoMarket = async ()=>{
    try{
        const response = await fetch(`${url_base}`)
       if(!response.ok)throw new Error( "Not response found"+response.status);
       const data: CryptoMarket[] = await response.json()
       if(!Array.isArray(data))throw new Error("Data is not an array");
        return data.map((c)=>(
            {id:c.id,
            symbol:c.symbol,
            name:c.name,
            currentPrice:c.current_price,
            priceChange24h:c.price_change_percentage_24h,
            quantity:0
            }
        ))
    }catch(err:any){
        console.error(err.message)
        return []
    }
    
}