// components/BodyGaleri.tsx

import Image from "next/image";
import Link from "next/link";
import React from "react";

const galleryImages = [
  {
    id: 0,
    album_id: 0,
    photo_url: "/galeriBeranda/gambar1.png",
    alt: "Gambar 1",
    created_at: "2019-08-24T14:15:22Z",
    updated_at: "2019-08-24T14:15:22Z",
  },
  {
    id: 1,
    album_id: 1,
    photo_url: "/galeriBeranda/gambar2.png",
    alt: "Gambar 2",
    created_at: "2019-08-24T14:15:22Z",
    updated_at: "2019-08-24T14:15:22Z",
  },
  {
    id: 2,
    album_id: 2,
    photo_url: "/galeriBeranda/gambar3.png",
    alt: "Gambar 3",
    created_at: "2019-08-24T14:15:22Z",
    updated_at: "2019-08-24T14:15:22Z",
  },
  {
    id: 3,
    album_id: 3,
    photo_url: "/galeriBeranda/gambar4.png",
    alt: "Gambar 4",
    created_at: "2019-08-24T14:15:22Z",
    updated_at: "2019-08-24T14:15:22Z",
  },
  {
    id: 4,
    album_id: 4,
    photo_url: "/galeriBeranda/gambar5.png",
    alt: "Gambar 5",
    created_at: "2019-08-24T14:15:22Z",
    updated_at: "2019-08-24T14:15:22Z",
  },
  {
    id: 5,
    album_id: 5,
    photo_url: "/galeriBeranda/gambar6.png",
    alt: "Gambar 6",
    created_at: "2019-08-24T14:15:22Z",
    updated_at: "2019-08-24T14:15:22Z",
  },
  {
    id: 7,
    album_id: 7,
    photo_url: "/galeriBeranda/gambar8.png",
    alt: "Gambar 8",
    created_at: "2019-08-24T14:15:22Z",
    updated_at: "2019-08-24T14:15:22Z",
  },
  {
    id: 8,
    album_id: 8,
    photo_url: "/galeriBeranda/gambar9.png",
    alt: "Gambar 9",
    created_at: "2019-08-24T14:15:22Z",
    updated_at: "2019-08-24T14:15:22Z",
  },
  
];

export default function BodyGaleri() {
  return (
    <section className="w-full px-4 py-12 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={image.photo_url}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
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
    </section>
  );
}
