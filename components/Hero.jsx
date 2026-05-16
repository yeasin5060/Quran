import React from 'react'

const Hero = () => {
  return (
     <div className="w-full px-4 py-10 md:py-16 flex flex-col items-center justify-center text-center">

      {/* Logo */}
      <div className="mb-6">
        <h1 className='text-4xl font-bold text-black'>Quran.com</h1>
      </div>

      {/* Search Box */}
      <div className="w-full max-w-xl">
        <form className="flex items-center bg-gray-100 rounded-full px-4 py-3 shadow-sm">
          
          {/* Search Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-500 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="m23.5 21.466-7.01-7.01a9.07 9.07 0 0 0 1.736-5.343C18.226 4.088 14.138 0 9.113 0S0 4.088 0 9.113s4.088 9.113 9.113 9.113a9.07 9.07 0 0 0 5.343-1.735l7.01 7.009z" />
          </svg>

          {/* Input */}
          <input
            type="search"
            placeholder="Search the Quran..."
            className="flex-1 bg-transparent outline-none text-sm md:text-base"
          />

          {/* Mic Button */}
          <button type="button" className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-500"
              viewBox="0 0 24 24"
            >
              <path d="M12.304 14.946a3.573 3.573 0 0 0 3.558-3.566V3.566A3.573 3.573 0 0 0 12.304 0a3.573 3.573 0 0 0-3.56 3.566v7.814a3.573 3.573 0 0 0 3.56 3.566" />
            </svg>
          </button>
        </form>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full max-w-md">
        
        {/* Navigate Button */}
        <button className="flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full w-full transition">
          <span>📖</span>
          <span className="text-sm md:text-base">Navigate Quran</span>
        </button>

        {/* Popular Button */}
        <button className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full w-full transition">
          <span>🔥</span>
          <span className="text-sm md:text-base">Popular</span>
        </button>

      </div>
    </div>
  )
}

export default Hero