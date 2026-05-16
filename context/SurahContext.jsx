"use client";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter} from "next/navigation";

export const SurahContext = createContext();

export const useAppContext = () => {
  return useContext(SurahContext);
}

export const SurahProvider = ({ children }) => {
    const [allSurahs, setAllSurahs] = useState([]);
    const router = useRouter();

  const getSurahs = async () => {
    try {
        const res = await fetch(`https://api.alquran.cloud/v1/surah`);
        const data = await res.json();
  
        if (data.code === 200) {
            setAllSurahs(data.data);
        } else {
            toast.error("Failed to load data");
        }
        } catch (err) {
            toast.error("Something went wrong!",err.message);
        }
    };
  
   useEffect(() => {
       getSurahs();
    }, []);
  return (
    <SurahContext.Provider value={{ allSurahs, setAllSurahs,router}}>
      {children}
    </SurahContext.Provider>
  );
};