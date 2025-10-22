import Image from "next/image";
import VsisiMisiSapras from "./VisiMisiSapras";
import ProgramSapras from "./programSapras";
import DokumentasiSapras from "./Dokumentasi";

export default function BodySapras() {
  return (
    <div className="relative w-full min-h-screen bg-[#5E8964]/80 border-4 border-gray-300/80 rounded-2xl mt-5 shadow-lg">
      <div className="z-0 ">
        <Image
          src={"/batikMegamendung.svg"}
          alt="Latar belakang lingkaran"
          width={300}
          height={300}
          className="absolute md:-top-36 md:-right-34 -top-25 -right-24 rotate-13 w-full md:max-w-[300px] max-w-[200px]"
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
      <div className="px-2 md:px-8 py-8">
        <div className="z-10 relative w-full pb-6 border-b flex justify-center items-center">
          <Image
            src={"/katapengantar.png"}
            alt="Kata Pengantar"
            width={1000}
            height={1000}
            className="w-full max-w-sm hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>

        <div className="text-sm relative z-10 text-white mt-6 space-y-5 text-justify">
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
        <VsisiMisiSapras />
        <ProgramSapras />
        <DokumentasiSapras />
      </div>
    </div>
  );
}
