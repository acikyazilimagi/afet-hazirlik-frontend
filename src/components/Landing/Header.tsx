import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <div className="text-white p-2 bg-indigo-500 rounded-full">
            <Image
              width={20}
              height={20}
              src="/check.png"
              className="mr-0"
              alt="logo"
            />
          </div>
          <span className="ml-3 text-xl">afethazirlik.com</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Anasayfa</a>
          <a className="mr-5 hover:text-gray-900">Hakkımızda</a>
          <a className="mr-5 hover:text-gray-900">S.S.S.</a>
          <a className="mr-5 hover:text-gray-900">Biz Kimiz</a>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Giriş Yap
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
