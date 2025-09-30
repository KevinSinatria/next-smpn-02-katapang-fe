import Image from "next/image";
import CurvedLoop from "./CurvedLoop";
export default function TitleSambutan() {
  return (
    <div className="relative flex justify-center -top-10 items-center w-full ">
      <div className="absolute z-0 left-10 w-400  hidden lg:block -mt-70 -ml-10">
        <CurvedLoop
          // marqueeText="Ramah ✦ Energik ✦ Sopan ✦ Inovatif ✦ Kreatif ✦"
          // speed={3}
          // curveAmount={500}
          // direction="left"
          // interactive={true}
          // className="custom-text-style text-orange-400"
          marqueeText="Ramah ✦ Energik ✦ Sopan ✦ Inovatif ✦ Kreatif ✦"
          speed={3}
          curveAmount={600}
          interactive={false}
        />
      </div>

      <div className="relative w-full max-w-3xl p-5 h-auto flex justify-center items-center z-10 bg-[#5E8964] border-[#EB9B64] border-4 rounded-2xl shadow-lg">
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
