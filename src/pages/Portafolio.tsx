import { useCryptoContext } from "../context/CryptoContex"; // Hook con el estado global
import { HomeCard } from "./HomeCard"; // Tarjeta reutilizable
import { totalPortfolioValue,maximoQuantityCoin } from "../utils/calculadora"; // Calculos del portafolio

export const Portafolio = ()=>{
    const {cryptoList} = useCryptoContext() // Lista completa de criptos
    const purchased = cryptoList.filter((c)=>c.quantity > 0) // Solo monedas compradas
    const coinQueen = maximoQuantityCoin(cryptoList) // Moneda con mayor cantidad
    return(
        <section className="page portfolio">
            <div className="portfolio-cards">
                {purchased.length ?purchased.map(c=><HomeCard coin={c}/>): <p className="empty-state">Nothing purchased</p>} {/* Render condicional */}
            </div>
            <div className="portfolio-stats">
                <p className="stat-card">Total Portfolio Value: ${totalPortfolioValue(cryptoList).toFixed(2)}</p> {/* Valor total */}
                <p className="stat-card">Coin queen: {coinQueen?` 👑 ${coinQueen}`:0}</p> {/* Destacado */}
            </div>
        </section>
    )
}
