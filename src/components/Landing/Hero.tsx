import Image from "next/image";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Olası afetlere karşı
            <br className="hidden lg:inline-block" />
            hazırlıklı olun
          </h1>
          <p className="mb-8 leading-relaxed">
            Türkiye, pek çok afet türünün önemli sıklıkta yaşandığı bir ülke.
            Deprem, heyelan, sel, çığ gibi birçok doğa kaynaklı afetin yanı sıra
            jeopolitik konumu nedeniyle beşeri kaynaklı afet diyebile- ceğimiz
            insani krizlerle de sıkça karşı karşıya kalabiliyor.
          </p>
          <div className="flex justify-center">
            <Link
              href="/prepare/1-field-analysis"
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Hazırlığa başla
            </Link>
            <Link
              href="/info"
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              Daha fazla bilgi
            </Link>
          </div>
        </div>
        <div className="">
          <Image
            width={800}
            height={800}
            className="object-none object-center rounded"
            alt="hero"
            src="/city.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
