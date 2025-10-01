import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type props = {
  image: string;
  title: string;
  deks: string;
  link: string;
};

export default function EsktraKulikuler({ image, title, deks, link }: props) {
  // Jika link kosong, gunakan tag div. Jika ada, gunakan Link.
  const CardComponent = link ? Link : 'div';
  
  return (
    <CardComponent 
      href={link || '#'} 
      className="group relative w-full max-w-xl cursor-pointer overflow-hidden rounded-2xl shadow-lg aspect-[5/3]"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="z-0 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />

      <div className="absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-5 text-white">
        {/* Title selalu terlihat */}
        <h1 className="text-xl font-bold leading-tight transition-transform duration-300 ease-in-out group-hover:-translate-y-2 translate-y-15 flex justify-between">
          {title} <Instagram/>
        </h1>
        
        {/* Deskripsi yang akan muncul dari bawah saat di-hover */}
        <p className="transform text-sm leading-tight opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
          {deks}
        </p>
      </div>
    </CardComponent>
  );
}