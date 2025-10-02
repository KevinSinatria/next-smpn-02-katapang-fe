"use client";
import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
type EkstrakurikulerCardProps = {
  image: string;
  title: string;
  deks: string;
  link?: string;
};

export default function EkstrakurikulerCard({
  image,
  title,
  deks,
  link,
}: EkstrakurikulerCardProps) {
  const CardWrapper = link ? Link : "div";

  const showInstagramIcon = link && link.includes("instagram.com");

  return (
    <CardWrapper
      href={link || "#"}
      className="group relative w-full max-w-xl cursor-pointer overflow-hidden rounded-2xl shadow-lg aspect-[5/3]"
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="z-0 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />{" "}
      <div className="absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-5 text-white">
        {" "}
        <h1 className="flex items-center gap-3 text-xl font-bold leading-tight transition-transform duration-300 ease-in-out group-hover:-translate-y-2 translate-y-16">
          {title} {showInstagramIcon && <Instagram size={20} />}{" "}
        </h1>{" "}
        <p className="transform text-sm leading-tight opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
          {deks}{" "}
        </p>{" "}
      </div>{" "}
    </CardWrapper>
  );
}
