import Image from "next/image";

// Tipe data dari API
type SchoolInfo = {
  vision: string;
  missions: string;
};

// Ambil data dari server
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
    return result.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      vision: "Visi tidak dapat dimuat.",
      missions: "Misi tidak dapat dimuat.",
    };
  }
}

export default async function VisiMisiSection() {
  const schoolInfo = await getSchoolInfo();

  // Pisahkan setiap baris jadi list misi, dan hapus angka atau tanda “-”
  const missionList = schoolInfo.missions
    ?.split(/\r?\n/)
    .map((item) => item.trim().replace(/^[-0-9.\s]+/, "")) // hapus angka & simbol di depan
    .filter((item) => item.length > 0);

  return (
    <section className="relative w-full min-h-screen flex justify-center items-center md:px-4 px-2 py-10 md:py-1">
      <div className="bg-[#5E8964] text-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 w-full max-w-4xl">
        {/* VISI */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <Image
              src="/visilogo.png" 
              alt="Visi"
              width={90}
              height={90}
              className="w-[90px] h-auto"
            />
          </div>
          <p className="text-sm sm:text-base font-medium leading-relaxed">
            {schoolInfo.vision}
          </p>
        </div>

        {/* MISI */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Image
              src="/misilogo.png"
              alt="Misi"
              width={90}
              height={90}
              className="w-[90px] h-auto"
            />
          </div>

          <ul className="list-disc ml-5 sm:ml-6 space-y-2 text-sm sm:text-base font-medium leading-relaxed">
            {missionList && missionList.length > 0 ? (
              missionList.map((mission, index) => (
                <li key={index}>{mission}</li>
              ))
            ) : (
              <li>Tidak ada data misi.</li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
