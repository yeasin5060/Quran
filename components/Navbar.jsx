import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import { assets} from "@/assets/assets";

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-white sticky top-0 z-50 py-4">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* LEFT SIDE (Logo) */}
          <div className="flex items-center">
            <Link href="/" aria-label="Quran.com">
              <Image  alt="Logo" className="w-16 h-16 object-contain rounded-full"  src = {assets.logo}/>
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Sign In Button */}
            <Link href="/login">
              <button
                className="
                  hidden sm:inline-flex
                  px-3 py-1.5
                  text-sm font-medium
                  rounded-lg
                  bg-teal-600 text-white
                  hover:bg-teal-700
                  transition
                "
              >
                Sign in
              </button>
            </Link>

            {/* Language Button */}
            <button
              className="
                p-2 rounded-full
                hover:bg-gray-100
                transition
              "
              aria-label="Languages"
            >
              🌐
            </button>

            {/* Search Button */}
            <button
              className="
                p-2 rounded-full
                hover:bg-gray-100
                transition
              "
              aria-label="Search"
            >
              🔍
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar