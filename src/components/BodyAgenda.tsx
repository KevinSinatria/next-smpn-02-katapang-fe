import Image from "next/image";
import CalendarApp from "./Calender";

export default function BodyAgenda() {
  return (
     <div className="relative w-full bg-amber-400 overflow-hidden">
          <Image
            src={"/bggaleri.png"}
            alt="Latar belakang galeri aktivitas Dukat"
            fill
            className="object-cover"
            priority
          />
    
          <div className="absolute " />
          <div className="relative z-10 max-w-5xl p-5">
            <CalendarApp/>
          </div>
        </div>
  )
}