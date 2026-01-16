import { useCryptoContext } from "../context/CryptoContex";
import { HomeCard } from "./HomeCard";


export const Portafolio = ()=>{
    const {cryptoList} = useCryptoContext()
    const purchased = cryptoList.filter((c)=>c.quantity > 0)
    return(
        <>
        {purchased.length ? <HomeCard coin={purchased[0]} /> : <p>Nothing purchased</p>}
        </>
    )
}