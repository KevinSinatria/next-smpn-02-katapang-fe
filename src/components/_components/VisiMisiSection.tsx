import Image from "next/image";
import BodyVisiMisi from "../BodyVisiMisi";

export default function VisiMisiSection() {
  return (
    <section className="relative w-full min-h-screen h-280 bg-image">
      <div className="absolute w-[2200px] -left-90 md:-left-30 h-screen rotate-6 z-10 ">
        <Image
          src="/visimisi.png"
          alt="Kotak Dekorasi"
          fill
          priority
        />
      </div>
      <BodyVisiMisi/>
    </section>
  );
}
