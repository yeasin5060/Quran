"use client";

import { useAppContext } from "@/context/SurahContext";

const Allsurah = () => {
  
  const {allSurahs,router } = useAppContext();
  console.log(allSurahs);


  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
        📖 Holy Quran Surahs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {allSurahs.map((surah) => (
          <div
            key={surah.number}
              onClick={() => router.push(`/surah/${surah.number}`)}
            className="bg-white border rounded-xl shadow-sm hover:shadow-lg transition p-4 cursor-pointer"
          >
            <div className="flex justify-between mb-2">
              <h2 className="text-lg font-bold">
                {surah.number}. {surah.englishName}
              </h2>

              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                {surah.revelationType}
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-2">
              {surah.englishNameTranslation}
            </p>

            <div className="flex justify-between text-xs text-gray-500">
              <span>📖 {surah.numberOfAyahs} Ayahs</span>
              <span className="text-green-600 font-medium">Open →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Allsurah;