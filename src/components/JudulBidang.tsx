type JudulBidangProps = {
  bidang: string;
  tahunAwal: number;
  tahunAkhir: number;
};

export default function JudulBidang({ bidang, tahunAwal, tahunAkhir }: JudulBidangProps) {
  return (
    <div className="bg-[#5E8964]/90 border-[#EB9B64] border-l-4 p-4 mt-6 max-w-md w-full rounded-lg">
      <h1 className="text-[#EB9B64] md:text-5xl text-3xl font-bold">
        Bidang {bidang}
      </h1>
      <p className="text-white text-lg font-medium">
        Tahun Ajaran {tahunAwal}/{tahunAkhir}
      </p>
    </div>
  );
}