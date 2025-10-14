// Ganti import Link Anda
import Link from "next/link"; 
import CardArtikelBeranda from "./CardArtikelBeranda";
// Axios tetap bisa digunakan, tapi fetch lebih direkomendasikan
// import axios from "axios";

// Definisikan tipe data untuk artikel
type Artikel = {
  id: number;
  title: string;
  slug: string;
  thumbnail_url: string;
  author: string;
  category: string;
  published_at: string | null; // Bisa jadi null
  created_at: string; // API biasanya mengembalikan string, bukan objek Date
  updated_at: string;
};

// Menggunakan fetch (rekomendasi) dengan try-catch
async function getArtikel(): Promise<Artikel[]> {
  try {
    const res = await fetch("https://api.smpn2katapang.sch.id/articles/", {
      // Menambahkan cache: 'no-store' agar data selalu terbaru saat development.
      // Untuk produksi, Anda bisa mengatur revalidate, misal: next: { revalidate: 3600 }
      cache: "no-store", 
    });

    if (!res.ok) {
      // Jika response status bukan 2xx (misal: 404, 500)
      throw new Error(`Gagal mengambil data artikel: ${res.statusText}`);
    }

    const responseJson = await res.json();
    return responseJson.data.slice(0, 3);

  } catch (error) {
    console.error("Terjadi kesalahan saat fetch artikel:", error);
    return []; // Kembalikan array kosong jika gagal agar halaman tidak error
  }
}

export default async function HomePage() {
  const artikelData = await getArtikel();

  return (
    <div className="w-full p-4 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
      
      {/* Cek apakah ada data sebelum mapping */}
      {artikelData && artikelData.length > 0 ? (
        artikelData.map((item: Artikel) => (
          // Gunakan item.id sebagai key pada elemen terluar
          <Link href={`/artikel/${item.slug}`} key={item.id}>
            <CardArtikelBeranda
              // key tidak perlu lagi di sini
              title={item.title}
              tanggal={new Date(item.created_at)}
              image={item.thumbnail_url}
            />
          </Link>
        ))
      ) : (
        // Tampilkan pesan jika tidak ada artikel
        <p>Tidak ada artikel untuk ditampilkan.</p>
      )}

      {/* Card statis untuk link "Lihat Lebih Lanjut" */}
      <Link href="/artikel">
        <CardArtikelBeranda
          title="Ayo Liat Lebih Lanjut Artikel Artikel Kami dengan klik disini"
          tanggal={new Date("2019-08-24T14:15:22Z")}
          image="/bgFooter.png"
        />
      </Link>
    </div>
  );
}