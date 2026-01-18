
import type{ CryptoData } from "../types/types" // Tipos compartidos de la app

export const totalPortfolioValue = (arr:CryptoData[])=>{ // Calcula el valor total del portafolio
    return arr.reduce((a,b)=>{ // Acumula precio por cantidad
        a += b.currentPrice * b.quantity
        return a
    },0)
}

export const maximoQuantityCoin = (arr:CryptoData[])=>{ // Devuelve la moneda con mayor cantidad
    let max = 0 // Cantidad maxima encontrada
    let coin = 0 // Cantidad de la moneda actual
    return arr.reduce((a,b)=>{ // Recorre para encontrar el nombre
        coin = b.quantity 
        if(max < coin){
            max = coin
            a = b.name
        }
        return a 
    },"")
}
