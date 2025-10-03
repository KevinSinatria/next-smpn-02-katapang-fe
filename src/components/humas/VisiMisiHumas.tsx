import Image from "next/image";
import SplitText from "../SplitText";

// Data Visi dan Misi tetap sama
const VISI_TEXT = "Menjadi pusat informasi, komunikasi, dan kolaborasi yang profesional, transparan, serta mendukung terciptanya sekolah yang unggul, berkarakter, dan berdaya saing.";
const MISI_ITEMS = [
  { id: 1, body: "Mengelola informasi sekolah secara cepat, tepat, dan akurat melalui berbagai media komunikasi." },
  { id: 2, body: "Membangun hubungan harmonis dengan orang tua, masyarakat, serta mitra kerja sama eksternal." },
  { id: 3, body: "Mendukung kegiatan sekolah dalam bidang akademik, kesiswaan, dan pengembangan prestasi." },
  { id: 4, body: "Menjalin kerja sama dengan berbagai instansi untuk memperluas jejaring dan peluang kolaborasi." },
  { id: 5, body: "Menjadi garda depan dalam publikasi kegiatan dan pencapaian sekolah." },
];

const InfoCard = ({ logoSrc, logoAlt, title, children }: { logoSrc: string; logoAlt: string; title: string; children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col w-full rounded-2xl overflow-hidden shadow-2xl min-h-[450px] md:min-h-[500px]">
      <Image
        src={"/Card.png"}
        alt="Card Background"
        fill 
        className="object-cover z-0"
        quality={80}
      />
      
      <div className="relative z-10 flex flex-col flex-grow justify-center items-center p-6 md:p-8 text-center text-[#EDEDED]">
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={100} 
          height={100}
          className="absolute top-10 w-20 md:w-24 mb-4"
        />
        {children} 
      </div>
    </div>
  );
};


export default function VisiMisiHumas() {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
        
        <div className="w-full lg:w-1/2">
          <InfoCard logoSrc={"/visilogo.png"} logoAlt="Visi Logo" title="VISI">
            <div className="text-lg md:text-xl font-medium">
              <SplitText
                text={VISI_TEXT}
                delay={10}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </div>
          </InfoCard>
        </div>

        <div className="w-full lg:w-1/2">
          <InfoCard logoSrc={"/misilogo.png"} logoAlt="Misi Logo" title="MISI">
            <ul className="text-base md:text-lg space-y-3 text-left w-full max-w-md mt-15">
              {MISI_ITEMS.map((item) => (
                <li key={item.id} className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <div className="flex-1">
                    <SplitText
                      text={item.body}
                      delay={item.id * 10} 
                      duration={0.6}
                      ease="power3.out"
                      splitType="chars"
                      from={{ opacity: 0, y: 40 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.1}
                      rootMargin="-100px"
                      textAlign="start"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </InfoCard>
        </div>

      </div>
    </div>
  );
}