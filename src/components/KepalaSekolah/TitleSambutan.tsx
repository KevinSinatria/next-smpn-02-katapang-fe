import Image from "next/image";
import CurvedLoop from "../CurvedLoop";
export default function TitleSambutan() {
  return (
    <div className="relative flex justify-center items-center w-full p-4 -mt-13 md:-mt-11 pt-12 mb-40 ">
      <div className="absolute z-0 left-10 w-400  hidden lg:block lg:-mt-70  -ml-10">
        <CurvedLoop
          marqueeText="Religius ✦ Edukatif ✦ Sukses ✦ Inovatif ✦ Kreatif ✦"
          speed={3}
          curveAmount={600}
          interactive={false}
        />
      </div>

      <div className="relative w-full max-w-xl p-3 h-auto flex justify-center items-center z-10 bg-[#5E8964] border-[#EB9B64] border-4 rounded-2xl shadow-lg">
        <Image
          src={"/sambutankepalasekolah.png"}
          alt="Sambutan Kepala Sekolah"
          width={500}
          height={100}
          className="rounded-lg w-full"
        />
      </div>
    </div>
  );
}
