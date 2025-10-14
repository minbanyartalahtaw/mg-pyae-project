export default function Home() {
  return (
    <main className="max-w-md mx-auto px-6 py-12">
      {/* Visit Us Section */}
      <div className="mb-12 flex justify-center">
        <div className="border-2 border-dashed border-purple-300 rounded-lg p-8 inline-block">
          <a
            href="/home"
            className="text-lg font-semibold text-gray-800 underline hover:text-purple-600 transition-colors">
            Visit Us &gt;&gt;
          </a>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="border-2 border-dashed border-purple-300 rounded-lg p-8">
        <div className="space-y-4">
          {/* First Button - Solid Green */}
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-full transition-colors">
            Subscribe Now!
          </button>

          {/* Second Button - Text Only */}
          <button className="w-full text-green-500 hover:text-green-600 font-medium py-3 px-6 transition-colors">
            Subscribe Now!
          </button>

          {/* Third Button - Muted Green */}
          <button className="w-full bg-green-400 hover:bg-green-500 text-white font-medium py-3 px-6 rounded-full transition-colors opacity-80">
            Subscribe Now!
          </button>
        </div>
      </div>
    </main>
  );
}
