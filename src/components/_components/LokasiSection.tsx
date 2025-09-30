import Image from "next/image";

export default function LokasiSection(){
  return (
    <div className="bg-image p-10 min-h-screen flex flex-col justify-center items-center px-60">
      <Image src="/lokasikami.png" alt="Lokasi Kami" width={500} height={200} className="max-w-sm mb-10 hover:scale-105 transition-all duration-300 ease-in-out"/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.08107806738!2d107.5656747757403!3d-6.999733868558516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68eeb22a421b33%3A0xe68a8efd627fad44!2sSMPN%202%20Katapang!5e0!3m2!1sid!2sid!4v1759133287100!5m2!1sid!2sid" className="w-full max-w-8xl  h-screen border-5 border-[#5E8964] rounded-2xl"></iframe>
    </div>
  )
}