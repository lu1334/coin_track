
import type{ CryptoData } from "../types/types"

export const totalPortfolioValue = (arr:CryptoData[])=>{
    return arr.reduce((a,b)=>{
        a += b.currentPrice * b.quantity
        return a
    },0)
}

export const maximoQuantityCoin = (arr:CryptoData[])=>{
    let max = 0
    let coin = 0
    return arr.reduce((a,b)=>{
        coin =b.quantity 
        if(max < coin){
            max = coin
            a = b.name
        }
        return a 
    },"")
}