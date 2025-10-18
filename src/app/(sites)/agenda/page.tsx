import CalendarApp from "@/components/Calender";
import Image from "next/image";
const initialEvent = [
  {
    id: 1,
    title: "Agenda Kegiatan",
    start: new Date(),
    end: new Date(),
  },
  {
    id: 2,
    title: "Agenda Kegiatan",
    start: new Date(),
    end: new Date(),
  },
];

export default function AgendaPage() {
  return (
    <main className="relative min-h-screen bg-image h-auto pb-10 overflow-x-hidden">
      <div className="relative h-28 flex items-center justify-center text-black text-4xl font-bold mt-30">
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
      <div className="container mx-auto px-4 lg:px-8 mt-20 flex flex-col lg:flex-row lg:gap-12">
        <CalendarApp />
      </div>
      <div className="bg-[#5E8964] w-full min-h-80 bottom-5 mt-15 shadow-2xl">
        <div
          className="w-full h-5"
          style={{
            backgroundImage: "url('/garisFooter.png')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
          }}
          aria-hidden="true"
        />
        <h1 className="flex justify-center items-center md:text-2xl text-xl mt-5 font-bold">
          Agenda Terdekat Kami
        </h1>
        <div className="flex flex-col w-full ">
          {initialEvent.map((event) => (
            <div className="flex  justify-center items-center" key={event.id}>
              <h1 className="flex md:text-2xl text-xl mt-5 font-bold">
                {event.title}
              </h1>
              <h1 className="flex justify-center items-center md:text-2xl text-xl mt-5 font-bold">
                {new Date(event.start).toLocaleDateString()}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
