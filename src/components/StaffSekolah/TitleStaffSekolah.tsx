import Image from "next/image";
export default function TitleStaffSekolah() {
  return (
    <div className="flex justify-center items-center w-full p-5">
      <div className="w-full max-w-3xl flex justify-center items-center z-10 bg-[#5E8964] border-[#EB9B64] border-4 py-2 rounded-2xl shadow-lg p-10">
        <Image
          src={"/staffsekolah.png"}
          alt="Sambutan Kepala Sekolah"
          width={400}
          height={100}
          className="object-contain"
        />
      </div>
    </div>
  );
}
