import { ArtikelData, authors, categories } from "@/app/lib/artikel-data";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, UserCircle, Tag } from "lucide-react";
import ListCategori from "@/components/Artikel/ListCategori";

// Tipe untuk props 'params'
type PageProps = {
  params: {
    slug: string;
  };
};

export default function ArtikelDetail({ params }: PageProps) {
  const artikel = ArtikelData.find((item) => item.slug === params.slug);

  if (!artikel) {
    notFound();
  }
  const authorName =
    authors.find((author) => author.id === artikel.author_id)?.name ||
    "Redaksi Sekolah";

  const categoryName =
    categories.find((cat) => cat.id === artikel.category_id)?.name ||
    "Tanpa Kategori";

  const publishedDate = new Date(artikel.published_at);

  return (
    <div className="container mx-auto px-4 lg:px-8 mt-20 flex flex-col lg:flex-row">
      <div className="w-full max-w-3xl mx-auto bg-white/90 rounded-2xl overflow-hidden p-5 md:p-8 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          {artikel.title}
        </h1>

        <div className="flex flex-wrap items-center text-gray-500 mt-4 text-sm gap-x-4 gap-y-2">
          <div className="flex items-center gap-2">
            <Tag size={16} />
            <span>{categoryName}</span>
          </div>
          <div className="flex items-center gap-2">
            <UserCircle size={16} />
            <span>Oleh: {authorName}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <time dateTime={artikel.published_at}>
              {publishedDate.toLocaleDateString("id-ID", {
                dateStyle: "long",
              })}
            </time>
          </div>
        </div>
        <div className="relative w-full h-64 md:h-96 my-6 rounded-lg overflow-hidden">
          <Image
            src={artikel.thumbnail_url}
            alt={artikel.title}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <div className="prose lg:prose-lg max-w-none text-gray-700">
          <p>{artikel.content}</p>
        </div>
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
         <ListCategori/>
        </div>
      </div>
    </div>
  );
}
