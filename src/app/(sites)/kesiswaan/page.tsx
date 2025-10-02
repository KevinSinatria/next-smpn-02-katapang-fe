import JudulBidang from "@/components/JudulBidang";
import KataPengantarKesiswaan from "@/components/KataPengantarKesiswaan";

export default function Kesiswaan() {
  return (
    <main className="bg-image flex justify-center h-auto pt-20 pb-10 overflow-hidden">
      <div className="w-full px-5  lg:px-30">
        {/* judul */}
        <JudulBidang bidang="Kesiswaan" tahunAwal={2025} tahunAkhir={2026} />
        
        <KataPengantarKesiswaan />
        Selamat datang  di Web SMP Negeri 2 Katapang bagian Sarana Prasarana untuk mendapatkan informasi Sarana dan Prasarana di sekolah kami. Di sini akan kami informasikan segala hal yang berkaitan dengan sarana prasarana yang ada di SMP Negeri 2 Katapang seperti fasilitas dan asset. Semua data tersimpan dan bisa diakses kapan saja. Kita wujudkan pengelolaan dan penataan sekolah yang optimal dan berkualitas.


      </div>
    </main>
  );
}