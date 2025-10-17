import { AppIcon } from "@/components/app-icons";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-green-50">
      {/* Founder Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Image Placeholder */}
            <Image
              className="rounded-xl"
              alt="no"
              src="/images/aboutus1.jpeg"
              width={500}
              height={100}
            />

            {/* Founder Story */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 mb-2 sm:mb-3">
                Founder
              </h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif italic text-gray-700 mb-6 sm:mb-8">
                Mara Htang
              </h3>

              <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                <p>
                  &quot;For me, tea has always been more than a drink – it has
                  been a way of life. Growing up in Shan State, where tea
                  plantations stretched across the hills, I learned that tea
                  wasn &apos;t just about daily comfort, and a family tradition.
                  From childhood, no day ever truly began without that first
                  sip.
                </p>

                <p>
                  Surrounded by the rich tea culture of my hometown, I grew into
                  this role almost not a tea enthusiast, fascinated by the
                  flavors, aromas, and the sense of community that tea brings.
                  It became my deepest passion and dream: to create a space
                  where people could share the same warmth and heritage I
                  experienced every morning.
                </p>

                <p>
                  My café is the realization of that dream. It &apos;s built on
                  respect for the land, for the farmers, for the culture, of
                  tradition, and of connection. By sharing the authentic taste
                  of Burmese tea with the world, I hope to give others the same
                  comfort and joy that tea has always given me. &quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-start gap-3 mb-8 sm:mb-10">
            <div className="w-6 h-6 sm:w-8 sm:h-8 text-green-700 flex-shrink-0 mt-1">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Our Team
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            <p>
              Behind every cup of tea we serve is a team that shares one
              passion: bringing the finest Burmese tea and hospitality to the
              world. From our tea makers and chefs to our servers and hosts,
              each member of <span className="italic">our family</span> plays a
              role in creating the experience that makes our tea house special.
              We are more than coworkers – we are storytellers, culture-keepers,
              and most importantly, people dedicated to connect people. Our café
              &apos;s rich ethos rooted in tradition, and tea rituals perfect
              pairing cup with care, and our staff welcome each guest with the
              warmth and hospitality that Burmese tea houses are known for.
            </p>

            <p>
              Together, we create more than just a menu or service; we are
              united by one goal: to create a space where every single taste at
              home, and where the legacy of Burmese tea continues to thrive.
            </p>
          </div>
          <div className="bg-gray-200 h-96 sm:h-[450px] md:h-[500px] lg:h-[600px] rounded-lg flex items-center justify-center shadow-lg order-2 lg:order-1">
            <span className="text-gray-400 text-sm">Team Image</span>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-12 sm:py-16 md:py-20 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 sm:mb-10">
            Join Our Team!!
          </h2>

          <div className=" rounded-lg p-6 sm:p-8 md:p-10">
            <div className="flex items-start gap-3 mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                Contact Us
              </h3>
            </div>

            <p className="text-sm sm:text-base text-gray-700 mb-8 text-left leading-relaxed">
              We &apos;d love to hear from you — whether it &apos;s a question,
              feedback, or just to share your love for tea. Reach out to us
              anytime, and our team will be happy to connect with you.
            </p>

            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div>
                  <div className="flex item-center gap-2">
                    <AppIcon name="map" />
                    <h4 className="font-semibold text-gray-800 ">Address</h4>
                  </div>

                  <p className="text-sm sm:text-base text-gray-700">
                    123 Main Street, Sule Circle, Yangon, Myanmar
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div>
                  <div className="flex item-center gap-2">
                    <AppIcon name="phone" />
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700">
                    +95 9 123 456 789
                  </p>
                </div>
              </div>

              <div className="flex items-start ">
                <div>
                  <div className="flex item-center gap-2">
                    <AppIcon name="mail" />
                    <h4 className="font-semibold text-gray-800">Email</h4>
                  </div>
                  <p className="text-sm sm:text-base text-blue-600 hover:text-blue-700">
                    info@burmeseteahouse.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
