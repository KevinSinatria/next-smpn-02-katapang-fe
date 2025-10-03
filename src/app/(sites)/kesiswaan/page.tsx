import JudulBidang from "@/components/JudulBidang";
import KataPengantarKesiswaan from "@/components/KataPengantarKesiswaan";

export default function Kesiswaan() {
  return (
    <main className="bg-image flex justify-center h-auto pt-20 pb-10 overflow-hidden">
      <div className="w-full px-5  lg:px-30">
        {/* judul */}
        <JudulBidang bidang="Kesiswaan" tahunAwal={2025} tahunAkhir={2026} />
        
        <KataPengantarKesiswaan />

      </div>
    </main>
  );
}