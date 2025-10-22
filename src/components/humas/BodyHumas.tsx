import Image from "next/image";
import VisiMisiHumas from "./VisiMisiHumas";

export default function BodyHumas() {
  const MISI_ITEMS = [
    {
      id: 1,
      body: "Pengelolaan media sosial dan website sekolah sebagai sarana informasi publik",
    },
    {
      id: 2,
      body: "Publikasi kegiatan akademik, kesiswaan, dan prestasi guru maupun siswa.",
    },
    {
      id: 3,
      body: "Kerja sama dengan pihak eksternal (puskesmas, kepolisian, lembaga pendidikan, dan mitra lainnya).",
    },
    {
      id: 4,
      body: "Pendampingan dan komunikasi dengan orang tua melalui berbagai forum.",
    },
    {
      id: 5,
      body: "Informatif dalam penyebarluasan Informasi Kegiatan sekolah",
    },
    {
      id: 6,
      body: "Mendukung program sekolah dalam membangun citra positif di masyarakat.",
    },
  ];
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
        <Image
          src={"/batikMegamendung.svg"}
          alt="Latar belakang lingkaran"
          width={300}
          height={300}
          className="absolute md:top-265 top-370 -left-34 -rotate-14"
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

        <div className="text-sm md:text-xl text-white mt-6 space-y-5 text-justify">
          <p>
            Selamat datang di laman Humas SMPN 2 Katapang. Kami hadir sebagai{" "}
            <strong>jembatan komunikasi</strong> yang menghubungkan sekolah
            dengan orang tua, masyarakat, dan mitra kerja sama. Melalui
            informasi yang terbuka, kegiatan yang inspiratif, serta kerja sama
            yang harmonis, Humas berkomitmen mendukung tercapainya visi sekolah
            mencetak generasi unggul, berkarakter, dan siap bersaing di era
            global.
          </p>
          <p>
            Humas tidak hanya menjadi corong informasi, tetapi juga{" "}
            <strong>ruang kolaborasi</strong>. Bersama, kita{" "}
            <strong>membangun citra positif sekolah</strong>, merayakan setiap
            prestasi, dan membuka peluang kerja sama yang bermanfaat untuk
            perkembangan peserta didik maupun sekolah secara keseluruhan.
          </p>

          <div className="mt-10">
            <p>Wakasek Bid. Humas</p>
            <p className="font-bold mt-4">
              Nelly Fatma Elsis Yunda, S.Pd, M.MPd
            </p>
            <p>NIP. 197604222008012005</p>
          </div>
        </div>
      </div>

      <VisiMisiHumas />

      <div className="mb-15">
        <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-white flex justify-center items-center text-center ">
          Jenis Kegiatan Humas SMPN 2 Katapang
        </h1>
        <div className="text-base md:text-lg space-y-3 text-center w-full justify-center items-center mt-5">
          {MISI_ITEMS.map((item) => (
            <div key={item.id} className="flex justify-center items-center">
              <div className="flex-1">{item.body}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
