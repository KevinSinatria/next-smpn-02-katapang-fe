
import KepalaSekolahSection from "@/components/_components/KepalaSekolahSection";
import VisiMisiSection from "@/components/_components/VisiMisiSection";
import IdentitasSection from "@/components/profile/IdentitasSection";
import SejarahSection from "@/components/profile/SejarahSection";
import Image from "next/image";

export default function Profile() {
  return (
    <main className="relative min-h-screen bg-image h-auto pb-10 overflow-hidden">
      <header className="relative h-28 flex items-center justify-center text-black text-4xl font-bold mt-30">
        <Image
          src="/bgFooter.png"
          alt="Kotak Dekorasi"
          width={900}
          height={400}
          className="h-auto w-full absolute z-0 md:-mt-32"
          priority
        />
        <h1 className="z-10 text-3xl md:text-4xl font-bold text-white md:mt-5">
          Profile Dukat
        </h1>
      </header>

      <div className="relative w-full h-auto mt-12">
        <div className=" w-full h-auto p-5 z-0 ">
          <div id="sambutan">
            <KepalaSekolahSection />
          </div>
          <div id="sejarah">
            <SejarahSection />
          </div>
          <div id="visimisi">
            <VisiMisiSection/>
          </div>
          <div id="identitas">
            <IdentitasSection />
          </div>
          <h2 className="text-2xl font-bold text-slate-600 "></h2>
        </div>
      </div>
    </main>
  );
}
