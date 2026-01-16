import { useState, useEffect } from "react";
import { getCryptoMarket } from "../services/getCryptoMarket";
import { useCryptoContext } from "../context/CryptoContex";
import { HomeCard } from "./HomeCard";
import { NavBar } from "./NavBar";

export const Home = () => {
  const { cryptoList, setCryptoList } = useCryptoContext();

  const [errorHome, setErrorHome] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const getCryptoData = async () => {
      try {
        const res = await getCryptoMarket();
        if (!res) throw new Error("No data found");
        setCryptoList(res);
      } catch (err: any) {
        setErrorHome(err.message);
        return [];
      } finally {
        setLoading(false);
      }
    };
    getCryptoData();
  }, []);
  
  return (
    <>
      {loading && <p>Loading...</p>}
      {errorHome && <p>{errorHome}</p>}
      <NavBar/>
      <ul>
        {cryptoList.map((c) => (
          <li key={c.id}>
            <HomeCard coin={c} />
          </li>
        ))}
      </ul>
    </>
  );
};
