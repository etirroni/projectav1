import ActivityGallery from "../components/gallery";

export default function Activities() {
  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col items-center">
      {/* Hero Section with Gallery Background */}
      <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden animate-fade-in">
        {/* Gallery Background */}
        <div className="absolute inset-0 -z-10">
          <ActivityGallery />
        </div>

        {/* Overlay Text */}
        <div className="relative z-10 text-center max-w-3xl px-6 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg neon-text">
            Our Arctic Adventures
          </h1>
          <p className="text-lg md:text-xl leading-relaxed bg-black/40 p-4 rounded-xl">
            Explore the wonders of Lapland through curated experiences — from
            thrilling snowmobile safaris to peaceful reindeer and husky rides.
            Each moment is crafted to capture the magic of the Arctic.
          </p>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-6 md:p-10 mt-12 bg-black/60 rounded-2xl w-full max-w-5xl text-center backdrop-blur-md animate-fade-in">
        <p className="text-lg leading-relaxed">
          Whether you’re chasing the Northern Lights, relaxing in a lakeside
          sauna, or venturing through snowy wilderness, our experienced local
          guides ensure your adventure is safe, authentic, and unforgettable.
        </p>
      </div>

      {/* Fun Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-16 mb-20 px-6 animate-fade-in">
        {[
          { icon: "❄️", number: "50+", label: "Winter Tours" },
          { icon: "🌌", number: "100+", label: "Happy Guests" },
          { icon: "🦌", number: "25+", label: "Unique Experiences" },
        ].map((stat, index) => (
          <div
            key={index}
            className="p-6 bg-black/50 rounded-xl text-center hover:scale-105 transition-transform backdrop-blur-sm animate-fade-in"
          >
            <div className="text-5xl mb-2 neon-text">{stat.icon}</div>
            <h3 className="text-3xl font-bold mb-1">{stat.number}</h3>
            <p className="text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}