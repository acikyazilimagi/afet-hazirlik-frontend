import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            width={720}
            height={600}
            className="object-cover object-center rounded"
            alt="hero"
            src="/earthquake.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Deprem riskinde 4. sıradayız
          </h1>
          <p className="mb-8 leading-relaxed">
            1900’den günümüze meydana gelen büyük depremler bakımından Türkiye
            77 deprem ile dördüncü sırada yer almaktadır.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Hazırlığa başla
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Daha fazla bilgi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
