import Image from "next/image";
import React from "react";
import Link from "next/link";

const Section4 = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            width={720}
            height={600}
            className="object-cover object-center rounded"
            alt="hero"
            src="/avalanche.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Yükselti ve mevsimsel etki çığ olaylarında belirleyici
          </h1>
          <p className="mb-8 leading-relaxed">
            1950 yılından günümüze meydana gelen çığ olayları incelendiğinde
            Bingöl 274 olay ile ilk sırada yer almaktadır. Bunu 265 çığ ile
            Bitlis, 168 çığ ile Tunceli ve 81 çığ ile Malatya takip etmektedir.
            Bu dört ilde meydana gelen çığlar, toplam çığların yüzde 49 gibi
            önemli bir bölümünü oluşturmuştur.
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
      </div>
    </section>
  );
};

export default Section4;
