"use client";

import { useAppContext } from "@/context/SurahContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Hero = () => {

  const router = useRouter();

  const [search, setSearch] = useState("");

  const {allSurahs} = useAppContext()
  const filteredSurahs = allSurahs.filter((surah) =>
    surah.englishName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-green-50 to-white">

      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-700 mb-3">
          Quran.com
        </h1>
        <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto">
          Read, search, and explore the Holy Quran with Arabic,
          English translation, audio, and tafsir.
        </p>
      </div>

      {/* Search Box */}
      <div className="w-full max-w-2xl relative">
        <form className=" flex items-center bg-white borde border-gray-200 rounded-full px-5 py-3 shadow-lg focus-within:ring-2 focus-within:ring-green-500 transition">
          {/* Search Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-400 mr-3"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="m23.5 21.466-7.01-7.01a9.07 9.07 0 0 0 1.736-5.343C18.226 4.088 14.138 0 9.113 0S0 4.088 0 9.113s4.088 9.113 9.113 9.113a9.07 9.07 0 0 0 5.343-1.735l7.01 7.009z" />
          </svg>

          {/* Input */}
          <input
            type="search"
            placeholder="Search Surah, Ayah..."
            className="flex-1 bg-transparent outline-none text-sm md:text-base text-gray-700 placeholder:text-gray-400" value={search} 
            onChange={(e) => setSearch(e.target.value)}/>

          {search && (
            <div className="bg-white shadow-lg rounded-xl mt-3 max-h-60 overflow-y-auto absolute bottom-20 left-50 z-50">
              {filteredSurahs.map((surah) => (
                <div key={surah.number} onClick={() => router.push(`/surah/${surah.number}`)} className="p-3 hover:bg-gray-100 cursor-pointer flex justify-between">
                  <span>
                    {surah.number}. {surah.englishName}
                  </span>
                  <span className="text-xs text-gray-500">
                    {surah.numberOfAyahs} ayahs
                  </span>
                </div>
              ))}
            </div>
          )}
        </form>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full max-w-md">

        {/* Navigate Quran */}
        <button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full w-full transition shadow-md">
          <span className="text-lg">📖</span>
          <span className="font-medium">
            Navigate Quran
          </span>
        </button>

        {/* Popular */}
        <button className=" flex items-center justify-center gap-2 bg-white border hover:bg-gray-100 px-5 py-3 rounded-full w-full transition shadow-sm">
          <span className="text-lg">🔥</span>
          <span className="font-medium">
            Popular
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hero;