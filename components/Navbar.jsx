'use client'
import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import { assets} from "@/assets/assets";
import { useClerk, useUser, UserButton } from '@clerk/nextjs';

const Navbar = () => {
  const {user} = useUser();
  const {openSignIn} = useClerk();
  return (
    <nav className="w-full border-b bg-white sticky top-0 z-50 py-4">
    <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6">
      <div className="flex items-center justify-between h-14 sm:h-16 gap-4">
        {/* LEFT SIDE LOGO */}
        <div className="flex items-center">
          <Link  href="/"  aria-label="Quran.com">
            <Image
              alt="Logo"
              className="w-14 h-14 object-contain rounded-full"
              src={assets.logo}
            />
          </Link>
        </div>

        {/* MIDDLE SEARCH */}
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <input type="text" placeholder="Search Surah..." className=" w-full border border-gray-100 rounded-full
                py-2.5 pl-12 pr-4 outline-none focus:ring-2 focus:ring-green-500 bg-gray-50"/>
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
              🔍
            </span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          {/* Language */}
          <button className=" p-2 rounded-full hover:bg-gray-100 transition">
            🌐
          </button>

          {/* Login */}
            <div>
              {
                user ?
                <>
                  <UserButton/>
                </>
                :
                <button onClick={openSignIn} className="px-4 py-2 text-sm font-medium rounded-lg bg-green-600 text-white hover:bg-green-700 transition capitalize cursor-pointer">
                  Login
                </button>
              }            
            </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar