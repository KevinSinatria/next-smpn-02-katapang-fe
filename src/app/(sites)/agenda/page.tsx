import Image from "next/image";
import CalendarApp from "@/components/Calender";

// 1. Tentukan Tipe Data dari API
type ApiEvent = {
  id: string | number;
  title: string;
  start: string; // Asumsi API mengembalikan string tanggal YYYY-MM-DD
  end: string;
};

// 2. Buat fungsi untuk mengambil & memfilter data di server
async function getUpcomingEvents(): Promise<ApiEvent[]> {
  try {
    const res = await fetch("https://api.smpn2katapang.sch.id/school-events", {
      next: { revalidate: 3600 }, // Cache data selama 1 jam
    });

    if (!res.ok) {
      console.error("Gagal mengambil data event.");
      return [];
    }

    const result = await res.json();
    const allEvents: ApiEvent[] = result.data || [];

    // Logika untuk memfilter "Agenda Terdekat"
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set ke awal hari untuk perbandingan

    const upcoming = allEvents
      .map((event) => ({
        ...event,
        // Ubah string tanggal dari API menjadi objek Date
        startDate: new Date(event.start),
        endDate: new Date(event.end),
      }))
      // Filter: Hanya acara yang tanggal berakhirnya hari ini atau di masa depan
      .filter((event) => event.endDate >= today)
      // Urutkan: Acara yang paling dekat akan muncul di atas
      .sort((a, b) => a.startDate.getTime() - b.startDate.getTime());

    // Kembalikan 3 acara terdekat
    return upcoming.slice(0, 3);
  } catch (error) {
    console.error("Error di getUpcomingEvents:", error);
    return [];
  }
}

// 3. Ubah komponen utama menjadi 'async' (Server Component)
export default async function AgendaPage() {
  // 4. Panggil data langsung di server
  const upcomingEvents = await getUpcomingEvents();

  return (
    <main className="relative min-h-screen bg-image h-auto pb-10 overflow-x-hidden">
      {/* --- Bagian Banner Atas (Sudah Benar) --- */}
      <div className="relative h-28 flex items-center justify-center text-black text-4xl font-bold mt-[7.5rem]">
        <Image
          src="/bgFooter.png"
          alt="Kotak Dekorasi"
          width={900}
          height={400}
          className="h-auto w-full absolute z-0 md:-mt-32"
          priority
        />
        <p className="z-10 text-3xl md:text-4xl font-bold text-white md:mt-5">
          Agenda Terdekat
        </p>
      </div>

      {/* --- Bagian Kalender (Sudah Benar) --- */}
      <div className="container mx-auto px-4 lg:px-8 mt-20 flex flex-col lg:flex-row lg:gap-12 overflow-x-scroll">
        <CalendarApp />
      </div>

      <div className="w-full max-w-2xl mx-auto mt-[3.75rem] px-4">
        <h1 className="bg-[#F96701] p-3 rounded-2xl text-white hover:bg-[#cf4c00] transform hover:scale-105 transition-all duration-300 flex justify-center items-center md:text-2xl text-xl font-bold shadow-lg">
          Agenda Terdekat Kami
        </h1>

        <div className="flex flex-col gap-4 mt-6">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event) => {
              // Siapkan format tanggal untuk ditampilkan
              const startDate = new Date(event.start);
              const endDate = new Date(event.end);
              const day = startDate.getDate();
              const month = startDate
                .toLocaleString("id-ID", { month: "short" })
                .toUpperCase();

              // Buat string rentang tanggal yang rapi
              let dateRange;
              if (event.start === event.end) {
                dateRange = startDate.toLocaleDateString("id-ID", {
                  dateStyle: "long",
                });
              } else {
                dateRange = `${startDate.toLocaleDateString("id-ID", {
                  dateStyle: "medium",
                })} - ${endDate.toLocaleDateString("id-ID", {
                  dateStyle: "medium",
                })}`;
              }

              return (
                <div
                  key={event.id}
                  className="flex bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                >
                  {/* Blok Tanggal di Kiri */}
                  <div className="flex flex-col justify-center items-center bg-[#5E8964] text-white p-4 w-24 min-w-[6rem]">
                    <span className="text-4xl font-bold leading-none">
                      {day}
                    </span>
                    <span className="text-md uppercase font-semibold">
                      {month}
                    </span>
                  </div>

                  {/* Info Acara di Kanan */}
                  <div className="p-4 flex flex-col justify-center">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-sm text-[#F96701] font-semibold mt-1">
                      {dateRange}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center text-gray-600 bg-white/70 p-6 rounded-lg shadow-md mt-6">
              <p>Tidak ada agenda terdekat saat ini.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 