import HeroSection from "@/components/_components/HeroSection";
import VisiMisiSection from "@/components/_components/VisiMisiSection";
import Title from "@/components/Title";

export default function Home() {
  return (
    <main className="overflow-hidden" >
      <HeroSection />
      <VisiMisiSection />
      {/* <Title decoration="right"/> */}
    </main>
  );
}
