

"use client"; 

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";

export type Author = {
  id: number;
  name: string;
};

export type Artikel = {
  id: number;
  title: string;
  slug: string;
  content: string;
  thumbnail_url: string;
  category_id: number;
  author_id: number;
  published: boolean;
  published_at: string;
};

export const authors: Author[] = [
  { id: 1, name: "Tim Kesiswaan" },
  { id: 2, name: "Redaksi Sekolah" },
  { id: 3, name: "OSIS SMPN 2 Katapang" },
  { id: 4, name: "Guru TIK" },
  { id: 5, name: "Kepala Perpustakaan" },
];

export const ArtikelData: Artikel[] = [
  {
    id: 1,
    slug: "pelaksanaan-program-makan-bergizi-gratis",
    title: "Pelaksanaan Program Makan Bergizi Gratis",
    content: "Isi lengkap dari artikel tentang pelaksanaan program makan bergizi gratis. Program ini bertujuan untuk meningkatkan gizi anak-anak sekolah dasar...",
    thumbnail_url: "/galeriBeranda/gambar1.png",
    category_id: 1,
    author_id: 1,
    published: true,
    published_at: "2025-09-15T10:00:00Z",
  },
  {
    id: 2,
    slug: "program-sekolah-sehat-dan-hijau",
    title: "Menciptakan Lingkungan Belajar Melalui Program Sekolah Sehat",
    content: "Program Sekolah Sehat tidak hanya tentang makanan. Artikel ini membahas berbagai pilar utama program, termasuk pengelolaan sampah...",
    thumbnail_url: "/galeriBeranda/gambar3.png",
    category_id: 1,
    author_id: 2,
    published: true,
    published_at: "2025-08-22T11:30:00Z",
  },
  {
    id: 3,
    slug: "festival-budaya-lokal-di-sekolah",
    title: "Merayakan Keragaman: Suksesnya Festival Budaya Lokal",
    content: "Festival budaya tahun ini berlangsung sangat meriah. Acara ini menjadi ajang bagi siswa untuk mengenal dan melestarikan budaya lokal...",
    thumbnail_url: "/galeriBeranda/gambar2.png",
    category_id: 3,
    author_id: 3,
    published: true,
    published_at: "2025-07-30T14:00:00Z",
  },
  {
    id: 4,
    slug: "juara-lomba-sains-tingkat-kabupaten",
    title: "Selamat! Tim Sains Sekolah Meraih Juara 1 Tingkat Kabupaten",
    content: "Sebuah prestasi membanggakan kembali diraih oleh sekolah kita. Tim sains yang terdiri dari tiga siswa berbakat berhasil menjadi juara pertama...",
    thumbnail_url: "/galeriBeranda/gambar4.png",
    category_id: 2,
    author_id: 2,
    published: true,
    published_at: "2025-06-05T09:15:00Z",
  },
  {
    id: 5,
    slug: "workshop-coding-untuk-pemula",
    title: "Membuka Gerbang Teknologi: Workshop Coding untuk Pemula",
    content: "Di era digital ini, kemampuan coding menjadi salah satu skill penting. Oleh karena itu, sekolah mengadakan workshop untuk siswa...",
    thumbnail_url: "/galeriBeranda/gambar1.png",
    category_id: 1,
    author_id: 4,
    published: true,
    published_at: "2025-05-20T13:00:00Z",
  },
  {
    id: 6,
    slug: "pojok-baca-digital-perpustakaan",
    title: "Perpustakaan Kini Dilengkapi Pojok Baca Digital",
    content: "Mengikuti perkembangan zaman, perpustakaan sekolah kini meluncurkan Pojok Baca Digital untuk memudahkan siswa mengakses ribuan e-book...",
    thumbnail_url: "/galeriBeranda/gambar3.png",
    category_id: 1,
    author_id: 5,
    published: false, // Contoh artikel yang tidak akan tampil
    published_at: "2025-09-02T15:00:00Z",
  },
];

export default function ArtikelList() {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;

  // 1. Saring hanya artikel yang properti `published`-nya `true`
  const publishedArticles = ArtikelData.filter((artikel) => artikel.published);

  // 2. Logika paginasi
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = publishedArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );
  const totalPages = Math.ceil(publishedArticles.length / articlesPerPage);

  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-10">
        {currentArticles.map((item) => {
          const authorName =
            authors.find((author) => author.id === item.author_id)?.name ||
            "Redaksi";

          const publishedDate = new Date(item.published_at);

          return (
            <div
              key={item.id}
              className="w-full max-w-3xl bg-white/90 rounded-2xl overflow-hidden p-5 shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative">
                <Image
                  src={item.thumbnail_url} 
                  alt={item.title}
                  width={860}
                  height={400}
                  className="w-full h-auto object-cover rounded-lg"
                />
                <div className="absolute top-4 left-4 flex flex-col justify-center items-center md:w-20 md:h-20 w-16 h-16 text-center p-2 border-[#5E8964] border-4 font-bold bg-[#FA6602] text-white rounded-xl">
                  <span className="text-2xl leading-tight">
                    {publishedDate.getDate()} {}
                  </span>
                  <span className="text-sm uppercase">
                    {publishedDate.toLocaleString("id-ID", { month: "short" })}
                  </span>
                </div>
              </div>

              <div className="pt-6">
                <h1 className="text-2xl font-bold text-gray-800 hover:text-[#FA6602] transition-colors duration-300">
                  {item.title}
                </h1>
                <div className="flex items-center text-gray-500 text-sm mt-2 space-x-2">
                  <p>
                    {publishedDate.toLocaleDateString("id-ID", {
                      dateStyle: "long",
                    })}
                  </p>
                  <span>•</span>
                  <p>{authorName}</p> {/* Tampilkan nama penulis */}
                </div>
                <p className="mt-3 text-gray-600 line-clamp-3">
                  {/* Buat excerpt dari 150 karakter pertama `content` */}
                  {item.content.substring(0, 150)}...
                </p>
                <Link
                  href={`/artikel/${item.slug}`}
                  className="mt-4 inline-block px-4 py-2 bg-[#5E8964] text-white rounded-lg hover:bg-[#FA6602] transition-colors duration-300"
                >
                  Selengkapnya
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Komponen Paginasi */}
      <div className="flex justify-center items-center mt-12 space-x-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <MoveLeftIcon className="text-gray-700" />
        </button>
        <span className="text-gray-700 font-medium">
          Halaman {currentPage} dari {totalPages}
        </span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <MoveRightIcon className="text-gray-700" />
        </button>
      </div>
    </div>
  );
}