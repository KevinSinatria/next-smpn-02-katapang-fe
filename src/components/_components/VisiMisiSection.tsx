import Image from "next/image";
import CardVisiMisi from "../BodyVisiMisi";
import BodyVisiMisi from "../BodyVisiMisi";


export default function VisiMisiSection() {
  return (
    <section className="relative w-full min-h-screen h-280 bg-image ">
      <div className="absolute w-[2200px] h-screen rotate-6 lg:-right-30 -right-90 flex">
        <Image
          src="/visimisi.png"
          alt="Kotak Dekorasi"
          fill
          className="object-contain"
          priority
        />
      </div>
      <BodyVisiMisi/>
    </section>
  );
}
