// components/GallerySlugClient.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Definisikan tipe datanya
type Photo = {
  id: number;
  photo_url: string;
};

type AlbumData = {
  name: string;
  description: string;
  photos: Photo[];
};

// Terima data yang sudah siap dari server melalui props
export default function GallerySlugClient({ album }: { album: AlbumData }) {
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };
  const closeImage = () => setSelectedImage("");

  return (
    <>
      <div className="relative h-20 flex items-center justify-center text-white text-4xl font-bold mt-30">
        <Image
          src="/bgFooter.png"
          alt="Kotak Dekorasi"
          width={900}
          height={400}
          className="h-auto w-full absolute z-0 md:-mt-32"
          priority
        />
        <div className="flex flex-col items-center">
          <h1 className="z-10 w-full md:text-3xl text-xl text-center truncate px-4">
            Album {album.name}
          </h1>
          <p className="z-10 md:w-full w-100 text-sm text-center px-4">
            {album.description}
          </p>
        </div>
      </div>
      <div className="flex justify-end mr-4 rounded-2xl">
        <Link
          href="/galeri"
          className="z-40 text-orange-100 font-bold bg-orange-500/90 hover:bg-orange-600 rounded-xl p-1 px-4 mt-10 text-xl hover:scale-105 transition-all duration-300"
        >
          Kembali
        </Link>
      </div>
      <div className="container mx-auto p-4 md:p-8">
        {album.photos && album.photos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {album.photos.map((photo: Photo) => (
              <div
                key={photo.id}
                onClick={() => handleImageClick(photo.photo_url)}
                className="group relative w-full h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer"
              >
                <Image
                  src={photo.photo_url}
                  alt={photo.id.toString()}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mt-10">
            <p className="text-xl">Album ini belum memiliki foto.</p>
          </div>
        )}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-opacity duration-300"
          onClick={closeImage}
        >
          <button
            onClick={closeImage}
            className="absolute top-4 right-6 text-white text-5xl font-bold hover:text-gray-300 z-50"
          >
            &times;
          </button>
          <div
            className="relative w-11/12 md:w-4/5 lg:w-3/4 h-5/6"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Gambar Penuh"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      )}
    </>
  );
}