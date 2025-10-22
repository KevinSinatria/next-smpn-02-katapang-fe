import AgendaSection from "@/components/_components/AgendaSection";
import ArtikelSection from "@/components/_components/ArtikelSection";
import GaleriSection from "@/components/_components/GaleriSection";
import HeroSection from "@/components/_components/HeroSection";
import KepalaSekollah from "@/components/_components/KepalaSekolah";
import LokasiSection from "@/components/_components/LokasiSection";
import StaffSekolahSection from "@/components/_components/StaffSekolah";
export const dynamic = 'force-dynamic'
export default function Home() {
  return (
    <main className="overflow-hidden" >
      <HeroSection />
      <KepalaSekollah/>
      <StaffSekolahSection/>
      <GaleriSection/>
      <ArtikelSection/>
      <AgendaSection/>
      <LokasiSection/>
    </main>
  );
}
