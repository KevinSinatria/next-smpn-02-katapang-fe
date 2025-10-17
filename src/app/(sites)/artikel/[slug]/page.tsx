import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, UserCircle, Tag } from "lucide-react";
import ListCategori from "@/components/Artikel/ListCategori";
import EditorJsRenderer from '../../../../components/EditorJsRenderer';
import { parse } from "path";

// Tipe untuk artikel yang diterima dari API
type Artikel = {
  id: number;
  title: string;
  slug: string;
  thumbnail_url: string;
  content: string; // Konten artikel, kemungkinan besar dalam format HTML
  author: string; // API langsung memberikan nama, bukan ID
  category: string; // API langsung memberikan nama, bukan ID
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

type PageProps = {
  params: {
    slug: string;
  };
};

// Fungsi untuk mengambil satu artikel dari API berdasarkan slug
async function getArtikelBySlug(slug: string): Promise<Artikel | null> {
  try {
    const res = await fetch(`https://api.smpn2katapang.sch.id/articles/${slug}`, {
      cache: "no-store",
    });

    // Jika artikel tidak ditemukan (API mengembalikan 404), res.ok akan false
    if (!res.ok) {
      return null;
    }

    const responseJson = await res.json();
    return responseJson.data;
  } catch (error) {
    console.error("Gagal mengambil detail artikel:", error);
    return null;
  }
}


export default async function ArtikelDetail({ params }: PageProps) {
  const { slug } = await params;
  const artikel = await getArtikelBySlug(slug);
  if (!artikel) {
    notFound();
  }
  const displayDate = new Date(artikel.published_at || artikel.created_at);

  return (
    <div className="container mx-auto px-4 lg:px-8 mt-20 flex flex-col lg:flex-row">
      <div className="w-full max-w-3xl mx-auto bg-white/90 rounded-2xl overflow-hidden p-5 md:p-8 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          {artikel.title}
        </h1>

        <div className="flex flex-wrap items-center text-gray-500 mt-4 text-sm gap-x-4 gap-y-2">
          <div className="flex items-center gap-2">
            <Tag size={16} />
            <span>{artikel.category}</span>
          </div>
          <div className="flex items-center gap-2">
            <UserCircle size={16} />
            <span>Oleh: {artikel.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <time dateTime={displayDate.toISOString()}>
              {displayDate.toLocaleDateString("id-ID", {
                dateStyle: "long",
              })}
            </time>
          </div>
        </div>
        <div className="relative w-full h-64 md:h-96 my-6 rounded-lg overflow-hidden">
          <Image
            src={artikel.thumbnail_url}
            alt={artikel.title}
            fill 
            className="object-cover" 
            priority
          />
        </div>

      <article>
        <EditorJsRenderer data={JSON.parse(artikel.content)} />
      </article>
      </div>
      <div className="w-full lg:w-1/3 lg:max-w-sm mt-12 lg:mt-0">
        <div className="w-full p-5 border-t-4 lg:border-t-0 lg:border-l-4 border-gray-500/70">
          <div className="w-full">
            <Image
              src="/kategoriartikel.png"
              alt="Kategori Artikel"
              width={900}
              height={400}
              className="h-auto w-full transition duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <ListCategori />
        </div>
      </div>
    </div>
  );
}