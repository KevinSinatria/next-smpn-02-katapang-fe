// Jangan lupa import galeriData
"use client";
import { albumData, galeriData } from "@/app/lib/galeri-data";
import Image from "next/image";
import Link from "next/link"; // Tambahkan untuk tombol kembali
import { use, useState } from "react";

interface Props {
  params: {
    slug: string;
  };
}

export default function GaleriSlug({ params }: Props) {
  const { slug } = use(params);
  const album = albumData.find((alb) => alb.slug === slug);

  const [selectedImage, setSelectedImage] = useState("");
  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };
  const closeImage = () => setSelectedImage("");

  if (!album) {
    return (
      <div className="text-center mt-40">
        <h1 className="text-2xl font-bold">Album Tidak Ditemukan</h1>
        <Link
          href="/galeri"
          className="text-blue-500 hover:underline mt-4 inline-block"
        >
          Kembali ke Galeri
        </Link>
      </div>
    );
  }
  const photosInAlbum = galeriData.filter(
    (photo) => photo.album_id === album.id
  );

  return (
    <>
      <div className="relative h-28 flex items-center justify-center text-white text-4xl font-bold mt-30">
        <Image
          src="/bgFooter.png"
          alt="Dekorasi Latar Belakang"
          fill
          className="object-cover absolute z-0"
          priority
        />
        <div className="flex flex-col items-center">
          <h1 className="z-10 w-full max-w-4xl text-center truncate px-4">
            Album: {album.name}
          </h1>
          <Link
            href="/galeri"
            className="z-10 text-[#FA6602] text-xl hover:scale-105 transition-all duration-300 mt-4 inline-block"
          >
            Kembali ke Beranda Galeri
          </Link>
        </div>
      </div>

      <div className="container mx-auto p-4 md:p-8 mt-12">
        {photosInAlbum.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {photosInAlbum.map((photo) => (
              <div
                key={photo.id}
                onClick={() => handleImageClick(photo.photo_url)}
                className="group relative w-full h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer"
              >
                <Image
                  src={photo.photo_url}
                  alt={photo.alt}
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
            <Link
              href="/galeri"
              className="text-blue-500 hover:underline mt-4 inline-block"
            >
              Kembali ke Galeri
            </Link>
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
