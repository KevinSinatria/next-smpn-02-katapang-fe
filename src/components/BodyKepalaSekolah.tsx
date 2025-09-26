import Image from "next/image";
import SplitText from "./SplitText";

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
    <div className="relative w-full min-h-screen flex items-center py-12 lg:h-280 lg:-rotate-3 lg:mt-16">
      <div className="hidden lg:block absolute w-[2300px] -left-40 h-screen ">
        <Image
          src={dataKepalaSekolah.dekorasiUrl}
          alt="Kotak dekorasi"
          fill
          className="-right-20 m-0"
          priority
        />
      </div>

      <div className="container mx-auto px-4 lg:relative lg:w-full lg:h-226 flex flex-col lg:flex-row gap-8 items-center">
        <div className="w-full max-w-3xl lg:absolute lg:top-0 lg:left-0 lg:w-[1200px] lg:h-226 lg:rotate-2 flex justify-center items-center">
          <Image
            src={dataKepalaSekolah.fotoUrl}
            alt={`Foto ${dataKepalaSekolah.nama}`}
            width={1200}
            height={1200}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="w-full lg:absolute lg:top-0 lg:-right-10 md:-right-5 right-0 lg:w-[1000px] lg:h-226 lg:rotate-2 flex justify-center items-center lg:p-36">
          <div className="bg-white w-full text-base lg:text-2xl font-medium rounded-2xl border-4 lg:border-10 -mt-10 sm:-mt-0 border-[#FA6602] text-black flex flex-col p-5 space-y-4">
            <SplitText
              text={dataKepalaSekolah.salamPembuka}
              className="text-2xl font-semibold"
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
              className="text-2xl font-semibold"
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
              className="text-2xl font-bold text-right"
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
            {/* <p className="font-semibold">{dataKepalaSekolah.salamPembuka}</p>
            <p>{dataKepalaSekolah.paragraf1}</p>
            <p>{dataKepalaSekolah.paragraf2}</p>
            <p className="font-semibold">{dataKepalaSekolah.salamPenutup}</p>
            <p className="font-bold text-right">– {dataKepalaSekolah.nama}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
