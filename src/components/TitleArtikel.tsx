import Image from "next/image";


export default function TitleArtikel() {
  return (
    <div className="relative w-full h-56 overflow-hidden">
      <Image
        src={"/bgArtikel.svg"}
        alt="Latar belakang galeri aktivitas Dukat"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 " />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
        <h2 className="text-xl md:text-4xl font-bold">Artikel Kami</h2>
        <p className="text-sm md:text-base font-bold">
          Silahkan kunjungi artikel-artikel yang telah kami terbitkan dibawah
          ini
        </p>
      </div>
    </div>
  );
}
