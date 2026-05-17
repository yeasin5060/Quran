"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";


const Page = () => {

    const { id } = useParams();
    const router = useRouter();

    const [arabic, setArabic] = useState(null);
    const [english, setEnglish] = useState(null);
    const [audio, setAudio] = useState(null);
    const [currentAudio, setCurrentAudio] = useState(null);

    const [language, setLanguage] = useState("arabic");

    // FETCH SURAH
    const getSurah = async () => {
        const res = await fetch(
            `https://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,en.asad,ar.alafasy`
        );
        const data = await res.json();

        setArabic(data.data[0]);
        setEnglish(data.data[1]);
        setAudio(data.data[2]);
    };

    useEffect(() => {
        getSurah();
    }, [id]);

    const stopAudio = () => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
    };

     // LOADING
    if (!arabic || !english || !audio) {
        return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-xl font-semibold">
            Loading...
            </p>
        </div>
        );
    }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        {/* HEADER */}
        <div className="bg-white rounded-2xl shadow p-6 mb-6 text-center">
            <h1 className="text-4xl font-bold text-green-700 mb-2">
            {arabic.name}
            </h1>
            <h2 className="text-2xl font-semibold">
            {arabic.englishName} (<span>{arabic.englishNameTranslation}</span>)
            </h2>

            {/* LANGUAGE BUTTONS */}
            <div className="flex justify-center gap-4 mt-6">
                <button
                onClick={() => setLanguage("arabic")}
                className=" bg-green-600 text-white  px-5 py-2 rounded-full cursor-pointer">
                    Arabic
                </button>

                <button
                onClick={() => setLanguage("english")}
                className=" bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer">
                    English
                </button>
            </div>
        </div>

        {/* AYAHS */}
        <div className="space-y-4">
            {language === "arabic" &&
                arabic.ayahs.map((ayah, index) => (
                    <div key={ayah.number} className="bg-white rounded-xl shadow-sm p-5">
                        {/* TOP */}
                        <div className="flex justify-between items-center mb-4 gap-10">
                            {/* AYAH NUMBER */}
                            <span className=" bg-green-600 text-white  w-8 h-8 flex items-center justify-center  rounded-full text-sm">
                                {ayah.numberInSurah}
                            </span>
                           <div className="flex items-center justify-end gap-5">
                                {/* AUDIO BUTTON */}
                                <button onClick={() =>new Audio(audio.ayahs[index].audio).play()}  className=" bg-green-600 text-white px-4 py-1 rounded-full hover:bg-green-700 cursor-pointer">
                                        ▶ Play
                                </button>
                                {/* STOP */}
                                <button onClick={stopAudio} className="bg-red-600 text-white px-4 py-1 rounded-full cursor-pointer">
                                    ⏹ Stop
                                </button>
                           </div>
                        </div>

                        {/* ARABIC TEXT */}
                        <p className="text-3xl leading-loose text-right">
                            {ayah.text}
                        </p>
                    </div>

                ))
            }

            {language === "english" &&
                english.ayahs.map((ayah) => (
                    <div key={ayah.number} className="bg-white rounded-xl shadow-sm p-5 flex justify-between gap-10">
                        {/* ENGLISH TEXT */}
                        <p className="text-2xl leading-loose">
                            {ayah.text}
                        </p>
                        <div className="mb-4">
                            <span className=" bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm">
                            {ayah.numberInSurah}
                            </span>
                        </div>
                    </div>
                ))
            }
        </div>

      {/* NEXT / PREVIOUS */}
      <div className="fixed bottom-3 left-0 right-0 flex justify-between px-6 z-50">
        <button onClick={() => {router.push(`/surah/${Number(id) - 1}`);window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }}
          disabled={Number(id) === 1}
          
          className=" bg-white shadow-lg px-5 py-3 rounded-full  hover:bg-gray-100 cursor-pointer">
            ← Previous
        </button>
        <button
            onClick={() => {router.push(`/surah/${Number(id) + 1}`);window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }}
            disabled={Number(id) === 114}
            className="bg-green-600 text-white shadow-lg px-5 py-3 rounded-full hover:bg-green-700 cursor-pointer">
                Next →
        </button>
      </div>
    </div>
  );
};

export default Page;