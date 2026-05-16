import React from 'react'
import Link from "next/link";

const Header = () => {
  return (
    
    <div className="w-full">
      {/* NavbarBody_bannerContainerTop */}
      <div className="w-full border-b border-teal-200 bg-teal-50">
        
        {/* Banner_container */}
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6">
          
          <div
            data-testid="banner"
            className="
              flex flex-col items-center justify-between
              gap-2 py-2

              sm:flex-row sm:gap-4
            "
          >
            {/* Banner_text */}
            <div className="text-center sm:text-left">
              <span
                className="
                  text-xs sm:text-sm md:text-base
                  font-medium text-gray-800
                "
              >
                Grow Beyond Ramadan!
              </span>
            </div>

            {/* CTA */}
            <Link
              href="/beyond-ramadan"
              aria-label="Learn more"
              className="
                inline-flex items-center gap-1.5

                text-xs sm:text-sm md:text-base
                font-semibold text-teal-700

                transition duration-200
                hover:text-teal-900

                focus:outline-none focus:ring-2 focus:ring-teal-400
              "
            >
              {/* Icon */}
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 15"
                  fill="none"
                  className="h-3 w-3 sm:h-4 sm:w-4"
                >
                  <path
                    fill="currentColor"
                    d="M0 7.5q.22-.096.61-.287.39-.192 1.447-.875a17 17 0 0 0 1.947-1.463 9 9 0 0 0 1.072-1.121q.508-.63.845-1.183a23 23 0 0 0 .594-1.032 8 8 0 0 0 .368-.752L7.008.5q.03.109.11.294.077.185.36.731.281.547.601 1.06.321.513.845 1.155.525.643 1.087 1.135.876.78 1.877 1.436 1.002.655 1.565.916L14 7.5q-.22.096-.61.294t-1.447.875q-1.056.676-1.932 1.456a9.4 9.4 0 0 0-1.08 1.121q-.514.63-.852 1.183-.336.553-.594 1.032t-.368.752l-.11.287-.124-.294a14 14 0 0 0-.36-.731 15 15 0 0 0-.602-1.06 12 12 0 0 0-.837-1.155 9 9 0 0 0-1.08-1.135 17 17 0 0 0-1.9-1.436q-1.01-.656-1.54-.922Q.031 7.5 0 7.5"
                  />
                </svg>
              </span>

              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header