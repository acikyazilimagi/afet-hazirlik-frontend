import React from "react";

const Section1 = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Türkiye’de, ortalama beş yılda bir, büyük bir deprem meydana
            gelmektedir.
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Geçmişten günümüze yaşanan depremler istatistiksel açıdan
            değerlendirildiğinde; Türkiye’de ortalama olarak beş yılda bir geniş
            çapta can ve mal kaybına neden olan büyük bir depremin yaşandığı
            görülmektedir. Bu depremler nedeniyle yılda ortalama olarak yaklaşık
            1.000 kişinin hayatını kaybettiği ve 2.100 kişinin de yaralandığı;
            yine ortalama 7 binden fazla binanın depremler nedeniyle yıkıldığı
            ya da ağır derecede hasar gördüğü raporlanmıştır. (Kaynak: AFAD 2011
            Van Depremi Raporu)
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                viewBox="0 -1 20 20"
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
              >
                <g id="flood" transform="translate(-2 -3)">
                  <path
                    id="primary"
                    d="M4,9.71,12,4l8,5.71"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <path
                    id="primary-2"
                    data-name="primary"
                    d="M18,16V8.29m-12,0V16"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <path
                    id="primary-3"
                    data-name="primary"
                    d="M3,19.5c1.5,0,1.5.5,3,.5s1.5-.5,3-.5,1.5.5,3,.5,1.5-.5,3-.5,1.5.5,3,.5,1.5-.5,3-.5"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <path
                    id="primary-4"
                    data-name="primary"
                    d="M3,15.5c1.5,0,1.5.5,3,.5s1.5-.5,3-.5,1.5.5,3,.5,1.5-.5,3-.5,1.5.5,3,.5,1.5-.5,3-.5"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </g>
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                107
              </h2>
              <p className="leading-relaxed">Sel/su baskını</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 512 512"
              >
                <g>
                  <path
                    fill="currentColor"
                    d="M485.633,337.574l-33.216-37.178c-10.143-11.355-28.993-4.133-28.993,11.065v48.25c0,3.052-2.483,5.536-5.536,5.536
			s-5.536-2.483-5.536-5.536v-26.228c0-17.303-4-34.357-11.469-49.803h1.738c14.738,0,22.199-17.895,11.743-28.351l-87.904-87.904
			h36.068c14.738,0,22.199-17.895,11.743-28.351L241.409,6.212c-6.485-6.485-17.001-6.485-23.487,0L85.06,139.074
			c-10.425,10.425-3.038,28.351,11.743,28.351h36.068L44.97,255.327c-10.425,10.425-3.038,28.351,11.743,28.351h36.068
			L4.878,371.582c-10.425,10.425-3.038,28.351,11.743,28.351h163.223v94.111c0,9.172,7.436,16.608,16.608,16.608h66.431
			c9.172,0,16.608-7.436,16.608-16.608c0-10.599,0-81.82,0-94.111h0.115c-2.859,56.123,49.43,110.719,116.139,110.719
			c64.585,0,116.254-51.33,116.254-106.653C512,367.509,486.716,338.786,485.633,337.574z M246.275,477.436H213.06v-77.503h33.216
			V477.436z M305.86,337.573c-0.665,0.745-10.588,12.022-18.066,29.143c-1.293,0.001-226.333,0.001-231.077,0.001l87.903-87.904
			c10.425-10.425,3.038-28.351-11.743-28.351H96.809l87.903-87.904c10.425-10.425,3.038-28.351-11.743-28.351h-36.068l92.768-92.768
			l92.768,92.768h-36.068c-14.738,0-22.199,17.895-11.743,28.351l64.199,64.199c-5.392-2.064-10.942-3.747-16.623-4.975
			l-0.456-0.099c-7.033-1.515-14.238,1.665-17.856,7.882c-3.617,6.216-2.822,14.055,1.97,19.418
			c0.179,0.2,17.921,20.716,17.921,44.294C323.781,316.897,305.995,337.42,305.86,337.573z M395.745,477.436
			c-46.564,0-83.039-36.786-83.039-73.437c0-15.767,8.566-33.595,17.922-44.295c1.076-1.205,26.365-29.932,26.365-66.423
			c0-5.954-0.672-11.7-1.805-17.155c14.872,14.862,23.948,35.336,23.948,57.358v26.228c0,21.368,17.384,38.751,38.751,38.751
			c21.368,0,38.751-17.384,38.751-38.751v-4.733l4.223,4.728c0.179,0.2,17.921,20.717,17.921,44.294
			C478.784,440.615,442.342,477.436,395.745,477.436z"
                  />
                </g>
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                66
              </h2>
              <p className="leading-relaxed">Orman yangını</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="currentColor"
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M23,12a1,1,0,0,1-1,1H18.414l2.293,2.293a1,1,0,0,1-1.414,1.414L15.586,13H13v2.586l3.707,3.707a1,1,0,0,1-1.414,1.414L13,18.414V22a1,1,0,0,1-2,0V18.414L8.707,20.707a1,1,0,1,1-1.414-1.414L11,15.586V13H8.414L4.707,16.707a1,1,0,0,1-1.414-1.414L5.586,13H2a1,1,0,0,1,0-2H5.586L3.293,8.707A1,1,0,1,1,4.707,7.293L8.414,11H11V8.414L7.293,4.707A1,1,0,1,1,8.707,3.293L11,5.586V2a1,1,0,0,1,2,0V5.586l2.293-2.293a1,1,0,1,1,1.414,1.414L13,8.414V11h2.586l3.707-3.707a1,1,0,1,1,1.414,1.414L18.414,11H22A1,1,0,0,1,23,12Z" />
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                16
              </h2>
              <p className="leading-relaxed">Kar/tipi</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="currentColor"
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 304.428 304.428"
              >
                <g>
                  <g>
                    <polygon
                      points="304.428,290.78 192.408,216.411 166.649,216.995 159.753,189.147 122.766,167.54 124.503,117.125 66.696,89.945 
			56.025,41.215 0,13.648 0,290.78 		"
                    />
                  </g>
                  <g>
                    <polygon points="127.064,27.676 97.334,49.67 121.223,81.832 121.223,81.832 178.161,81.832 178.161,41.671 		" />
                  </g>
                  <g>
                    <polygon points="179.215,116.416 164.833,147.004 206.817,168.456 207.726,139.461 		" />
                  </g>
                  <g>
                    <path d="M235.93,199.49l-14.252,12.685l21.204,20.494c0.023,0.031,0.041,0.06,0.063,0.09l16.106-20.584L235.93,199.49z" />
                  </g>
                </g>
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                39
              </h2>
              <p className="leading-relaxed">Heyelan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
