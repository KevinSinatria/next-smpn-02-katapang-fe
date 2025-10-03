import Image from "next/image";
import BodyVisiMisi from "../VisiMisi/BodyVisiMisi";

export default function VisiMisiSection() {
  return (
    <section className="relative w-full min-h-screen mt-25 mb-10 ">
      <div className="absolute w-500 -left-90 md:-left-30 h-screen rotate-6 z-10 ">
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
