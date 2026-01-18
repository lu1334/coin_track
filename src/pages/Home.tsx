import { useState, useEffect } from "react";
import { getCryptoMarket } from "../services/getCryptoMarket";
import { useCryptoContext } from "../context/CryptoContex";
import { HomeCard } from "./HomeCard";
import { NavBar } from "./NavBar";
import type{ ChangeEvent } from "react";
export const Home = () => {
  const { cryptoList, setCryptoList } = useCryptoContext();

  const [errorHome, setErrorHome] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [coinSearch,setCoinsearch] = useState("")

  useEffect(() => {
    setLoading(true);
    const getCryptoData = async () => {
      try {
        const res = await getCryptoMarket();
        if (!res) throw new Error("No data found");
        const merge = res.map((coinFromRes)=>{
            const customerData = cryptoList.find(cd=>coinFromRes.id===cd.id)
            return{
                ...coinFromRes,quantity:customerData?customerData.quantity:0
            }
        })
        setCryptoList(merge)
      } catch (err: any) {
        setErrorHome(err.message);
        return [];
      } finally {
        setLoading(false);
      }
    };
    getCryptoData();
  }, []);

  const handlerOnchange = (e:ChangeEvent<HTMLInputElement>)=>setCoinsearch(e.target.value)
  const searchCoin = cryptoList.filter(f=>f.name.trim().toLocaleLowerCase().includes(coinSearch.trim().toLocaleLowerCase()))
  
  return (
    <div className="page home">
     
      {loading && <p>Loading...</p>}
      {errorHome && <p>{errorHome}</p>}
      <div className="home-toolbar">
        <input className="coin-search" type="text" value={coinSearch} onChange={handlerOnchange}/>
      </div>
      <NavBar/>
      <ul className="coin-list">
        {searchCoin.map((c) => (
          <li className="coin-item" key={c.id}>
            <HomeCard coin={c} />
          </li>
        ))}
      </ul>
    </div>
  );
};
