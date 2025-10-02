import Image from "next/image";

export default function BodyHumas() {
  return (
   <div className="relative w-full min-h-screen bg-[#5E8964]/80 border-4 border-gray-300/80 rounded-2xl mt-5 shadow-lg">
         <div className="z-0 ">
           <Image
             src={"/batikmegamendung.png"}
             alt="Latar belakang lingkaran"
             width={300}
             height={300}
             className="absolute -mt-10 -right-34  rotate-13"
           />
           <Image
             src={"/batikmegamendung.png"}
             alt="Latar belakang lingkaran"
             width={300}
             height={300}
             className="absolute mt-230 -right-34  rotate-13"
           />
           <Image
             src={"/batik/batik3.png"}
             alt="Latar belakang lingkaran"
             width={300}
             height={300}
             className="absolute bottom-0 -left-20"
           />
         </div>
         <div
           className="w-full h-5 z-0"
           style={{
             backgroundImage: "url('/garisFooter.png')",
             backgroundRepeat: "repeat-x",
             backgroundSize: "auto 100%",
           }}
           aria-hidden="true"
         />
         <div
           className="w-full h-5 absolute z-0 bottom-0"
           style={{
             backgroundImage: "url('/garisFooter.png')",
             backgroundRepeat: "repeat-x",
             backgroundSize: "auto 100%",
           }}
           aria-hidden="true"
         />
         <div className="px-6 md:px-8 py-8">
           <div className="z-10 relative w-full pb-6 border-b flex justify-center items-center">
             <Image
               src={"/katapengantar.png"}
               alt="Kata Pengantar"
               width={1000}
               height={1000}
               className="w-full max-w-sm hover:scale-105 transition-all duration-300 ease-in-out"
             />
           </div> 

        <div className="text-lg md:text-xl text-white mt-6 space-y-5 text-justify">
          <p>
            Selamat datang di laman Humas SMPN 2 Katapang. Kami hadir sebagai{" "}
            <strong>jembatan komunikasi</strong> yang menghubungkan sekolah
            dengan orang tua, masyarakat, dan mitra kerja sama. Melalui
            informasi yang terbuka, kegiatan yang inspiratif, serta kerja sama
            yang harmonis, Humas berkomitmen mendukung tercapainya visi sekolah
            mencetak generasi unggul, berkarakter, dan siap bersaing di era
            global.
          </p>
          <p>
            Humas tidak hanya menjadi corong informasi, tetapi juga{" "}
            <strong>ruang kolaborasi</strong>. Bersama, kita{" "}
            <strong>membangun citra positif sekolah</strong>, merayakan setiap
            prestasi, dan membuka peluang kerja sama yang bermanfaat untuk
            perkembangan peserta didik maupun sekolah secara keseluruhan.
          </p>

          <div className="mt-10">
            <p>Wakasek Bid. Humas</p>
            <p className="font-bold mt-4">
              Nelly Fatma Elsis Yunda, S.Pd, M.MPd
            </p>
            <p>NIP. 197604222008012005</p>
          </div>
        </div>
      </div>
    </div>
  );
}
