// Jangan lupa import galeriData
"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useState } from "react";
type Photo = {
  id: number;
  name: string;
  photos: string;
  photo_url: string;
  description: string;
};

export default function GaleriSlug({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>;
}) {
  const params = use(paramsPromise);
  const { slug } = params;
  const [selectedImage, setSelectedImage] = useState("");
  const [photos, setPhotos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const feacthAlbum = async () => {
      try {
        const res = await axios.get(
          `https://api.smpn2katapang.sch.id/gallery-albums/${slug}`
        );
        setTitle(res.data.data.name);
        setPhotos(res.data.data.photos);
        setDescription(res.data.data.description);
      } catch (error) {
        console.error("Gagal mengambil data album:", error);
      }
    };
    feacthAlbum();
  }, [slug]);

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
            Album {title}
          </h1>
          <p className="z-10 md:w-full w-100 text-sm text-center  px-4">
            {description}
          </p>
        </div>
      </div>
      <div className="flex justify-end mr-4 rounded-2xl ">
        <Link
          href="/galeri"
          className="z-40 text-orange-100 font-bold bg-orange-500/90 hover:bg-orange-600  rounded-xl p-1 px-4  mt-10 text-xl hover:scale-105 transition-all duration-300"
        >
          Kembali
        </Link>
      </div>
      <div className="container mx-auto p-4 md:p-8 ">
        {photos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {photos.map((photo: Photo) => (
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
