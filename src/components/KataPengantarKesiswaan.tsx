import EsktraKulikuler from "./Kesiswaan/Ekstrakulikuler";

export default function KataPengantarKesiswaan() {
 const Ekstrakurikuler = [
  {
    image: "/ekstrakulikuler/paskibra.png",
    title: "Paskibra",
    deks: "Membentuk siswa yang disiplin, berjiwa pemimpin, dan cinta tanah air melalui latihan baris-berbaris serta tata upacara bendera.",
    link: "https://www.instagram.com/lassawena?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },
  {
    image: "/ekstrakulikuler/pramuka.png",
    title: "Pramuka",
    deks: "Mengembangkan kemandirian, keterampilan di alam bebas, dan kerja sama tim melalui berbagai kegiatan kepanduan yang seru dan menantang.",
    link: "https://www.instagram.com/barisansatriabatara_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },
  {
    image: "/ekstrakulikuler/futsal.png",
    title: "Futsal",
    deks: "Mengasah bakat dalam olahraga futsal, membangun kerja sama tim yang solid, dan menjunjung tinggi sportivitas di lapangan.",
    link: "https://www.instagram.com/futsal_dukat?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },
  {
    image: "/ekstrakulikuler/pmr.png",
    title: "Palang Merah Remaja",
    deks: "Mendidik siswa untuk peduli sesama, menguasai keterampilan pertolongan pertama, dan aktif dalam berbagai kegiatan kemanusiaan.",
    link: "https://www.instagram.com/pmr2katapang?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },
  {
    image: "/ekstrakulikuler/rohis.png",
    title: "Rohis",
    deks: "Wadah untuk memperdalam ilmu agama Islam, mempererat tali persaudaraan, serta membentuk karakter siswa yang berakhlak mulia.",
    link: "https://www.instagram.com/rohisirsyadukat?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },
  {
    image: "/ekstrakulikuler/uks.png",
    title: "Usaha Kesehatan Sekolah",
    deks: "Meningkatkan kesadaran akan pentingnya kesehatan dan pola hidup sehat di lingkungan sekolah serta memberikan pertolongan dasar.",
    link: "https://www.instagram.com/uksdukat__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },
  {
    image: "/ekstrakulikuler/padus.png",
    title: "Paduan Suara",
    deks: "Mengembangkan bakat di bidang tarik suara, melatih kekompakan, dan harmoni untuk menampilkan persembahan musik yang indah.",
    link: "/kesiswaan"
  },
  {
    image: "/ekstrakulikuler/volly.png",
    title: "Volly",
    deks: "Sarana untuk menyalurkan minat pada olahraga bola voli, meningkatkan kebugaran fisik, serta melatih kerja sama dan strategi tim.",
    link: "/kesiswaan"
  },
  {
    image: "/ekstrakulikuler/silat.png",
    title: "Pencak Silat",
    deks: "Mempelajari seni bela diri warisan budaya bangsa, membangun mental yang kuat, disiplin, dan kepercayaan diri.",
    link: "/kesiswaan"
  },
  {
    image: "/ekstrakulikuler/literasi.png",
    title: "Literasi",
    deks: "Meningkatkan minat baca dan tulis, mengasah kemampuan berpikir kritis, serta menjadi wadah untuk berkarya melalui tulisan dan diskusi.",
    link: "/kesiswaan"
  },
  {
    image: "/ekstrakulikuler/karawitan.png",
    title: "Karawitan",
    deks: "Melestarikan dan mempelajari seni musik tradisional Sunda, melatih keharmonisan dalam bermain alat musik gamelan secara bersama-sama.",
    link: "/kesiswaan"
  },
];
  return (
    <div className="w-full min-h-screen bg-white/80 border-4 border-gray-300/80 rounded-2xl mt-5 shadow-lg">
      <div className="px-6 md:px-8 py-8">
        <h1 className="text-3xl md:text-4xl text-center font-bold text-[#5E8964] pb-6 border-b border-gray-300">
          KATA PENGANTAR
        </h1>

        <div className="text-lg md:text-xl text-black mt-6 space-y-5 text-justify">
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
          <h1 className="text-3xl md:text-4xl font-bold text-[#5E8964] pb-4 border-b border-gray-300">
            Motto Kesiswaan
          </h1>

          <div className="mt-8">
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold italic text-[#5E8964] leading-tight">
              &quot;Kami bimbing disiplinmu, kami bina karaktermu, untuk masa
              depan gemilangmu.&quot;
            </p>
            <p className="text-lg md:text-xl text-gray-700 mt-4 max-w-3xl mx-auto">
              menuju cita-cita sekolah menjadikan siswa yang{" "}
              <strong>BANGKIT BERPRESTASI</strong>.
            </p>
          </div>
        </div>

         <div className="py-8 px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#FB9B64] pb-4 border-b max-w-sm border-gray-300">
            Ektrakurikuler 
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Ekstrakurikuler .map((item, index) => (
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
