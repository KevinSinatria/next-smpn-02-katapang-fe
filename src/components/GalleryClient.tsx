// components/GalleryClient.tsx
"use client"; // Menandakan ini adalah Client Component

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Definisikan tipe data lagi di sini
type Album = {
  id: number;
  thumbnail_url: string;
  name: string;
  description: string;
  slug: string;
};

export default function GalleryClient({
  initialData,
}: {
  initialData: Album[];
}) {
  const dataAlbum = initialData;
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };
  const closeImage = () => setSelectedImage("");

  return (
    <section className="w-full px-3 py-12 md:px-50">
      <div className="mx-auto max-w-8xl">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dataAlbum.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => handleImageClick(image.thumbnail_url)}
            >
              {image.thumbnail_url ? (
                <Image
                  src={image.thumbnail_url}
                  alt={image.name}
                  fill
                  priority
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              ) : (
                // Ini adalah placeholder jika gambar tidak ada
                <div className="flex h-full w-full items-center justify-center bg-gray-200">
                  <span className="text-sm text-gray-500">No Image</span>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex w-full justify-end items-center">
          <Link
            href={"/galeri"}
            className="bg-[#F96701] hover:bg-[#F94700] text-white px-4 py-2 rounded-md mt-8"
          >
            Lebih lanjut galeri
          </Link>
        </div>
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
    </section>
  );
}
