import Image from "next/image";
import EsktraKulikuler from "./Kesiswaan/Ekstrakulikuler";

export default function KataPengantarKesiswaan() {
  const Ekstrakurikuler = [
    {
      image: "/ekstrakulikuler/paskibra.png",
      title: "Paskibra",
      deks: "Membentuk siswa yang disiplin, berjiwa pemimpin, dan cinta tanah air melalui latihan baris-berbaris serta tata upacara bendera.",
      link: "https://www.instagram.com/lassawena?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      image: "/ekstrakulikuler/pramuka.png",
      title: "Pramuka",
      deks: "Mengembangkan kemandirian, keterampilan di alam bebas, dan kerja sama tim melalui berbagai kegiatan kepanduan yang seru dan menantang.",
      link: "https://www.instagram.com/barisansatriabatara_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      image: "/ekstrakulikuler/futsal.png",
      title: "Futsal",
      deks: "Mengasah bakat dalam olahraga futsal, membangun kerja sama tim yang solid, dan menjunjung tinggi sportivitas di lapangan.",
      link: "https://www.instagram.com/futsal_dukat?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      image: "/ekstrakulikuler/pmr.png",
      title: "Palang Merah Remaja",
      deks: "Mendidik siswa untuk peduli sesama, menguasai keterampilan pertolongan pertama, dan aktif dalam berbagai kegiatan kemanusiaan.",
      link: "https://www.instagram.com/pmr2katapang?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      image: "/ekstrakulikuler/rohis.png",
      title: "Rohis",
      deks: "Wadah untuk memperdalam ilmu agama Islam, mempererat tali persaudaraan, serta membentuk karakter siswa yang berakhlak mulia.",
      link: "https://www.instagram.com/rohisirsyadukat?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      image: "/ekstrakulikuler/uks.png",
      title: "Usaha Kesehatan Sekolah",
      deks: "Meningkatkan kesadaran akan pentingnya kesehatan dan pola hidup sehat di lingkungan sekolah serta memberikan pertolongan dasar.",
      link: "https://www.instagram.com/uksdukat__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      image: "/ekstrakulikuler/literasi.png",
      title: "Literasi",
      deks: "Meningkatkan minat baca dan tulis, mengasah kemampuan berpikir kritis, serta menjadi wadah untuk berkarya melalui tulisan dan diskusi.",
      link: "https://www.instagram.com/literasihebat_dukat?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      image: "/ekstrakulikuler/padus.png",
      title: "Paduan Suara",
      deks: "Mengembangkan bakat di bidang tarik suara, melatih kekompakan, dan harmoni untuk menampilkan persembahan musik yang indah.",
      link: "",
    },
    {
      image: "/ekstrakulikuler/volly.png",
      title: "Volly",
      deks: "Sarana untuk menyalurkan minat pada olahraga bola voli, meningkatkan kebugaran fisik, serta melatih kerja sama dan strategi tim.",
      link: "",
    },
    {
      image: "/ekstrakulikuler/silat.png",
      title: "Pencak Silat",
      deks: "Mempelajari seni bela diri warisan budaya bangsa, membangun mental yang kuat, disiplin, dan kepercayaan diri.",
      link: "",
    },
    {
      image: "/ekstrakulikuler/senitari.png",
      title: "Seni Tari",
      deks: "Mengembangkan bakat di bidang tari, melatih kekompakan, dan harmoni untuk menampilkan persembahan musik yang indah.",
      link: "",
    },
    {
      image: "/ekstrakulikuler/karawitan.png",
      title: "Karawitan",
      deks: "Melestarikan dan mempelajari seni musik tradisional Sunda, melatih keharmonisan dalam bermain alat musik gamelan secara bersama-sama.",
      link: "",
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
          className="absolute md:top-165 top-470 -left-34 -rotate-14"
        />

        <Image
          src={"/batik/batik3.svg"}
          alt="Latar belakang lingkaran"
          width={300}
          height={300}
          className="absolute bottom-0 -left-20 rotate-180"
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
        <div className="text-sm text-white mt-6 space-y-5 text-justify relative z-10">
          <p>Assalamualaikum Warahmatullahi Wabarakatuh,</p>

          <p>
            Selamat datang kembali di sekolah buat siswa-siswi SMP Negeri 2
            Katapang. Tahun Ajaran baru ini telah dimulai dan Ibu, sebagai
            Pembantu Kepala Sekolah Bidang Kesiswaan, merasa sangat bangga bisa
            kembali menyambut kehadiran kalian.
          </p>
          <p>
            Peran Ibu di sekolah ini tidak hanya sebatas penegak tata tertib,
            tetapi juga sebagai fasilitator dan pembimbing bagi kalian semua.
            Ibu ingin menciptakan lingkungan sekolah yang tidak hanya disiplin,
            tetapi juga aman, nyaman, dan suportif; tempat di mana kalian bisa
            tumbuh dan berkembang menjadi individu yang berkarakter kuat dan
            berprestasi.
          </p>
          <p>Tugas Ibu meliputi:</p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>
              Membantu kalian memahami dan mematuhi tata tertib sekolah, karena
              disiplin adalah kunci utama menuju kesuksesan.
            </li>
            <li>
              Mengembangkan potensi dan bakat kalian melalui berbagai kegiatan
              ekstrakurikuler, dari olahraga, seni, hingga sains, sehingga
              kalian bisa berprestasi dan mengukir nama baik sekolah.
            </li>
            <li>
              Mendampingi Organisasi Siswa Intra Sekolah (OSIS) dan
              kegiatan-kegiatan kesiswaan lainnya untuk melatih jiwa
              kepemimpinan dan kerja sama kalian.
            </li>
            <li>
              Menjadi tempat kalian berkeluh kesah dan mencari solusi atas
              permasalahan yang dihadapi, bersama dengan guru mapel, wali kelas,
              dan guru bimbingan konseling (BK).
            </li>
          </ul>
          <p>
            Ibu yakin, dengan kerja sama yang baik antara guru-guru dan kalian
            semua, kita bisa menciptakan sekolah yang bukan hanya tempat untuk
            belajar, tetapi juga rumah kedua yang penuh dengan inspirasi dan
            kebersamaan.
          </p>
          <p>
            Mari kita jalani tahun ajaran ini dengan semangat baru, kerja keras,
            dan optimisme. Mari bersama-sama kita wujudkan visi sekolah kita
            untuk mencetak generasi muda yang cerdas, berkarakter, dan siap
            menjadi siswa <strong>BANGKIT BERPRESTASI</strong> untuk menghadapi
            tantangan masa depan.
          </p>
          <p>Terima kasih.</p>
          <p>Wassalamualaikum Warahmatullahi Wabarakatuh.</p>
        </div>

        <div className="text-center py-8 px-4">
          <div className="border-b-2 flex justify-center pb-4 items-center w-full">
            <Image
              src="/mottokesiswaan.png"
              alt="Logo Sekolah"
              width={1000}
              height={1000}
              className="w-full max-w-sm hover:scale-105 transition-all duration-300 ease-in-out"
            />
          </div>
          <div className="mt-8">
            <p className="text-lg md:text-2xl lg:text-3xl font-semibold italic text-white  leading-tight">
              &quot;Kami bimbing disiplinmu, kami bina karaktermu, untuk masa
              depan gemilangmu.&quot;
            </p>
            <p className="text-lg md:text-xl text-gray-700 mt-4 max-w-3xl mx-auto">
              menuju cita-cita sekolah menjadikan siswa yang{" "}
              <strong>BANGKIT BERPRESTASI</strong>.
            </p>
          </div>
        </div>

        <div className="py-8 px-4" id="ekstrakurikuler">
          <h1 className="text-3xl md:text-4xl font-bold text-[#FB9B64] pb-2 border-b-2 max-w-sm border-gray-300">
            Ekstrakulikuler
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {Ekstrakurikuler.map((item, index) => (
              <EsktraKulikuler
                key={index}
                image={item.image}
                title={item.title}
                deks={item.deks}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
