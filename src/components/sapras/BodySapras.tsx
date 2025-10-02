import Image from "next/image";
import VsisiMisiSapras from "./VisiMisiSapras";
import ProgramSapras from "./programSapras";
import DokumentasiSapras from "./Dokumentasi";
import Link from "next/link";

type icon = {
  className : string;
}

// Komponen ikon chevron untuk dropdown
const ChevronDownIcon = ({ className }: icon) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
      clipRule="evenodd"
    />
  </svg>
);


export default function BodySapras() {
  return (
    <div className="relative w-full min-h-screen bg-[#5E8964]/80 border-4 border-gray-300/80 rounded-2xl mt-5 shadow-lg">
      <div className="z-0 ">
        <Image
          src={"/batikmegamendung.png"}
          alt="Latar belakang lingkaran"
          width={300}
          height={300}
          className="absolute -mt-10 -right-34  rotate-13"
        />
        <Image
          src={"/batik/batik3.png"}
          alt="Latar belakang lingkaran"
          width={300}
          height={300}
          className="absolute bottom-0 z-0  -left-20"
        />
      </div>
        <div
          className="w-full h-5 z-0"
          style={{
            backgroundImage: "url('/garisFooter.png')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
          }}
          aria-hidden="true"
        />
        <div
          className="w-full h-5 absolute z-0 bottom-0"
          style={{
            backgroundImage: "url('/garisFooter.png')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
          }}
          aria-hidden="true"
        />
      <div className="px-6 md:px-8 py-8">
        <div className="z-10 relative w-full pb-6 border-b flex justify-center items-center">
          <Image
            src={"/katapengantar.png"}
            alt="Kata Pengantar"
            width={1000}
            height={1000}
            className="w-full max-w-sm hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
        
        <div className="text-lg md:text-xl relative z-10 text-white mt-6 space-y-5 text-justify">
          <p>
            Selamat datang di Web SMP Negeri 2 Katapang bagian{" "}
            <strong>Sarana Prasarana</strong> untuk mendapatkan informasi Sarana
            dan Prasarana di sekolah kami. Di sini akan kami informasikan segala
            hal yang berkaitan dengan sarana prasarana yang ada di SMP Negeri 2
            Katapang seperti fasilitas dan asset. Semua data tersimpan dan bisa
            diakses kapan saja. Kita wujudkan{" "}
            <strong>
              pengelolaan dan penataan sekolah yang optimal dan berkualitas
            </strong>
            .
          </p>
        </div>
        <VsisiMisiSapras/>
        <ProgramSapras/>
        <DokumentasiSapras/>
      </div>
    </div>
  );
}
