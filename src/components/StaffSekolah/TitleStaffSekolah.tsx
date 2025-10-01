import Image from "next/image";
export default function TitleStaffSekolah() {
  return (
    <div className="relative flex justify-center sm:-top-30 -top-10  items-center w-full p-5">
      <div className="absolute z-0 right-120 hidden lg:block rotate-180">
        <Image
          src={"/circle.png"}
          alt="Latar belakang lingkaran"
          width={200}
          height={200}
        />
      </div>
      <div className="relative w-full max-w-3xl flex justify-center items-center z-10 bg-[#5E8964] border-[#EB9B64] border-4 p-4 rounded-2xl shadow-lg">
        <Image
          src={"/staffsekolah.png"}
          alt="Sambutan Kepala Sekolah"
          width={400}
          height={100}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
