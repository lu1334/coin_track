import { useCryptoContext } from "../context/CryptoContex";
import { HomeCard } from "./HomeCard";
import { totalPortfolioValue,maximoQuantityCoin } from "../utils/calculadora";

export const Portafolio = ()=>{
    const {cryptoList} = useCryptoContext()
    const purchased = cryptoList.filter((c)=>c.quantity > 0)
    const coinQueen = maximoQuantityCoin(cryptoList)
    return(
        <>
        {purchased.length ?purchased.map(c=><HomeCard coin={c}/>): <p>Nothing purchased</p>}
        <p>Total Portfolio Value: ${totalPortfolioValue(cryptoList).toFixed(2)}</p>
        <p>Coin queen: {coinQueen?coinQueen:0}</p>
        </>
    )
}