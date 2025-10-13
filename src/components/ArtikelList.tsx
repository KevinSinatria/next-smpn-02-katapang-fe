

"use client"; 

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";
import { ArtikelData, authors } from "@/app/lib/artikel-data";


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
                  <p>{authorName}</p> 
                </div>
                <p className="mt-3 text-gray-600 line-clamp-3">
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