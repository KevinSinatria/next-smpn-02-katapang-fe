import Image from "next/image";
import CalendarApp from "./Calender";
import Link from "next/link";
import SplitText from "./SplitText";

export default function BodyAgenda() {
  return (
    <div className="relative w-full p-6 overflow-hidden">
      <Image
        src={"/bggaleri.png"}
        alt="Latar belakang galeri aktivitas Dukat"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-10  flex flex-col justify-center items-center w-full h-full">
        <div className="w-full mb-5">
          <h1 className="text-center text-2xl font-bold text-white">
           <SplitText  
            text="Agenda Kegiatan"
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
          <h2 className="text-white  text-center">
           <SplitText  
            text="Agenda kegiatan akan diupdate sesuai dengan jadwal kegiatan yang ada di sekolah."
            delay={30}
            duration={0.1}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          </h2>
          <div
            className="flex justify-end items-end text-white w-full"
          >
            <Link
            href={"/agenda"} className="bg-[#5E8964] font-bold px-4 py-2 rounded-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              Agenda Kegiatan
            </Link>
          </div>
        </div>
        <CalendarApp />
      </div>
    </div>
  );
}
