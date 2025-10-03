import Image from "next/image";
import SplitText from "../SplitText";

const dataKepalaSekolah = {
  nama: "Ibu Ai Kurniasih, S.Pd., M.M.Pd",
  fotoUrl: "/KepalaSekolah.png",
  dekorasiUrl: "/kotak2.png",
  salamPembuka: "Assalamualaikum wr. wb",
  paragraf1:
    "Puji syukur kita panjatkan kehadirat Allah SWT atas rahmat dan karunianya. Saya menyambut hadirnya Website resmi SMP Negeri 2 Katapang. Website ini diharapkan menjadi sarana informasi, komunikasi dan publikasi untuk menyampaikan informasi penting terkait kegiatan sekolah, pencapaian prestasi, program sekolah serta inovasi pembelajaran.",
  paragraf2:
    "Sebagai Lembaga pendididkan SMP Negeri 2 Katapang berkomitment untuk membentuk generasi yang Beriman, Berkarakter, Berilmu, serta siap menghadapi tantangan zaman. Semoga dengan adanya website ini, komunikasi dan kerjasama dapat terjalin lebih erat demi tercapainya Visi dan Misi sekolah yang kita cita-citakan Bersama.",
  salamPenutup: "Billahi taufik wal hidayah Wassalamualaikum wr. Wb.",
};

export default function BodyKepalaSekolah() {
  return (
    <div className="w-full min-h-screen flex items-center md:mt-25 mt-0 md:pt-15 pt-5 p-5">
      <div className=" absolute w-[2000px] -left-55 h-screen ">
        <Image
          src={dataKepalaSekolah.dekorasiUrl}
          alt="Kotak dekorasi"
          fill
          className="-right-20 m-0 -rotate-5"
          priority
        />
      </div>

      <div className="min-h-screen w-full flex flex-col lg:flex-row justify-center items-center p-4 sm:p-8 gap-8 z-10">

        <div className="w-full max-w-md lg:w-1/2 flex justify-center items-center">
          <Image
            src={dataKepalaSekolah.fotoUrl}
            alt={`Foto ${dataKepalaSekolah.nama}`}
            width={1200}
            height={1200}
            className="w-full h-auto object-contain rounded-lg" 
          />
        </div>

        <div className="w-full max-w-xl lg:w-1/2">
          <div className="bg-white w-full h-auto text-sm font-medium rounded-2xl border-4  border-[#FA6602] text-black flex flex-col p-5 space-y-2">
            <SplitText
              text={dataKepalaSekolah.salamPembuka}
              className="text-md font-semibold"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="start"
            />
            <SplitText
              text={dataKepalaSekolah.paragraf1}
              className=""
              delay={7}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="start"
            />
            <SplitText
              text={dataKepalaSekolah.paragraf2}
              className=""
              delay={7}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="start"
            />
            <SplitText
              text={dataKepalaSekolah.salamPenutup}
              className="text-md font-semibold"
              delay={10}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="start"
            />
            <SplitText
              text={`– ${dataKepalaSekolah.nama}`}
              className="text-md font-bold text-right"
              delay={7}
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
        </div>
      </div>
    </div>
  );
}
