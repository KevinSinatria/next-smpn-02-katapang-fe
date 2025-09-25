import HeroSection from "@/components/_components/HeroSection";
import KepalaSekollah from "@/components/_components/KepalaSekolah";
import VisiMisiSection from "@/components/_components/VisiMisiSection";
import Title from "@/components/TitleSambutan";

export default function Home() {
  return (
    <main className="overflow-hidden" >
      <HeroSection />
      <VisiMisiSection />
      <KepalaSekollah/>
    </main>
  );
}
