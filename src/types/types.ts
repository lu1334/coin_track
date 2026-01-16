export interface CryptoData {
    id: string;
   symbol: string;
   name:string;
   currentPrice:number;
   priceChange24h:number;
   quantity:number;
}

export interface CryptoMarket {

  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number; 
  price_change_percentage_24h: number;
  quantity: number; 
}
