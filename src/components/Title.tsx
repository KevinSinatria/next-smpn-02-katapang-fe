import Image from "next/image";

// Prop `decoration` saat ini belum digunakan, tapi strukturnya sudah benar.
export default function Title(props: { decoration: string }) {
  
  return (
    <div className="relative flex justify-center items-center mt-20 w-full ">
      <div className="absolute z-0 left-60">
        <Image
          src={"/circle.png"}
          alt="Latar belakang lingkaran"
          width={400}
          height={400}
        />
      </div>

      <div className="relative w-full max-w-3xl flex justify-center items-center z-10 bg-[#5E8964] border-[#EB9B64] border-4 p-4 rounded-2xl shadow-lg">
        <Image
          src={"/sambutankepalasekolah.png"}
          alt="Sambutan Kepala Sekolah"
          width={500} 
          height={100} 
          className="rounded-lg"
        />
      </div>

    </div>
  );
}