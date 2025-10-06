"use client";
import { useState, useEffect, use } from "react";
import { ArtikelData, authors, categories } from "@/app/lib/artikel-data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  UserCircle,
  MoveRight,
  MoveLeftIcon,
  MoveRightIcon,
} from "lucide-react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default function ArtikelCategoryPage({ params }: PageProps) {
  const { slug } = use(params);

  const currentCategory = categories.find((cat) => cat.slug === slug);

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;

  useEffect(() => {
    setCurrentPage(1);
  }, [slug]);

  if (!currentCategory) {
    notFound();
  }

  const articlesInCategory = ArtikelData.filter(
    (item) => item.category_id === currentCategory.id && item.published
  );

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articlesInCategory.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );
  const totalPages = Math.ceil(articlesInCategory.length / articlesPerPage);

  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <div className="relative h-28 flex items-center justify-center text-black text-4xl font-bold mt-25">
        <Image
          src="/bgFooter.png"
          alt="Kotak Dekorasi"
          width={900}
          height={400}
          className="h-auto w-full absolute z-0 md:-mt-32"
          priority
        />
        <p className="z-10 text-3xl md:text-4xl font-bold text-white md:mt-5">
          Artikel {currentCategory.name}
        </p>
      </div>

      <div className="container mx-auto px-4 lg:px-8 mt-20 flex flex-col lg:flex-row lg:gap-12">
        <div className="w-full lg:w-2/3">
          {currentArticles.length > 0 ? (
            <div className="flex flex-col gap-10">
              {currentArticles.map((item) => {
                const authorName =
                  authors.find((author) => author.id === item.author_id)
                    ?.name || "Redaksi";
                const publishedDate = new Date(item.published_at);

                return (
                  <div key={item.id} className="block group">
                    <div className="w-full bg-white/90 rounded-2xl overflow-hidden p-5 shadow-md transition-shadow duration-300 group-hover:shadow-xl">
                      <div className="relative h-56 rounded-lg overflow-hidden">
                        <Image
                          src={item.thumbnail_url}
                          alt={item.title}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="pt-6">
                        <h2 className="text-2xl font-bold text-gray-800  transition-colors">
                          {item.title}
                        </h2>
                        <div className="flex items-center text-gray-500 text-sm mt-2 space-x-2">
                          <div className="flex items-center gap-1">
                            <UserCircle size={14} />
                            <span>{authorName}</span>
                          </div>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>
                              {publishedDate.toLocaleDateString("id-ID", {
                                dateStyle: "long",
                              })}
                            </span>
                          </div>
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
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-10 bg-white/90 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-700">
                Tidak Ada Artikel
              </h2>
              <p className="text-gray-500 mt-2">
                Belum ada artikel yang dipublikasikan dalam kategori ini.
              </p>
            </div>
          )}

          {totalPages > 1 && (
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
          )}
        </div>

        <div className="w-full lg:w-1/3 lg:max-w-sm mt-12 lg:mt-0">
          <div className="w-full p-5 border-t-4 lg:border-t-0 lg:border-l-4 border-gray-500/70 sticky top-24">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Kategori Lainnya
            </h3>
            <div className="mt-5 flex flex-col -space-y-6">
              {categories.map((cat) => (
                <Link
                  href={`/artikel/kategori/${cat.slug}`}
                  key={cat.id}
                  className={`group p-3 rounded-lg flex justify-start items-center ${
                    currentCategory.id === cat.id ? "text-white font-bold" : ""
                  } cursor-pointer transition-colors duration-200 `}
                >
                  <h1
                    className={`text-lg text-[#5E8964] font-semibold transition-colors duration-300 ${
                      currentCategory.id === cat.id ? "text-[#F96701]" : ""
                    } group-hover:text-[#F96701]`}
                  >
                    {cat.name}
                  </h1>
                  <span className="text-3xl text-[#F96701] opacity-0 transition-opacity duration-300 ml-3 group-hover:opacity-100">
                    <MoveRight size={20} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
