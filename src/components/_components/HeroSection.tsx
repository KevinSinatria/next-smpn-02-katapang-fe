import Image from "next/image";
import CarouselHero from "../CarouselHero";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-image overflow-hidden">
      <div className="absolute -top-78 -left-60 z-10 w-[1000px] h-[700px] -rotate-16 lg:w-[2000px] lg:h-[2000px] md:w-[2000px] md:h-[1500px] md:rotate-10 lg:rotate-0 md:-top-240 md:-left-210">
        <Image
          src="/kotak1.png"
          alt="Kotak Dekorasi"
          fill
          className="object-contain"
          priority
        />
      </div>
      <section className="relative z-20 p-10 md:p-10 flex flex-col lg:flex-row">
        <div className="w-full h-100">
          <div className=" mx-auto absolute top-32 md:top-44 lg:top-52 justify-center items-center w-[90vw] max-w-xl left-1/2 -translate-x-1/2 lg:left-10 lg:w-auto lg:max-w-none lg:translate-x-0">
            <Image
              src="/Header.png"
              alt="sambutan"
              width={1000}
              height={400}
              className="w-full h-auto ml-5 md:ml-10 lg:ml-0"
            />
            <div className="relative bg-[#F96701] p-2 w-[95%] mx-auto -mt-9  md:-mt-16 lg:-mt-28 rounded-xl lg:absolute lg:w-[600px] lg:left-3 lg:mx-0">
              <p className="flex text-sm lg:text-xl font-semibold  text-[#F9DDCD] justify-center items-center text-center">
                silahkan lihat semua informasi tentang sekolah ini
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-auto -mt-55 sm:-mt-40 md:-mt-40 lg:-mt-0">
          <CarouselHero />
        </div>
      </section>
    </section>
  );
}
