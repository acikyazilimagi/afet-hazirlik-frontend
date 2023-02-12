import React from "react";
import Image from "next/image";
const Section3 = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Sel ve su baskınları
          </h1>
          <p className="mb-8 leading-relaxed">
            1950 yılından günümüze kadar meydana gelen sel/su baskını
            olaylarının dağılımı incelendiğinde Erzurum’un 425 olayla ilk sırada
            yer aldığı görülmektedir. Bunu 315 olayla Sivas, 265 olayla Van ve
            247 olayla Bitlis takip etmektedir. Buna karşın Uşak, Kilis, Yalova
            gibi illerde ise oldukça az sayıda sel/su baskını olayı meydana
            gelmiştir.
          </p>
          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
              <label
                htmlFor="hero-field"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Abone ol
            </button>
          </div>
          <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
            Bültene abone olmak için mail adresinizi girin.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            width={720}
            height={600}
            className="object-cover object-center rounded"
            alt="hero"
            src="/flood.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Section3;
