import Image from "next/image";
import CarouselHero from "../CarouselHero";

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-screen sm:min-h-screen h-170 overflow-hidden">
      <div className="absolute -top-200 -left-180 z-10 w-390 2xl:w-440 h-400">
        <Image
          src="/kotak1.svg"
          alt="Kotak Dekorasi"
          fill
          className="object-contain "
          priority
        />
      </div>
      <div className="absolute w-full flex flex-col lg:flex-row mt-41 lg:-mt-10 justify-between items-center z-20">
        <div className="w-full  xl:max-w-2xl px-5 flex flex-col md:ml-10">
          <Image
            src="/Header.webp"
            alt="sambutan"
            width={4000}
            height={300}
            className="w-full max-w-4xl"
          />
          <div className="w-full max-w-6xl">
            <div className=" bg-[#F96701] p-2 w-full max-w-xl rounded-xl bottom-5 shadow-2xl">
              <p className="flex text-sm lg:text-lg font-medium text-[#F9DDCD] justify-center items-center text-center">
                Silakan lihat semua informasi tentang sekolah ini
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full h-auto p-5">
          <CarouselHero />
        </div>
      </div>
    </section>
  );
}
