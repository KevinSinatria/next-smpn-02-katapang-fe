// VisiMisiSection.tsx

import Image from "next/image";
import Markdown from "react-markdown";

// 1. Definisikan tipe data yang diharapkan dari API
type SchoolInfo = {
  vision: string;
  missions: string;
};

// 2. Buat fungsi terpisah untuk mengambil data di server
async function getSchoolInfo(): Promise<SchoolInfo> {
  try {
    const response = await fetch("https://api.smpn2katapang.sch.id/school-informations");

    if (!response.ok) {
      console.error("Failed to fetch school info:", response.statusText);
      return {
        vision: "Visi tidak dapat dimuat.",
        missions: "Misi tidak dapat dimuat.",
      };
    }

    const result = await response.json();
    console.log(result);
    return result.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      vision: "Visi tidak dapat dimuat.",
      missions: "Misi tidak dapat dimuat.",
    };
  }
}

// 3. Ubah komponen utama menjadi 'async'
export default async function VisiMisiSection() {
  // 4. Panggil fungsi dan dapatkan data langsung di server
  const schoolInfo = await getSchoolInfo();

  return (
    <section className="relative w-full min-h-screen mt-15">
      <div className="flex justify-center items-center ">
        <Image
          src={"/visimisisekolah.png"}
          alt="Visi misi"
          width={1000}
          height={1000}
          className="md:max-w-xl max-w-sm bg-[#5E8964] border-[#EB9B64] border-4 rounded-2xl shadow-lg p-4"
        />
      </div>
      <div className="bg-white-50 md:bg-white-50/0 ">
        <div className="absolute w-500 -left-90 md:-left-30 h-123 rotate-2 z-10 hidden md:block ">
          <Image src="/visimisi.png" alt="Kotak Dekorasi" fill priority />
        </div>  
        <div className="relative w-full h-auto z-20 P-5 md:p-10 mt-10">
          <Image
            src={"/visilogo.png"}
            alt="logo visi misi"
            width={1000}
            height={1000}
            className="max-w-[70px] left-10 md:left-20"
          />
          <p className="text-sm font-bold md:text-white text-gray-800">{schoolInfo.vision}</p>
        </div>
        <div className="relative w-full h-auto z-20 P-5 md:p-10 mt-5">
          <Image
            src={"/misilogo.png"}
            alt="logo visi misi"
            width={1000}
            height={1000}
            className="max-w-[70px] left-10 md:-mt-16 md:left-20"
          />
          <div className="text-sm font-bold md:text-white text-gray-800 gap-3 prose">
            <Markdown>{schoolInfo.missions}</Markdown>
          </div>
        </div>
      </div>
    </section>
  );
}
 