import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import ArtikelList from "@/components/ArtikelList";

const categoriArtikel = [
  { id: 0, category: "Informasi Umum", link: "/artikel" },
  { id: 2, category: "Prestasi", link: "/artikel" },
  { id: 1, category: "Agenda Sekolah", link: "/artikel" },
  { id: 3, category: "Pengunguman Siswa", link: "/artikel" },
  { id: 4, category: "Karya Siswa", link: "/artikel" },
];

export default function Page() {
  return (
    <>
      <div className="relative h-28 flex items-center justify-center text-black text-4xl font-bold mt-30">
        <Image
          src="/bgFooter.png"
          alt="Kotak Dekorasi"
          width={900}
          height={400}
          className="h-auto w-full absolute z-0 md:-mt-32"
          priority
        />
        <p className="z-10 text-3xl md:text-4xl font-bold text-white md:mt-5">
          Artikel Terbaru
        </p>
      </div>

      <div className="container mx-auto px-4 lg:px-8 mt-20 flex flex-col lg:flex-row lg:gap-12">
        <div className="w-full lg:w-2/3">
          <ArtikelList />
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
            <div className="mt-5">
              {categoriArtikel.map((item) => (
                <Link
                  href={item.link}
                  key={item.id}
                  className="group my-5 flex cursor-pointer items-center justify-between transition-transform duration-300 ease-in-out hover:-translate-y-1"
                >
                  <h1 className="text-lg text-[#5E8964] font-semibold transition-colors duration-300 group-hover:text-[#F96701]">
                    {item.category}
                  </h1>
                  <span className="text-3xl text-[#F96701] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <MoveRight />
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