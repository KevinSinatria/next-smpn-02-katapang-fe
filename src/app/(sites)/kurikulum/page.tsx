import JudulBidang from "@/components/JudulBidang";

import KurikulumPage from "@/components/KurikurumPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kurikulum - SMPN 2 Katapang",
  description: "SMPN 2 Katapang - Sekolah Menengah Pertama Negeri 2 Katapang",
};

export default function Kesiswaan() {
  return (
    <main className="bg-image flex justify-center h-auto pt-20 pb-10 overflow-hidden">
      <div className="w-full px-5  lg:px-30">
        <JudulBidang bidang="Kurikulum" tahunAwal={2025} tahunAkhir={2026} />
        
        <KurikulumPage/>

      </div>
    </main>
  );
}