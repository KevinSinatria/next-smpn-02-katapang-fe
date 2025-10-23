// components/BodyGaleri.tsx

import GalleryClient from "./GalleryClient";


// Definisikan tipe data di sini (atau di file terpusat seperti /types.ts)
type Album = {
  id: number;
  thumbnail_url: string;
  name: string;
  description: string;
  slug: string;
};

// Fungsi untuk mengambil data album di server menggunakan fetch
async function getAlbumData(): Promise<Album[]> {
  try {
    const response = await fetch('https://api.smpn2katapang.sch.id/gallery-albums');

    if (!response.ok) {
      console.error('Failed to fetch album data:', response.statusText);
      return [];
    }

    const result = await response.json();
    return result.data.slice(0, 8) || [];
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

// Komponen utama yang berjalan di server
export default async function BodyGaleri() {
  // Ambil data saat halaman dibuat di server
  const dataAlbum = await getAlbumData();

  // Kirim data yang sudah siap ke komponen client melalui props
  return <GalleryClient initialData={dataAlbum} />;
}