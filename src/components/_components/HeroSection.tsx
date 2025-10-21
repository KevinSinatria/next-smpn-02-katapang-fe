import Image from "next/image";
import CarouselHero from "../CarouselHero";

export default function HeroSection() {
  return (
    <section className="relative w-full sm:min-h-screen h-170 bg-image overflow-hidden">
      <div className="absolute -top-200 -left-180 z-0 w-390 h-400 ">
        <Image
          src="/kotak1.webp"
          alt="Kotak Dekorasi"
          fill
          className="object-contain "
          priority
        />
      </div>
      <div className="absolute w-full flex flex-col lg:flex-row mt-41 lg:-mt-10 justify-between items-center">
        <div className="w-full max-w-xl px-5 flex flex-col md:ml-10">
          <Image
            src="/Header.png"
            alt="sambutan"
            width={4000}
            height={300}
            className="w-full max-w-4xl"
          />
          <div className="w-full max-w-6xl">
            <div className=" bg-[#F96701] p-2 w-full max-w-xl rounded-xl bottom-5 shadow-2xl">
              <p className="flex text-sm lg:text-lg font-semibold  text-[#F9DDCD] justify-center items-center text-center">
                silahkan lihat semua informasi tentang sekolah ini
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full h-auto">
          <CarouselHero />
        </div>
      </div>
    </section>
  );
}
