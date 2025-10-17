"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react"; 
import { CircleAlert, MoveLeftIcon, MoveRightIcon } from "lucide-react";
type Article = {
  id: number;
  title: string;
  slug: string;
  thumbnail_url: string;
  author: string; 
  category: string;
  published: boolean;
  published_at: string | null;
  created_at: string;
};

type Meta = {
  page: number;
  limit: number;
  totalItems: number;
  totalPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

export default function ArtikelList() {
  
  const [articles, setArticles] = useState<Article[]>([]);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  
  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // API URL dengan parameter paginasi
        const response = await fetch(
          `https://api.smpn2katapang.sch.id/articles/?page=${currentPage}&limit=3`
        );

        if (!response.ok) {
          throw new Error("Gagal mengambil data artikel");
        }

        const result = await response.json();
        setArticles(result.data);
        setMeta(result.meta);
      } catch (err) {
        setError("Terjadi kesalahan saat memuat artikel.");
        console.error(err);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchArticles();
  }, [currentPage]);

  if (isLoading) {
    return <div className="text-center p-10 text-black font-bold">Memuat artikel...</div>;
  }

  // Tampilkan error state
  if (error) {
    return <div className="text-center p-10 text-red-500">{error}</div>;
  }

  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-10">
        {articles.map((item) => {
          // Gunakan created_at sebagai fallback jika published_at null
          const displayDate = new Date(item.published_at || item.created_at);

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
                  priority={articles.indexOf(item) === 0} 
                />
                <div className="absolute top-4 left-4 flex flex-col justify-center items-center md:w-20 md:h-20 w-16 h-16 text-center p-2 border-[#5E8964] border-4 font-bold bg-[#FA6602] text-white rounded-xl">
                  <span className="text-2xl leading-tight">
                    {displayDate.getDate()}
                  </span>
                  <span className="text-sm uppercase">
                    {displayDate.toLocaleString("id-ID", { month: "short" })}
                  </span>
                </div>
              </div>

              <div className="pt-6">
                <h1 className="text-2xl font-bold text-gray-800 hover:text-[#FA6602] transition-colors duration-300">
                  <Link href={`/artikel/${item.slug}`}>{item.title}</Link>
                </h1>
                <div className="flex items-center text-gray-500 text-sm mt-2 space-x-2">
                  <p>
                    {displayDate.toLocaleDateString("id-ID", {
                      dateStyle: "long",
                    })}
                  </p>
                  <span>•</span>
                  <p>{item.author}</p>
                </div>
                <p className="mt-3 text-gray-600 line-clamp-3">
                  Baca selengkapnya untuk mengetahui informasi detail mengenai artikel ini.
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

      {meta && meta.totalItems > 0 && (
        <div className="flex justify-center items-center mt-12 space-x-4">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={!meta.hasPrevPage}
            className="p-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <MoveLeftIcon className="text-gray-700" />
          </button>
          <span className="text-gray-700 font-medium">
            Halaman {meta.page} dari {meta.totalPage}
          </span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={!meta.hasNextPage}
            className="p-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <MoveRightIcon className="text-gray-700" />
          </button>
        </div>
      )}
    </div>
  );
}