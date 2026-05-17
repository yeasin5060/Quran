"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {

    const { id } = useParams();
    const router = useRouter();

    const [arabic, setArabic] = useState(null);
    const [english, setEnglish] = useState(null);

    const [language, setLanguage] = useState("arabic");

    const getSurah = async () => {

        const res = await fetch(
            `https://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,en.asad`
        );

        const data = await res.json();

        setArabic(data.data[0]);
        setEnglish(data.data[1]);
    };


    useEffect(() => {
        getSurah();
    }, [id]);

    if (!arabic || !english) {
  return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-xl font-semibold text-green-600">
                Loading...
            </p>
        </div>
    );
    }
  return (
    <div className="min-h-screen bg-gray-50 p-6 read-only:">
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
                        <p className="text-3xl font-normal leading-loose text-right">
                            {ayah.text}
                        </p>
                    </div>
                ))
            }

            {language === "english" &&
                english.ayahs.map((ayah) => (
                    <div key={ayah.number} className="bg-white p-5 rounded-xl shadow flex gap-10 justify-between">
                        <p className="text-2xl font-normal leading-loose">
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

        <div className="fixed bottom-2 left-0 right-0  flex justify-between px-6 z-50">

            {/* Previous Button */}
            <button
                onClick={() => router.push(`/surah/${Number(id) - 1}`)}
                disabled={Number(id) === 1}
                className="bg-gray-200 text-black hover:bg-gray-300 px-5 py-2 rounded-lg disabled:opacity-50 cursor-pointer">
                ← Previous
            </button>

            {/* Next Button */}
            <button
                onClick={() => router.push(`/surah/${Number(id) + 1}`)}
                disabled={Number(id) === 114}
                className="bg-green-600 text-white hover:bg-green-700 px-5 py-2 rounded-lg disabled:opacity-50 cursor-pointer"
            >
                Next →
            </button>

        </div>
    </div>
  );
};

export default Page;