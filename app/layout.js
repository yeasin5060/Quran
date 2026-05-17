import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { SurahProvider } from "@/context/SurahContext";
import { Toaster } from "react-hot-toast";
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { ClerkProvider } from "@clerk/nextjs";


const outfit = Outfit({
  subsets: ["latin"], weight : ['400' , '500' ,'600' , '700']
});

const ovo = Ovo({
  subsets: ["latin"], weight : ['400']
});


export default function RootLayout({children}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${outfit.className} ${ovo.className} antialiased`} >
        <body className="min-h-full flex flex-col">
          <Toaster />
          <Header/>
          <Navbar/>
          <SurahProvider>
            {children}
          </SurahProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
