import Image from "next/image";
import SplitText from "../SplitText";


export default function BodyVisiMisi() {
  const VISI =
    "Terwujudnya Lulusan SMPN 2 Katapang yang Berbudaya,Agamis,Nasionalis,Gotong Royong, Kreatif,Inspiratif, Tangguh, danBerprestasi ";
  const MISI = [
  {
    id: 1,
    body: "Mewujudkan lingkungan pembelajaran yang menyenangkan dengan kearifan budaya lokal yang menjadi khazanah budaya nasional.",
  },
  {
    id: 2,
    body: "Mewujudkan pembelajaran dan bimbingan sesuai dengan nilai-nilai dan tatanan yang berlaku.",
  },
  {
    id: 3,
    body: "Mewujudkan lingkungan sekolah yang asri, bersih, indah, hijau, sehat, nyaman, dan berwawasan adiwiyata.",
  },
  {
    id: 4,
    body: "Membudayakan nilai-nilai keagamaan dalam beribadah sesuai dengan agama dan kepercayaannya.",
  },
  {
    id: 5,
    body: "Membentuk warga sekolah yang sehat jasmani dan rohani sesuai dengan profil pelajar pancasila.",
  },
  {
    id: 6,
    body: "Mewujudkan warga sekolah yang berjiwa nasionalis dalam menerapkan tata tertib sekolah.",
  },
  {
    id: 7,
    body: "Mewujudkan warga sekolah yang memiliki sikap toleransi dan berkarakter gotong royong.",
  },
  {
    id: 8,
    body: "Mewujudkan warga sekolah yang inspiratif dan berjiwa enterpreneur.",
  },
  {
    id: 9,
    body: "Mendorong dan mengembangkan potensi warga sekolah yang kreatif dan inovatif dalam bidang ilmu dan teknologi, seni, olahraga serta bidang lainnya.",
  },
  {
    id: 10,
    body: "Mewujudkan prestasi warga sekolah yang unggul sesuai dengan potensi yang dimiliki dalam bidang akademik dan nonakademik.",
  },
  {
    id: 11,
    body: "Mewujudkan warga sekolah yang literat dan tangguh menghadapi tantangan zaman di era digitalisasi.",
  },
  {
    id: 12,
    body: "Mewujudkan warga sekolah yang berprestasi di segala bidang sehingga dapat bersaing secara global.",
  },
];  

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-5 bg-image">
      <div className="relative w-full max-w-7xl lg:h-[600px]">
        <div className="relative w-full max-w-xl mx-auto flex flex-col rounded-xl overflow-hidden shadow-lg lg:absolute lg:top-0 lg:left-0 min-h-[380px]">
          <div className="absolute inset-0 z-10">
            <Image
              src={"/Card.png"}
              alt="Card Background"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative z-10 flex flex-col flex-grow justify-center items-center p-15 text-center text-[#EDEDED]">
            <Image
              src={"/visilogo.png"}
              alt="Visi Logo"
              width={120}
              height={120}
              className="w-24 md:w-32"
            />
            <div className="text-lg mt-4">
              <SplitText
                text={VISI}
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
          </div>
        </div>
        <div className="relative w-full max-w-xl mx-auto mt-8 flex flex-col rounded-xl overflow-hidden shadow-lg lg:mt-0 lg:absolute lg:bottom-0 lg:right-0 min-h-[380px]">
          <div className="absolute inset-0 z-10">
            <Image
              src={"/Card.png"}
              alt="Card Background"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </div>
          <div className="relative z-10 flex flex-col flex-grow justify-center p-15 text-[#EDEDED]">
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
                <div key={item.id}>
                  <SplitText
                    text={item.body}
                    delay={item.id * 10 }
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
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
