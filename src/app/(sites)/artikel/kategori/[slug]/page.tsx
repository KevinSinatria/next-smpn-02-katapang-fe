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
import EditorJsRenderer from "@/components/EditorJsRenderer";

type PageProps = {
  params: Promise<{ slug: string }>;
};
type Artikel = {
  id: string | number;
  thumbnail_url: string;
  title: string;
  author_id: string | number;
  published_at: string;
  content: string;
  slug: string;
  published: boolean;
  created_at: string;
};

export default function ArtikelCategoryPage({ params }: PageProps) {
  const { slug } = use(params);

  const currentCategory = categories.find((cat) => cat.slug === slug); // 3. State untuk menampung data dari API dan status loading

  const [articles, setArticles] = useState<Artikel[]>([]); // Gunakan tipe Artikel[]
  const [isLoading, setIsLoading] = useState(true); // Tambah state loading
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5; // 4. Perbaiki useEffect untuk fetch data, memprosesnya, dan menyimpannya di state

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      setArticles([]);
      try {
        const res = await fetch(
          `https://api.smpn2katapang.sch.id/articles/category/${slug}`,
          {
            cache: "no-store",
          }
        );
        const data = await res.json();
        setArticles(data.data || []);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setArticles([]);
      } finally {
        setIsLoading(false);
        setCurrentPage(1);
      }
    };

    if (slug) {
      fetchArticles();
    }
  }, [slug]);

  if (!currentCategory) {
    notFound();
  }

  const articlesInCategory = articles.filter((item) => item.published);

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
        <p className="z-10 text-3xl md:text-4xl font-bold text-white md:mt-5 text-center">
          Artikel {currentCategory.name}
        </p>
      </div>

      <div className="container mx-auto px-4 lg:px-8 mt-20 flex flex-col lg:flex-row lg:gap-12">
        <div className="w-full lg:w-2/3">
          {isLoading ? (
            <div className="text-center py-10 bg-white/90 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-700">
                Memuat artikel...
              </h2>
            </div>
          ) : currentArticles.length > 0 ? (
            // Menambahkan 'items-center' agar card 'max-w-3xl' berada di tengah
            <div className="flex flex-col gap-10 items-center">
              {currentArticles.map((item, index) => {
                // Mengambil logika author dari kode lama Anda
                const authorName =
                  authors.find((author) => author.id === item.author_id)
                    ?.name || "Redaksi";

                // Mengambil logika tanggal (dengan fallback) dari kode baru Anda
                const displayDate = new Date(
                  item.published_at || item.created_at
                );

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
                        // Menggunakan 'index' dari map untuk prioritas
                        priority={index === 0}
                      />
                      <div className="absolute top-4 left-4 flex flex-col justify-center items-center md:w-20 md:h-20 w-16 h-16 text-center p-2 border-[#5E8964] border-4 font-bold bg-[#FA6602] text-white rounded-xl">
                        <span className="text-2xl leading-tight">
                          {displayDate.getDate()}
                        </span>
                        <span className="text-sm uppercase">
                          {displayDate.toLocaleString("id-ID", {
                            month: "short",
                          })}
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
                        <p>{authorName}</p>
                      </div>
                      <p className="mt-3 text-gray-600 line-clamp-3">
                        Baca selengkapnya untuk mengetahui informasi detail
                        mengenai artikel ini.
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
          ) : (
            // Ini adalah bagian 'else' dari kode lama Anda
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
                           {" "}
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {" "}
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
                    _  {" "}
              </button>
                         {" "}
            </div>
          )}
                 {" "}
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
