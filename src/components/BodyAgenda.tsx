import Image from "next/image";
import SplitText from "./SplitText";
import Kalender from "./Kalender";

export default function BodyAgenda() {
  return (
     <div className="relative w-full min-h-screen bg-amber-400 overflow-hidden">
          <Image
            src={"/bggaleri.png"}
            alt="Latar belakang galeri aktivitas Dukat"
            fill
            className="object-cover"
            priority
          />
    
          <div className="absolute inset-0 " />
          <div className="relative z-10 flex h-full p-10">
            <Kalender />
          </div>
        </div>
  )
}