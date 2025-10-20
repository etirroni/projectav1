import Image from "next/image";


export default function About() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Snowfall overlay */}

      <div className="flex flex-col items-center gap-16 p-8">
        {/* Hero / Profile Section */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-8 animate-fade-in">
          {/* Floating Profile Image */}
          <div className="md:w-1/2 bg-black/60 rounded-full overflow-hidden p-2 relative animate-float">
            <Image
              src="/projectav1/images/profiilikuva.png"
              width={500}
              height={500}
              alt="Profile picture"
              className="rounded-full"
            />
          </div>

          {/* Intro Text */}
          <div className="md:w-1/2 p-6 bg-black/60 rounded-2xl">
            <h1 className="text-4xl mb-4 neon-text">About Us</h1>
            <p className="text-lg leading-relaxed">
              Welcome to Arctic Adventures! We are a small Rovaniemi-based tourism company with years of experience
              in creating unforgettable winter journeys. We specialize in tailored Arctic experiences,
              combining local knowledge with exceptional customer service to make every trip magical.
            </p>
             <p className="text-lg leading-relaxed mt-2">
              From private tours to small group adventures, our expertise in Rovaniemi’s winter
              activities ensures safety, comfort, and unforgettable memories for all visitors at affordable prices.
            </p>
          </div>
        </div>

        {/* Values / Features Section */}
        <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl animate-fade-in ">
          <div className="p-6 bg-black/50 rounded-xl text-center hover:scale-105 transition-transform">
            <h1 className="text-3xl mb-2 neon-text">Local Experties</h1> 
            <p className="mb-2">Years of experience in tourism and Arctic adventures in Rovaniemi</p>
            <p>All our guides have worked in tourism at Rovaniemi over 5 years!</p>
          </div>
          <div className="p-6 bg-black/50 rounded-xl text-center hover:scale-105 transition-transform">
            <h1 className="text-3xl mb-2 neon-text">Personalized Services</h1>
            <p className="mb-2">Witness the magical Northern Lights in Rovaniemi with your conditions</p>
            <p>Tours and activities can be made 100% to your requests!</p>
          </div>
          <div className="p-6 bg-black/50 rounded-xl text-center hover:scale-105 transition-transform">
            <h1 className="text-3xl mb-2 neon-text">Trusted & Reliable</h1>
            <p className="mb-2">Recognized for excellent customer service and high-quality winter adventures.</p>
            <p>As a small business, happy and satisfied customer is our most important selling point! </p>
          </div>
        </div>
      </div>
    </div>
  );
}