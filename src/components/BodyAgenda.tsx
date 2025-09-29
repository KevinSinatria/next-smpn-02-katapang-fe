import Image from "next/image";
import SplitText from "./SplitText";

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
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
            <h1>aku adalah seorang kapiten mempunyai pedang panjang</h1>
          </div>
        </div>
  )
}