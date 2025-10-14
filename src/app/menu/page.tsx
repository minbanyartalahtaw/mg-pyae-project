export default function Page() {
  return (
    <div className="min-h-screen bg-green-50">
      {/* Signature Specials Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Image Placeholder */}
            <div className="bg-gray-200 h-72 sm:h-80 md:h-96 lg:h-[450px] rounded-lg flex items-center justify-center shadow-md">
              <span className="text-gray-400 text-sm">Tea Image</span>
            </div>

            {/* Signature Specials Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">
                Signature Specials
              </h2>
              <ul className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                <li>
                  <span className="font-semibold">
                    • Traditional Burmese Milk Tea
                  </span>{" "}
                  - Strong black tea brewed with condensed and evaporated milk
                  for a sweet, creamy flavor.
                </li>
                <li>
                  <span className="font-semibold">• Green Tea Laphet</span> -
                  Smooth, lightly bitter green tea leaves served hot for a
                  refreshing traditional taste.
                </li>
                <li>
                  <span className="font-semibold">
                    • Laphet Thoke (Tea Leaf Salad)
                  </span>{" "}
                  - A Burmese classic made with fermented tea leaves, crunchy
                  nuts, and sesame seeds.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Favorites Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Featured Favorites Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">
                Featured Favorites
              </h2>
              <ul className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                <li>
                  <span className="font-semibold">• Iced Burmese Milk Tea</span>{" "}
                  - A chilled twist on the traditional hot milk tea, perfect for
                  warm days.
                </li>
                <li>
                  <span className="font-semibold">• Jasmine Green Tea</span> -
                  Fragrant and calming, a customer go-to for a light floral
                  flavor.
                </li>
                <li>
                  <span className="font-semibold">• Ginger Tea</span> - Spicy,
                  warming, and soothing – especially loved during rainy season.
                </li>
              </ul>
            </div>

            {/* Image Placeholder */}
            <div className="bg-gray-200 h-72 sm:h-80 md:h-96 lg:h-[450px] rounded-lg flex items-center justify-center shadow-md order-1 lg:order-2">
              <span className="text-gray-400 text-sm">Tea Image</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
