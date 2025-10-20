import JudulBidang from "@/components/JudulBidang";
import BodySapras from "@/components/sapras/BodySapras";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Sarana dan Prasarana - SMPN 2 Katapang",
  description: "SMPN 2 Katapang - Sekolah Menengah Pertama Negeri 2 Katapang",
};

export default function Sapras() {
  return (
    <main className="bg-image flex justify-center h-auto pt-20 pb-10 overflow-hidden">
      <div className="w-full px-5  lg:px-30">
        {/* judul */}
        <JudulBidang bidang="Sarana dan Prasarana" delay={50} tahunAwal={2025} tahunAkhir={2026} />
        
        <BodySapras/>
      </div>
    </main>
  );
}