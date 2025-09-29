import AgendaSection from "@/components/_components/AgendaSection";
import ArtikelSection from "@/components/_components/ArtikelSection";
import GaleriSection from "@/components/_components/GaleriSection";
import HeroSection from "@/components/_components/HeroSection";
import KepalaSekollah from "@/components/_components/KepalaSekolah";
import LokasiSection from "@/components/_components/LokasiSection";
import StaffSekolahSection from "@/components/_components/StaffSekolah";
import VisiMisiSection from "@/components/_components/VisiMisiSection";

export default function Home() {
  return (
    <main className="overflow-hidden" >
      <HeroSection />
      <VisiMisiSection />
      <KepalaSekollah/>
      <StaffSekolahSection/>
      <GaleriSection/>
      <ArtikelSection/>
      <AgendaSection/>
      <LokasiSection/>
    </main>
  );
}
