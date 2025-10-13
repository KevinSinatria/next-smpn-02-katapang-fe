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
    const response = await fetch('https://api.smpn2katapang.sch.id/school-informations', {
      next: { revalidate: 3600 } // INI KUNCINYA: Cache data selama 1 jam
    });

    if (!response.ok) {
      console.error('Failed to fetch school info:', response.statusText);
      return { vision: "Visi tidak dapat dimuat.", missions: "Misi tidak dapat dimuat." };
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return { vision: "Visi tidak dapat dimuat.", missions: "Misi tidak dapat dimuat." };
  }
}

// 3. Ubah komponen utama menjadi 'async'
export default async function VisiMisiSection() {
  // 4. Panggil fungsi dan dapatkan data langsung di server
  const schoolInfo = await getSchoolInfo();

  return (
    <section className="relative w-full min-h-screen mt-15">
      <div className="absolute w-500 -left-90 md:-left-30 h-123 rotate-2 z-10">
        <Image src="/visimisi.png" alt="Kotak Dekorasi" fill priority />
      </div>
      <div className="relative w-full h-auto z-20 P-5 md:p-10">
        <Image
          src={"/visilogo.png"}
          alt="logo visi misi"
          width={1000}
          height={1000}
          className="max-w-[70px] left-10 md:left-20"
        />
        {/* Gunakan data yang sudah siap */}
        <h2 className="text-sm font-bold text-white">
          {schoolInfo.vision}
        </h2>
      </div>
      <div className="relative w-full h-auto z-20 P-5 md:p-10">
        <Image
          src={"/misilogo.png"}
          alt="logo visi misi"
          width={1000}
          height={1000}
          className="max-w-[70px] left-10 md:-mt-16 md:left-20"
        />
        <div className="text-sm font-bold text-white">
          {/* Komponen Markdown tetap bisa digunakan di server */}
          <Markdown>{schoolInfo.missions}</Markdown>
        </div>
      </div>
    </section>
  );
}