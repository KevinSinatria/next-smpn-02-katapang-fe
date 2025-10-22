import Image from "next/image";
import SplitText from "../SplitText";

export default function SejarahSection() {
  return (
    <div className="w-full min-h-screen bg-[#5E8964] border-4 flex flex-col justify-center items-center border-gray-300/80 rounded-2xl mt-20 shadow-lg ">
      <div className="z-10">
        <Image
          src={"/batikmegamendung.png"}
          alt="Latar belakang lingkaran"
          width={300}
          height={300}
          className="absolute -mt-10 -right-34  rotate-13"
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

      <div className="px-2 md:px-19 py-8">
        <div className="z-10 relative w-full pb-6 border-b flex justify-center items-center">
          <h2 className="text-4xl font-bold text-white">
            <SplitText
              text={"Sejarah SMPN 2 KATAPANG"}
              className="text-md font-semibold"
              delay={60}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="start"
            />
          </h2>
        </div>
        <div className="flex md:flex-row flex-col md:space-x-10">
          <div className="w-full max-w-sm">
            <Image
              src={"/logo_smp2.png"}
              alt="Logo Sekolah"
              width={500}
              height={500}
              className="w-full hover:scale-105 transition-all duration-300 ease-in-out mt-6"
            />
            <Image
              src={"/dokumentasi/1.jpg"}
              alt="Logo Sekolah"
              width={500}
              height={500}
              className="w-full hover:scale-105 transition-all rounded-lg hidden sm:block duration-300 ease-in-out mt-6"
            />
          </div>
          <div className="text-sm text-white mt-6 space-y-5 text-justify relative z-10 ml-5">
            <p>SMPN 2 Katapang didirikan pada tahun 1995 dan mulai beroperasi pada tahun 1996 di komplek Gading Junti Asri, Desa Sangkanhurip, Kecamatan Katapang. Sekolah ini memiliki luas tanah sekitar 3800 meter persegi dan luas bangunan kurang lebih 1.108 meter persegi, serta saat ini terakreditasi B dengan 1334 siswa dan 30 rombongan belajar. </p>
            <p>SMPN 2 Katapang merupakan salah satu sekolah yang berada di bawah naungan Dinas Pendidikan Kabupaten Bandung. Sekolah ini memiliki visi untuk menjadi sekolah yang unggul dalam prestasi akademik dan non-akademik, serta berkarakter islami. Misi sekolah ini meliputi penyelenggaraan pendidikan yang berkualitas, pengembangan potensi siswa, peningkatan kompetensi guru, serta peningkatan sarana dan prasarana pendidikan.</p>
            <p>SMPN 2 Katapang memiliki berbagai fasilitas yang mendukung proses pembelajaran, seperti ruang kelas yang nyaman, laboratorium komputer, perpustakaan, lapangan olahraga, dan ruang seni. Selain itu, sekolah ini juga menyediakan berbagai ekstrakurikuler untuk mengembangkan minat dan bakat siswa, seperti pramuka, seni tari, musik, olahraga, dan lain-lain.</p>
            <p>Dengan komitmen yang kuat terhadap pendidikan berkualitas dan pengembangan karakter siswa, SMPN 2 Katapang terus berupaya untuk memberikan yang terbaik bagi para siswanya dan berkontribusi positif bagi masyarakat sekitar.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
