"use client";
import { useEffect, useState } from "react";
import CurvedLoop from "../CurvedLoop";
export default function TitleSambutan() {
   const [scrolled, setScrolled] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY );
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
  return (
    <div className="relative flex justify-center items-center w-full z-0 p-4">
      <div className="absolute z-0 left-10 w-screen hidden lg:block  font-bold">
        <CurvedLoop
          marqueeText="Berbudaya ✦ Agamis ✦ Nasionalis ✦ Gotong Royong ✦ Kreatif ✦ Inspiratif ✦ Tangguh ✦ Berprestasi"
          speed={1}
          curveAmount={0}
          className="font-bold"
          interactive={false}
        />
      </div>
    </div>
  );
}
