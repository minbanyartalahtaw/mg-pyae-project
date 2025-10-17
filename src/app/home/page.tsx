import Image from "next/image";

export default function Page() {
  return (
    <>
      <section className="relative bg-cream-50 py-8 md:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12">
            {/* Tea Plantation Image */}
            <Image
              className="rounded-xl"
              src={"/images/home1.jpg"}
              alt="noimage found"
              width={500}
              height={100}
            />

            {/* Text Content */}
            <div className="w-full md:flex-1">
              <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-serif italic text-gray-700 mb-3 md:mb-4">
                &quot;Sip the heritage –<br />
                Burmese tea leaves, shared
                <br />
                with the world. &quot;
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Nar ha is farmed in the hills of Myanmars Shan State, in
                partnership with smallholder farmers who possess generations of
                tea-growing knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 py-8 md:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12">
            Burmese Tea Shop Culture
          </h2>

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {/* Outlet */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <div className="w-full md:flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 md:mb-2">
                  Outlet
                </h3>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <Image
                    className="rounded-xl"
                    src={"/images/home2.jpg"}
                    alt="noimage found"
                    width={250}
                    height={100}
                  />{" "}
                  <Image
                    className="rounded-xl"
                    src={"/images/home3.jpg"}
                    alt="noimage found"
                    width={250}
                    height={100}
                  />
                </div>
              </div>
              <div className="w-full md:flex-1 bg-green-100 rounded-lg p-4 sm:p-5 md:p-6">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <span className="font-semibold">
                    &quot;In Myanmar, tea is more than a drink – it&apos;s a way
                    of life.
                  </span>{" "}
                  From sweet milk tea at lively roadside shops to the famous
                  fermented tea leaf salad, Burmese tea culture embodies
                  community, hospitality, and tradition. &quot;
                </p>
              </div>
            </div>

            {/* Taunggyi (1960) */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <div className="w-full md:flex-1 bg-green-100 rounded-lg p-4 sm:p-5 md:p-6 order-2 md:order-1">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 md:mb-3">
                  Taunggyi (1960)
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  &quot;After returning from university, our dad very first shop
                  in <span className="font-semibold">Taunggyi</span>, the
                  highland city of Shan State. Surrounded by rolling tea
                  plantations, we introduced the delicate taste of Burmese tea
                  to our community – a tradition that continues today. &quot;
                  <span className="block mt-2 text-xs sm:text-sm italic">
                    VAN MIN
                  </span>
                </p>
              </div>
              <div className="w-full md:flex-1 order-1 md:order-2">
                <Image
                  className="rounded-xl"
                  src={"/images/home3.jpg"}
                  alt="noimage found"
                  width={500}
                  height={100}
                />
              </div>
            </div>

            {/* Yangon (2007) */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <div className="w-full md:flex-1">
                <Image
                  className="rounded-xl"
                  src={"/images/home4.jpg"}
                  alt="noimage found"
                  width={500}
                  height={100}
                />
              </div>
              <div className="w-full md:flex-1 bg-green-100 rounded-lg p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 md:mb-3">
                  Yangon (2007)
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  &quot;In 2007, we opened our second shop in the heart of{" "}
                  <span className="font-semibold">Yangon</span> at Sule Pagoda
                  Road. Located in the city&apos;s most vibrant energy, we
                  brought the warmth of Burmese tea culture to a bustling urban
                  setting. &quot;
                  <span className="block mt-2 text-xs sm:text-sm italic">
                    VAN MIN
                  </span>
                </p>
              </div>
            </div>

            {/* Bangkok (2023) */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <div className="w-full md:flex-1 bg-green-100 rounded-lg p-4 sm:p-5 md:p-6 order-2 md:order-1">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 md:mb-3">
                  Bangkok (2023)
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  &quot;Expanding were international in 2023, our third shop
                  opened in <span className="font-semibold">Bangkok</span>. shop
                  Bringing authentic Burmese tea to Royal, we have successfully
                  introduced the city to the rich flavors and traditions of
                  Myanmar tea culture. &quot;
                  <span className="block mt-2 text-xs sm:text-sm italic">
                    VAN MIN
                  </span>
                </p>
              </div>
              <div className="w-full md:flex-1 order-1 md:order-2">
                <Image
                  className="rounded-xl"
                  src={"/images/home6.jpg"}
                  alt="noimage found"
                  width={400}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
