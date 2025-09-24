import Image from "next/image";
import BodyVisiMisi from "../BodyVisiMisi";
import Title from "../Title";


export default function VisiMisiSection() {
  return (
    <section className="relative w-full min-h-screen h-280 bg-image">
      <div className="absolute w-[1900px] md:w-[2200px]  h-screen rotate-6 lg:-right-50 -right-90 flex bg-image">
        <Image
          src="/visimisi.png"
          alt="Kotak Dekorasi"
          fill
          className="object-contain"
          priority
        />
      </div>
      <BodyVisiMisi/>
      <Title decoration="right" />
    </section>
  );
}
