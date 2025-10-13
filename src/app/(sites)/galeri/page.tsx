// app/galeri/page.jsx

import AlbumCard from "@/components/AlbumCard";
import Image from "next/image";

// Definisikan tipe data di sini (atau impor dari file terpusat)
type Album = {
  id: number;
  thumbnail_url: string;
  name: string;
  description: string;
  slug: string;
};

// 1. Buat fungsi terpisah untuk mengambil data di server
async function getAlbumData(): Promise<Album[]> {
  try {
    const response = await fetch(
      "https://api.smpn2katapang.sch.id/gallery-albums",
      {
        next: { revalidate: 3600 }, // INI KUNCINYA: Cache data selama 1 jam
      }
    );

    if (!response.ok) {
      console.error("Failed to fetch album data:", response.statusText);
      return [];
    }

    const result = await response.json();
    return result.data || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

// 2. Ubah komponen utama menjadi 'async'
export default async function GaleriPage() {
  // 3. Panggil fungsi dan dapatkan data langsung di server
  const dataAlbum = await getAlbumData();

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
          className="z-10 md:mt-5 w-full max-w-[300px] hover:scale-105 transition-all duration-300"
          src={"/galerikami.png"}
          alt="Icon Galeri"
          width={1000}
          height={500}
        />
      </div>
      <div className="relative container mx-auto px-4 lg:px-8 mt-20 flex">
        <div className="container mx-auto p-4 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* 4. Render data yang sudah siap */}
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
