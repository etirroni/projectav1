"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

export default function ActivityGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  // List your 6 gallery images here
  const images = [
    "/images/gallery01.png",
    "/images/gallery02.png",
    "/images/gallery03.png",
    "/images/gallery04.png",
    "/images/gallery05.png",
    "/images/gallery06.png",
  ];

  // Duplicate images once for seamless looping
  const loopedImages = [...images, ...images];

 useEffect(() => {
  const container = containerRef.current;
  if (!container) return;

  let scrollAmount = 0;
  const scrollSpeed = 0.3;
  let frameId: number;

  const loop = () => {
    scrollAmount += scrollSpeed;
    if (scrollAmount >= container.scrollWidth / 2) scrollAmount = 0;
    container.scrollLeft = scrollAmount;
    frameId = requestAnimationFrame(loop);
  };

  frameId = requestAnimationFrame(loop);
  return () => cancelAnimationFrame(frameId);
}, []);

  return (
    <div
      ref={containerRef}
      className="relative flex overflow-x-hidden w-full will-change-scroll"
    >
      {loopedImages.map((src, index) => (
        <div
          key={index}
          className="relative flex-shrink-0 w-[80vw] md:w-[400px] h-[200px] md:h-[260px] overflow-hidden"
        >
          <Image
            src={src}
            alt={`Activity ${index + 1}`}
            fill
            className="object-cover"
            priority={index < 3}
          />
        </div>
      ))}

      
    </div>
  );
}