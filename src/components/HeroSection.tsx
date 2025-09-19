import Image from "next/image";

export default function HeroSection() {
  return (
    <main className="relative w-full min-h-screen bg-image overflow-hidden">
      
      {/* INI BAGIAN YANG SUDAH DISESUAIKAN */}
      <div className="absolute -top-48 -left-60 z-10 w-[1000px] h-[700px] -rotate-16 md:w-[2000px] md:h-[2000px] md:-rotate-0 md:-top-240 md:-left-210">
        <Image
          src="/kotak1.png"
          alt="Kotak Dekorasi"
          fill
          className="object-contain"
          priority
        />
      </div>

      <section className="relative z-20 p-10">
        <div className="w-full h-auto">
          <div className="absolute md:top-51 top-30 left-20 md:left-10">
            <Image
              src="/Header.png"
              alt="sambutan"
              width={1000}
              height={400}
              className="w-[1000px] lg:w-[1000px] flex justify-center items-center"
            />
            <div className="-mt-14 ml-1.5 bg-[#F96701] p-1 w-80 lg:w-[600px] lg:-mt-28 lg:ml-3 rounded-xl">
              <p className="flex text-base lg:text-xl font-semibold text-[#F9DDCD] justify-center items-center text-center">
                silahkan lihat semua informasi tentang sekolah ini
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}