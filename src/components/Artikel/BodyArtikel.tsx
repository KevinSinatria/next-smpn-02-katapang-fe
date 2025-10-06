
import Image from "next/image";
import ListCardArtikel from "./ListCardArtikel";
import ListCategori from "./ListCategori";

export default function BodyArtikel() {
  return (
    <div className="w-full p-2 flex flex-col lg:flex-row">
      <div className="max-w-xl p-5 ">
        <div className="w-full max-w-lg">
          <Image
            src="/kategoriartikel.png"
            alt="Kotak Dekorasi"
            width={900}
            height={400}
            className="h-auto w-full transition duration-300 ease-in-out hover:scale-105"
          />
        </div>
       <ListCategori/>
      </div>
      <ListCardArtikel />
    </div>
  );
}
