import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import SnowfallClient from "./components/snowfallclient";
import { Dancing_Script } from "next/font/google";

export const metadata: Metadata = {
  title: "Rovaniemi winter activities",
  description: "affordable winter activities in Rovaniemi",
};
const dancingScriptFont = Dancing_Script({
  subsets: ["latin"],
  weight: ["600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dancingScriptFont.className} relative min-h-screen text-white `}>
        
         <SnowfallClient />
        <div className="w-full  shadow">
          <Navbar/>
        </div>      
          <main className="pt-20 md:pt-24 pb-20 md:pb-24">{children}</main>
        <div className="w-full bg-black opacity-60 p-2">
          <Footer/>
        </div>
      </body>
    </html>
  );
}
