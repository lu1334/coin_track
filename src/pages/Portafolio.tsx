import { useCryptoContext } from "../context/CryptoContex";
import { HomeCard } from "./HomeCard";
import { totalPortfolioValue,maximoQuantityCoin } from "../utils/calculadora";

export const Portafolio = ()=>{
    const {cryptoList} = useCryptoContext()
    const purchased = cryptoList.filter((c)=>c.quantity > 0)
    const coinQueen = maximoQuantityCoin(cryptoList)
    return(
        <section className="page portfolio">
            <div className="portfolio-cards">
                {purchased.length ?purchased.map(c=><HomeCard coin={c}/>): <p className="empty-state">Nothing purchased</p>}
            </div>
            <div className="portfolio-stats">
                <p className="stat-card">Total Portfolio Value: ${totalPortfolioValue(cryptoList).toFixed(2)}</p>
                <p className="stat-card">Coin queen: {coinQueen?` 👑 ${coinQueen}`:0}</p>
            </div>
        </section>
    )
}
