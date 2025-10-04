// Lokasi file: app/lib/artikel-data.ts

// 1. Definisikan tipe untuk Author dan Category
export type Author = {
  id: number;
  name: string;
};

export type Category = {
  id: number;
  name: string;
};

export type Artikel = {
  id: number;
  title: string;
  slug: string;
  content: string;
  thumbnail_url: string;
  youtube_url?: string; 
  category_id: number;
  author_id: number;
  published: boolean;
  published_at: string; 
  created_at: string;
  updated_at: string;
};

// 3. Buat data dummy untuk Author dan Category
export const authors: Author[] = [
  { id: 1, name: "Tim Kesiswaan" },
  { id: 2, name: "Tim Hubungan Masyarakat" },
  { id: 3, name: "Editor Website" },
];

export const categories: Category[] = [
  { id: 1, name: "Informasi Umum" },
  { id: 2, name: "Prestasi" },
  { id: 3, name: "Agenda Sekolah" },
];

// 4. Perbarui data ArtikelData
export const ArtikelData: Artikel[] = [
  {
    id: 1,
    slug: "pelaksanaan-program-makan-bergizi-gratis",
    title: "Pelaksanaan Program Makan Bergizi Gratis",
    content: "Isi lengkap dari artikel tentang pelaksanaan program makan bergizi gratis. Program ini bertujuan untuk meningkatkan gizi anak-anak sekolah dasar di seluruh Ciwidey...",
    thumbnail_url: "/galeriBeranda/gambar1.png",
    youtube_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category_id: 1,
    author_id: 1,
    published: true,
    published_at: "2025-09-15T10:00:00Z",
    created_at: "2025-09-15T10:00:00Z",
    updated_at: "2025-09-15T10:00:00Z",
  },
  {
    id: 2,
    slug: "program-sekolah-sehat-dan-hijau",
    title: "Menciptakan Lingkungan Belajar Melalui Program Sekolah Sehat",
    content: "Program Sekolah Sehat tidak hanya tentang makanan. Artikel ini membahas berbagai pilar utama program, termasuk pengelolaan sampah, penanaman apotek hidup di kebun sekolah...",
    thumbnail_url: "/galeriBeranda/gambar3.png",
    category_id: 1,
    author_id: 2,
    published: true,
    published_at: "2025-08-22T11:30:00Z",
    created_at: "2025-08-22T11:30:00Z",
    updated_at: "2025-08-22T11:30:00Z",
  },
  {
    id: 3,
    slug: "juara-lomba-sains-tingkat-kabupaten",
    title: "Selamat! Tim Sains Sekolah Meraih Juara 1 Tingkat Kabupaten",
    content: "Sebuah prestasi membanggakan kembali diraih oleh sekolah kita. Tim sains yang terdiri dari tiga siswa berbakat berhasil menjadi juara pertama...",
    thumbnail_url: "/galeriBeranda/gambar4.png",
    category_id: 2,
    author_id: 3,
    published: true,
    published_at: "2025-06-05T09:15:00Z",
    created_at: "2025-06-05T09:15:00Z",
    updated_at: "2025-06-05T09:15:00Z",
  },
  // ...tambahkan artikel lainnya dengan format yang sama
];