import Image from "next/image";

export default function DokumentasiSapras() {
  const DokumentasiSapras = [
    {
      id: 1,
      image: "/dokumentasi/1.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quae.",
    },
    {
      id: 2,
      image: "/dokumentasi/2.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quae.",
    },
    {
      id: 3,
      image: "/dokumentasi/3.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quae.",
    },
    {
      id: 4,
      image: "/dokumentasi/4.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quae.",
    },
  ];
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
          Denah Sekolah
        </h1> 
      <Image
        src="/denah.png"
        alt="denah"
        width={1000}
        height={1000}
        className="w-full max-w-md md:rotate-90 rotate-0 hover:scale-106 md:-my-20 transition-all duration-300 ease-in-out"
      />
        <Image
          src="/dokumentasi/dokumentasi.png"
          alt="Dokumentasi"
          width={300}
          height={300}
          className="w-full max-w-sm mb-10 mt-5"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {DokumentasiSapras.map((item, index) => (
          <div
            key={index}
            className="group relative aspect-square overflow-hidden rounded-lg shadow-md"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 border-black/50 border-3"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
