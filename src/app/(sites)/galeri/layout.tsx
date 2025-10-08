import Image from "next/image";

export const metadata = {
  title: "Galeri - SMPN 2 Katapang",
  description: "SMPN 2 Katapang - Sekolah Menengah Pertama Negeri 2 Katapang",
};

export default function GaleriLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative min-h-screen bg-image h-auto pb-10 overflow-x-hidden">
      
        {/* <div className="w-full max-w-[300px] h-auto bg-[#5E8964]/90 rounded-2xl">
          <div className="w-full p-5 px-10 rounded-t-lg  text-center font-semibold text-lg">
            <Image className="z-10 md:mt-5 hover:scale-105 transition-all duration-300 flex justify-center items-center" src={"/albumdukat.png"} alt="Icon Galeri" width={1000} height={500} />
          </div>
          
        </div> */}
        {children}
    </main>
  );
}
