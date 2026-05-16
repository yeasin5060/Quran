"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {

    const { id } = useParams();

    const [arabic, setArabic] = useState(null);
    const [english, setEnglish] = useState(null);

    const [language, setLanguage] = useState("arabic");

    useEffect(() => {

    const getSurah = async () => {

    const res = await fetch(
        `https://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,en.asad`
    );

    const data = await res.json();

    setArabic(data.data[0]);
    setEnglish(data.data[1]);
    };

    getSurah();

    }, [id]);

    if (!arabic || !english) {
    return <p>Loading...</p>;
    }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
        {/* HEADER */}
        <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-green-700">
            {arabic.englishName}
            </h1>
            <h2 className="text-2xl">
            {arabic.name}
            </h2>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-center gap-4 mb-8">
            <button onClick={() => setLanguage("arabic")} className="bg-green-600 text-white px-4 py-2 rounded">
            Arabic
            </button>

            <button onClick={() => setLanguage("english")} className="bg-blue-600 text-white px-4 py-2 rounded">
            English
            </button>
        </div>

        {/* AYAHS */}
        <div className="space-y-4">

            {language === "arabic" &&

                arabic.ayahs.map((ayah) => (

                    <div key={ayah.number} className="bg-white p-5 rounded-xl shadow flex gap-10 justify-between">

                        <div>

                            <span className="bg-green-600 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm">
                                {ayah.numberInSurah}
                            </span>

                        </div>

                        <p className="text-lg leading-loose">
                        {ayah.text}
                        </p>

                    </div>
                ))
            }

            {language === "english" &&

                english.ayahs.map((ayah) => (

                    <div key={ayah.number} className="bg-white p-5 rounded-xl shadow flex gap-10 justify-between">

                        <p className="text-lg leading-loose">
                            {ayah.text}
                        </p>

                        <div>
                            <span className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm">
                                {ayah.numberInSurah}
                            </span>
                        </div>

                    </div>

                ))
            }

        </div>

    </div>
  );
};

export default Page;