import Image from "next/image";
import Link from "next/link";
import SplitText from "./SplitText";
type ApiEvent = {
  id: string | number;
  title: string;
  start: string; 
  end: string;
};

async function getUpcomingEvents(): Promise<ApiEvent[]> {
  try {
    const res = await fetch("https://api.smpn2katapang.sch.id/school-events", {
      next: { revalidate: 3600 }, 
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
      .filter((event) => event.endDate >= today)
      .sort((a, b) => b.startDate.getTime() -a.startDate.getTime());

    return upcoming.slice(0, 3);
  } catch (error) {
    console.error("Error di getUpcomingEvents:", error);
    return [];
  }
}

export default async function   BodyAgenda() {
  const upcomingEvents = await getUpcomingEvents();
  return (
    <div className="relative w-full overflow-hidden pb-10">
      <Image
        src={"/bggaleri.png"}
        alt="Latar belakang galeri aktivitas Dukat"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-10  flex flex-col justify-center items-center w-full h-full">
        <div className="w-full max-w-2xl mx-auto mt-[3.75rem] px-4">
          <div className="bg-[#5E8964] border-5 border-green-100/50 p-3 rounded-2xl shadow-lg text-white hover:bg-[#427048] transform hover:scale-101 transition-all duration-300 flex flex-col justify-center items-center">
            <p className=" md:text-2xl text-xl font-bold ">
              Agenda Terdekat Kami
            </p>
            <div>
              <SplitText
                text="Agenda kegiatan akan diupdate sesuai dengan jadwal kegiatan yang ada di sekolah."
                delay={30}
                duration={0.1}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                className="text-sm"
              />
            </div>
          </div>
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
                      <p className="text-lg md:text-xl font-bold text-gray-800 line-clamp-2">
                        {event.title}
                      </p>
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
          <div className="mt-6 flex justify-end items-end">
            <Link
              href={"/agenda"}
              className="bg-[#5E8964] hover:bg-[#427048] text-white border-2 border-[#5E8964] font-bold px-4 py-2 rounded-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out "
            >
              Agenda Kegiatan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
