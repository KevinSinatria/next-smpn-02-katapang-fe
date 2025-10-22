// app/galeri/[slug]/page.tsx  // Ubah ekstensi file menjadi .tsx

import GallerySlugClient from "@/components/GallerySlugClient";

// --- TYPES ---
// Mendefinisikan struktur data yang kita harapkan dari API

// Tipe untuk satu foto di dalam album
type Photo = {
  id: number;
  photo_url: string;
};

// Tipe untuk data album secara keseluruhan
type AlbumData = {
  name: string;
  description: string;
  photos: Photo[];
};

// Tipe untuk props yang diterima oleh halaman ini
type PageProps = {
  params: {
    slug: string;
  };
};

// --- FUNGSI PENGAMBILAN DATA ---

// Fungsi untuk mengambil data detail album di server
async function getAlbumDetail(slug: string): Promise<AlbumData | null> {
  try {
    const response = await fetch(`https://api.smpn2katapang.sch.id/gallery-albums/${slug}`);

    if (!response.ok) {
      console.error('Failed to fetch album detail:', response.statusText);
      return null;
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

// --- KOMPONEN UTAMA ---

// Komponen utama (Server Component) dengan props yang sudah diberi tipe
export default async function GaleriSlugPage({ params }: PageProps) {
  // Ambil data langsung di server
  const albumData = await getAlbumDetail(params.slug);

  // Jika album tidak ditemukan, tampilkan pesan
  if (!albumData) {
    return (
      <div className="text-center py-20">
        <h1>Album tidak ditemukan</h1>
        <p>Album yang Anda cari mungkin telah dihapus.</p>
      </div>
    );
  }

  // Kirim data yang sudah siap ke komponen client
  return <GallerySlugClient album={albumData} />;
}