// components/BodyGaleri.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { galeriData} from "../app/lib/galeri-data";
import axios from "axios";



type Album = {
  id: number;
  thumbnail_url: string;
  name: string;
  description: string;
  slug: string;
};
export default function BodyGaleri() {
  const [dataAlbum, setDataAlbum] = useState<Album[]>([]);
  const [selectedImage, setSelectedImage] = useState("");

  const featchData = async () => {
    try{
      const response = await axios.get('https://api.smpn2katapang.sch.id/gallery-albums');
      setDataAlbum(response.data.data);
    }catch (error){
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    featchData();
  }, []);

  const handleImageClick = (src:string) => {
    setSelectedImage(src);
  }
  const closeImage = () => setSelectedImage("");
  
  return (
    <section className="w-full px-3 py-12 md:px-50">
      <div className="mx-auto max-w-8xl">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dataAlbum.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-md"
              onClick={() => handleImageClick(image.thumbnail_url)}
            >
              <Image
                src={image.thumbnail_url}
                alt={image.name}
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
                  onClick={(e) => e.stopPropagation()} >
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
