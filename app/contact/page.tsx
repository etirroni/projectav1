

import { FaInstagram, FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col items-center text-white px-6 md:px-12">
     
      {/* Page Hero */}
      <section className="w-full max-w-4xl text-center mt-20 md:mt-32 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 neon-text">Contact & Booking</h1>
        <p className="text-lg md:text-xl text-gray-200">
          We’re here to make your Arctic adventures come true! Reach out to us via social media or the channels below.
        </p>
      </section>

      {/* Contact Channels */}
      <section className="w-full max-w-4xl grid md:grid-cols-2 gap-8 mt-12 animate-fade-in-delay p-6 bg-black/50 rounded-2xl animate-fade-in">
        <div className="flex flex-col items-center gap-4">
          <FaEnvelope size={32} className="text-amber-400" />
          <p>Email us directly:</p>
          <a href="mailto:info@arcticadventures.com" className="hover:text-amber-300 transition-colors">
            info@arcticadventures.com
          </a>
        </div>

        <div className="flex flex-col items-center gap-4">
          <FaPhone size={32} className="text-amber-400" />
          <p>Call or WhatsApp:</p>
          <a href="tel:+358000000000" className="hover:text-amber-300 transition-colors">
            +358 000 000 000
          </a>
        </div>

        <div className="flex flex-col items-center gap-4">
          <FaInstagram size={32} className="text-amber-400" />
          <p>Follow us on Instagram:</p>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
            @yourprofile
          </a>
        </div>

        <div className="flex flex-col items-center gap-4">
          <FaFacebook size={32} className="text-amber-400" />
          <p>Follow us on Facebook:</p>
          <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
            Arctic Adventures
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 md:col-span-2">
          <p>Check us on GetYourGuide:</p>
          <a href="https://www.getyourguide.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors underline">
            Our GetYourGuide Profile
          </a>
        </div>
      </section>

      {/* Booking Info Section */}
      <section className="w-full max-w-4xl mt-12 p-6 bg-black/50 rounded-2xl text-center animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Booking Info</h2>
        <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
          We currently don’t have our own booking system, but it’s on the way!  
          Meanwhile, please use the channels above to tell us your wishes, and we’ll make your Arctic adventures come true.
        </p>
      </section>
    </div>
  );
}