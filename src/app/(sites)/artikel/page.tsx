import Image from "next/image";
import ArtikelList from "@/components/ArtikelList";
import ListCategori from "@/components/Artikel/ListCategori";
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
           <ListCategori/>
          </div>
        </div>
      </div>
    </>
  );
}