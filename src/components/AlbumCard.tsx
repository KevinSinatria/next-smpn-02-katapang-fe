"use client";
import Image from "next/image";
import Link from "next/link";
type AlbumCard = {
  imageUrl: string;
  title: string;
  description: string;
  slug: string;
};

export default function AlbumCard({
  imageUrl,
  title,
  description,
  slug,
}: AlbumCard) {
  return (
    <Link
      href={`/galeri/${slug}`}
      className="group relative w-full max-w-lg cursor-pointer overflow-hidden rounded-2xl shadow-lg aspect-[5/3]"
    >
      <Image
        src={imageUrl}
        alt={slug}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="z-0 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-5 text-white">
        <h1 className="flex items-center gap-3 text-lg font-bold leading-tight transition-transform duration-300 ease-in-out group-hover:-translate-y-2 translate-y-16">
          {title}
          {description}
        </h1>
        <p className="transform text-sm leading-tight opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
        </p>{" "}
      </div>{" "}
    </Link>
  );
}
