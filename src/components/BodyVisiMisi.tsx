import Image from "next/image";

export default function BodyVisiMisi() {
  const VISI =
    "Menjadi pusat informasi, komunikasi, dan kolaborasi yang profesional, transparan, serta mendukung terciptanya sekolah yang unggul, berkarakter, dan berdaya saing.";
  const MISI = [
    {
      id: 1,
      body: "Mengelola informasi sekolah secara cepat, tepat, dan akurat melalui berbagai media komunikasi.",
    },
    {
      id: 2,
      body: " Membangun hubungan harmonis dengan orang tua, masyarakat, serta mitra kerja sama eksternal.",
    },
    {
      id: 3,
      body: "Mendukung kegiatan sekolah dalam bidang akademik, kesiswaan, dan pengembangan prestasi.",
    },
    {
      id: 4,
      body: " Menjalin kerja sama dengan berbagai instansi untuk memperluas jejaring dan peluang kolaborasi.",
    },
    {
      id: 5,
      body: "  Menjadi garda depan dalam publikasi kegiatan dan pencapaian sekolah.",
    },
  ];
  return (
    <div className="relative z-10 min-h-screen px-5 lg:px-50 pt-25">
      <div className="">
        <div className="absolute z-20 ">
          <Image src={"/Card.png"} alt="Card" width={600} height={600} />
        </div>
        <div className="absolute z-20 flex flex-col justify-center items-center p-10 max-w-150">
          <Image
            src={"/visilogo.png"}
            alt="Visi logo"
            width={200}
            height={200}
          />
          <p className="max-w-2xl text-4xl flex justify-center items-center text-center mt-4 text-[#EDEDED]">
            {VISI}
          </p>
        </div>
      </div>

      <div className="ml-200 mt-35">
        <div className="absolute z-20 ">
          <Image src={"/Card.png"} alt="Card" width={600} height={600} />
        </div>
        <div className="absolute z-20 flex flex-col justify-center items-center p-10 max-w-150 ">
          <Image
            src={"/misilogo.png"}
            alt="Visi logo"
            width={200}
            height={200}
            className="shadow-5xl "
          />
          <div className="sm:rounded-lg overflow-hidden mt-5">
            <ul className="max-w-2xl text-xl list-disc list-inside space-y-3 text-[#EDEDED]">
              {MISI.map((item) => (
                <li key={item.id}>{item.body};</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
