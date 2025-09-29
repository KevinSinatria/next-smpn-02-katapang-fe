import Image from "next/image";
import SplitText from "./SplitText";

export default function TitleGaleri() {
  return (
    <div className="relative w-full h-56 overflow-hidden">
      <Image
        src={"/bggaleri.png"}
        alt="Latar belakang galeri aktivitas Dukat"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 " />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
        <div className="text-lg md:text-xl mb-2">
          <SplitText
            text="Yuk, lihat lebih dalam tentang Dukat"
            delay={70}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold">
          <SplitText
            text="Galeri Foto Aktivitas Dukat"
            delay={70}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </h1>
      </div>
    </div>
  );
}
