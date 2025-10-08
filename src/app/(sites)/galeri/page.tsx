// app/galeri/page.jsx
"use client";
import { albumData } from "@/app/lib/galeri-data";
import AlbumCard from "@/components/AlbumCard";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

type Album = {
  id: number;
  thumbnail_url: string;
  name: string;
  description: string;
  slug: string;
};

export default function GaleriPage() {
  const [dataAlbum, setDataAlbum] = useState<Album[]>([]);

  const featchData = async () => {
    try{
      const response = await axios.get('https://api.smpn2katapang.sch.id/gallery-albums');
      console.log(response.data.data);
      setDataAlbum(response.data.data);
    }catch (error){
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    featchData();
  }, []);


  return (
    <>
      <div className="relative h-28 flex items-center justify-center text-black text-4xl font-bold mt-30">
        <Image
          src="/bgFooter.png"
          alt="Kotak Dekorasi"
          width={900}
          height={400}
          className="h-auto w-full absolute z-0 md:-mt-32"
          priority
        />
        <Image
          className="z-10 md:mt-5 w-full max-w-sm hover:scale-105 transition-all duration-300"
          src={"/galerikami.png"}
          alt="Icon Galeri"
          width={1000}
          height={500}
        />
      </div>
      <div className="relative container mx-auto px-4 lg:px-8 mt-20 flex">
        <div className="container mx-auto p-4 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {dataAlbum.map((album: Album, index) => (
              <AlbumCard
                key={index}
                imageUrl={album.thumbnail_url}
                title={album.name}
                description={album.description}
                slug={album.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
