import { useCryptoContext } from "../context/CryptoContex";

export const HomeCard = ()=>{
    const {cryptoList} = useCryptoContext()
    if(!cryptoList.length)return <p> No data available</p>

    return(
        <>
        {cryptoList.map((c)=>(
            <div key={c.id} className="card">
                <h2>{c.id}</h2>
                <p>Price: ${c.price}</p>
                <p>Quantity: {c.quantity}</p>
                <p>24h Change: {c.priceChange24h}%</p>
            </div>
        ))}
        </>
    )
}