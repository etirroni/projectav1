import Link from "next/link";

export default function Home() {

  return (
    <div className="min-h-screen flex items-center justify-center  text-center overflow-hidden bg-gradient-to-b from-black/0  via-black/30 to-black/0">    

      {/* Hero Content */}
      <div className="z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 neon-text animate-fade-in">
          Your Arctic Adventure Awaits
        </h1>

        <p className="text-lg md:text-xl mb-8 text-gray-200 animate-fade-in-delay">
          Discover the unforgettable magic of Lapland — from glowing Northern Lights to peaceful reindeer rides.
          Let us help you find your perfect winter experience in Rovaniemi.
        </p>

        <div className="flex justify-center gap-4 animate-fade-in-delay-2">
          <Link
            href="/activities"
            className="bg-amber-400/90 hover:bg-amber-300 text-black px-6 py-3 rounded-full text-lg font-semibold transition-all shadow-md hover:shadow-amber-300/50"
          >
            Explore Activities
          </Link>
          <Link
            href="/contact"
            className="border border-amber-200 hover:bg-amber-200/10 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>     
    </div>
  );
}