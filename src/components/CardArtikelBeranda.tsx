import Image from "next/image";

type Props = {
  title: string;
  tanggal: Date;
  image: string;
};

export default function CardArtikelBeranda({ title, tanggal, image }: Props) {
  const formattedDate = new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(tanggal);

  return (
  
    <div className="group relative w-full max-w-xl cursor-pointer overflow-hidden rounded-2xl shadow-lg aspect-[5/3]">
  
      <Image
        src={image}
        alt={title}
        fill
        className="z-0 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />

      {/* 3. OVERLAY GRADASI & TEKS */}
      {/* 'inset-0': Shorthand untuk top-0, left-0, right-0, bottom-0.
          'bg-gradient-to-t': Gradasi dari bawah (hitam) ke atas (transparan).
          'flex flex-col justify-end': Mendorong konten teks ke bagian bawah card.
      */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
        <h1 className="text-xl font-bold leading-tight">
          {title}
        </h1>
        <p className="mt-1 text-xs text-gray-200">
          {formattedDate}
        </p>
      </div>
    </div>
  );
}