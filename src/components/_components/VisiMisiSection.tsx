import Image from "next/image";

export default function VisiMisiSection() {
  return (
    <section className="relative w-full min-h-screen h-280 bg-image ">
      <div className="absolute w-[2200px] h-screen rotate-6 lg:-right-30 -right-90 flex">
        <Image
          src="/visimisi.png"
          alt="Kotak Dekorasi"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="relative z-10 min-h-screen px-5 lg:px-50 pt-25">
        <div className="">
          <div className="absolute z-20 bg-amber-400 ">
            <Image src={"/Card.png"} alt="Card" width={600} height={600} />
          </div>
          <div className="absolute z-20">
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              Visi & Misi Perusahaan
            </h1>
            <p className="max-w-2xl mt-4 text-lg text-blue-100">
              Menjadi pelopor inovasi yang memberikan dampak positif bagi
              masyarakat dan lingkungan.
            </p>
          </div>
        </div>
        <div className="ml-50">
          <div className="absolute z-20 bg-amber-400 ">
            <Image src={"/Card.png"} alt="Card" width={600} height={600} />
          </div>
          <div className="absolute z-20">
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              Visi & Misi Perusahaan
            </h1>
            <p className="max-w-2xl mt-4 text-lg text-blue-100">
              Menjadi pelopor inovasi yang memberikan dampak positif bagi
              masyarakat dan lingkungan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
