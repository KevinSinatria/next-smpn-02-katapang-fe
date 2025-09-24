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
      body: "Membangun hubungan harmonis dengan orang tua, masyarakat, serta mitra kerja sama eksternal.",
    },
    {
      id: 3,
      body: "Mendukung kegiatan sekolah dalam bidang akademik, kesiswaan, dan pengembangan prestasi.",
    },
    {
      id: 4,
      body: "Menjalin kerja sama dengan berbagai instansi untuk memperluas jejaring dan peluang kolaborasi.",
    },
    {
      id: 5,
      body: "Menjadi garda depan dalam publikasi kegiatan dan pencapaian sekolah.",
    },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-5 bg-gray-100">
      <div className="relative w-full max-w-7xl lg:h-[600px]">
        <div className="relative w-full max-w-lg mx-auto flex flex-col rounded-xl overflow-hidden shadow-lg lg:absolute lg:top-0 lg:left-0 min-h-[380px]">
          <div className="absolute inset-0 z-0">
            <Image
              src={"/Card.png"}
              alt="Card Background"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </div>
          <div className="relative z-10 flex flex-col flex-grow justify-center items-center p-8 text-center text-[#EDEDED]">
            <Image
              src={"/visilogo.png"}
              alt="Visi Logo"
              width={120}
              height={120}
              className="w-24 md:w-32"
            />
            <p className="text-lg md:text-2xl mt-4">{VISI}</p>
          </div>
        </div>
        <div className="relative w-full max-w-120 mx-auto mt-8 flex flex-col rounded-xl overflow-hidden shadow-lg lg:mt-0 lg:absolute lg:bottom-0 lg:right-0 min-h-[380px]">
          <div className="absolute inset-0 z-0">
            <Image
              src={"/Card.png"}
              alt="Card Background"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </div>
          <div className="relative z-10 flex flex-col flex-grow justify-center p-8 text-[#EDEDED]">
            <div className="flex justify-center mb-4">
              <Image
                src={"/misilogo.png"}
                alt="Misi Logo"
                width={120}
                height={120}
                className="w-24 md:w-32"
              />
            </div>
            <ul className="text-base md:text-lg list-disc list-inside space-y-2 text-left">
              {MISI.map((item) => (
                <li key={item.id}>{item.body}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}