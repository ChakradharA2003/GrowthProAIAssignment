import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="bg-transparent fixed w-full z-10 p-4 flex justify-between items-center shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center space-x-4">
        <img
          src="https://www.growthproai.com/images/logo.svg"
          width={45}
          height={45}
          className="object-contain md:w-12 md:h-12 w-10 h-10"
        />
        <h1 className="text-2xl font-bold text-green-700 animate-fade-in md:text-2xl text-lg"> 
          SEO Dashboard
        </h1>
      </div>

      <div className="flex justify-center flex-grow">
        <div className="bg-green-100 p-2 rounded-lg animate-pulse-slow md:p-3 p-2"> 
          <span className="text-green-600 font-semibold md:text-base text-sm"> 
            GrowthPro AI
          </span>
        </div>
      </div>

      <div className="flex space-x-4 items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 bg-green-50 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-green-500 text-gray-800 placeholder-gray-600 text-sm transition-all duration-300 animate-slide-up md:block hidden" // Hidden below 500px
          />
          <button className="absolute right-3 top-2 bg-transparent border-none cursor-pointer md:block hidden"> {/* Hidden below 500px */}
            <img src="../search-icon.gif" alt="Search" className="w-5 h-5" />
          </button>
        </div>
        <button className="text-gray-600 hover:text-green-700 transition-colors duration-300 md:block hidden"> {/* Hidden below 500px */}
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;