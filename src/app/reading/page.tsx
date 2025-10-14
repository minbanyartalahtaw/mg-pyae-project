export default function WhiskeyBarMembership() {
  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero Section */}
      <section className="bg-amber-100 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-700 mb-2 sm:mb-3">
            WHISKEY BAR & JAPANESE
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 mb-4 sm:mb-6">
            WASHOKU
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl italic text-gray-600 mb-6 sm:mb-8">
            The Reading Room
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto px-4">
            Home to over 150 Single Malts, Rare Casks and a food menu inspired
            by Japanese late-night snack bars. The Reading Room is a relaxed and
            fun whiskey bar, intended to be enjoyed late into the night. We
            specialize in single malts, whiskey highballs, classic cocktails and
            also have a large selection of gins, rums and tequilas.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Image Placeholder */}
            <div className="bg-gray-200 h-72 sm:h-80 md:h-96 lg:h-[500px] rounded-lg flex items-center justify-center shadow-md">
              <span className="text-gray-400 text-sm">Image Placeholder</span>
            </div>

            {/* Content Column */}
            <div className=" rounded-lg p-6 sm:p-8 md:p-10 ">
              <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed mb-6">
                The Reading Room is a whiskey bar that focuses on single malts,
                whiskey cocktails and the lost art of the whiskey highball. We
                aim to have the largest library of whiskeys available by the
                dram in the country.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
                We provide a limited number of whiskey lockers, where you can
                store up to 6 whiskey bottles at a time. This is perfect for
                those who love to collect, explore, enjoy and want to be a part
                of a club that is as excited about whiskey as you are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Content Column */}
            <div className=" rounded-lg p-6 sm:p-8 md:p-10 ">
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">
                Membership Benefits
              </h4>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                <li>
                  • Credit top-ups above 10L will receive a 10% bonus
                  <br />
                  <span className="ml-4 text-gray-600">
                    (e.g. 1,000,000kls top up will receive 1,100,000kls)
                  </span>
                </li>
                <li>
                  • 5% off all food orders from The Reading Room Menu
                  <br />
                  <span className="ml-4 text-gray-600">
                    (12 month members only)
                  </span>
                </li>
                <li>
                  • 5% Off Bottles Purchased at ILA - The Bottle Shop
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>• Reservations only for members</li>
                  </ul>
                </li>
                <li>
                  • Non-members may access the bar on a walk-in basis only (2
                  tables per evening)
                </li>
                <li>
                  • Members can make bookings for their family and friends
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>• Personalized plaque with name engraving on locker</li>
                    <li>• Store up to 6 liquor bottles per locker</li>
                  </ul>
                </li>
                <li>
                  • Reduced Minimum Spend for the Devi Private Dining Room
                  <br />
                  <span className="ml-4 text-gray-600">
                    (1,000,000kls for non members, 800,000kls for members)
                  </span>
                </li>
              </ul>
            </div>

            {/* Image Placeholder */}
            <div className="bg-gray-200 h-72 sm:h-80 md:h-96 lg:h-[500px] rounded-lg flex items-center justify-center shadow-md order-first lg:order-last">
              <span className="text-gray-400 text-sm">Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Image Placeholder */}
            <div className="bg-gray-200 h-72 sm:h-80 md:h-96 lg:h-[450px] rounded-lg flex items-center justify-center shadow-md order-2 lg:order-1">
              <span className="text-gray-400 text-sm">Image Placeholder</span>
            </div>

            {/* Contact Card */}
            <div className=" rounded-lg p-8 sm:p-10 md:p-14 lg:p-16 flex flex-col items-center justify-center text-center order-1 lg:order-2  min-h-[350px] sm:min-h-[400px]">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-amber-700 mb-2 sm:mb-3">
                CONTACT US FOR
              </h3>
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-serif text-amber-700 mb-8 sm:mb-12 md:mb-14">
                MEMBERSHIP INFO
              </h4>
              <button className="bg-green-700 hover:bg-green-600 text-white px-10 sm:px-12 md:px-14 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium transition-colors shadow-lg hover:shadow-xl">
                Hit us up!!
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
