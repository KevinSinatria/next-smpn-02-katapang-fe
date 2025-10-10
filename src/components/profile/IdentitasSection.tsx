import Image from "next/image";
import SplitText from "../SplitText";
import { IdentitasData } from "@/app/lib/identitas-data";

export default function IdentitasSection() {
  return (
    <div className="relative w-full min-h-100 bg-[#5E8964] border-4 border-gray-300/80 rounded-2xl mt-15 shadow-lg">
      <div className="z-0 ">
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
          <h2 className="text-4xl font-bold text-white">
            <SplitText
              text={"Identitas SMPN 2 KATAPANG"}
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
        <div className="flex md:flex-row flex-col md:space-x-10 mt-5">
          <div className="flex flex-col md:flex-row w-full ">
            <div className="w-full max-w-sm">
              {IdentitasData.map((item, index) => (
                <div key={index} className="text-white space-y-4">
                  <p>
                    <span className="font-bold">Nama Sekolah:</span>{" "}
                    {item.namaSekolah}
                  </p>
                  <p>
                    <span className="font-bold">NPSN:</span> {item.npsn}
                  </p>
                  <p>
                    <span className="font-bold">Alamat:</span> {item.alamat}
                  </p>
                  <p>
                    <span className="font-bold">Kelurahan:</span>{" "}
                    {item.kelurahan}
                  </p>
                  <p>
                    <span className="font-bold">Kecamatan:</span>{" "}
                    {item.kecamatan}
                  </p>
                  <p>
                    <span className="font-bold">Kabupaten:</span>{" "}
                    {item.kabupaten}
                  </p>
                  <p>
                    <span className="font-bold">Provinsi:</span> {item.provinsi}
                  </p>
                  <p>
                    <span className="font-bold">Kode Pos:</span> {item.kodePos}
                  </p>
                  <p>
                    <span className="font-bold">Telepon:</span> {item.telepon}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-full max-h-120 flex flex-col justify-center items-center">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.08107806738!2d107.5656747757403!3d-6.999733868558516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68eeb22a421b33%3A0xe68a8efd627fad44!2sSMPN%202%20Katapang!5e0!3m2!1sid!2sid!4v1759133287100!5m2!1sid!2sid" className="w-full max-w-8xl  h-screen border-5 border-[#5E8964] rounded-2xl"></iframe>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}
