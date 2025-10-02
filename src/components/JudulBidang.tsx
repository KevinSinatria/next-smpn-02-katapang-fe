import SplitText from "./SplitText";

type JudulBidangProps = {
  bidang: string;
  tahunAwal: number;
  tahunAkhir: number;
  delay?: number;
};

export default function JudulBidang({ bidang, tahunAwal, tahunAkhir, delay }: JudulBidangProps) {
  return (
    <div className="bg-[#5E8964]/90 border-[#EB9B64] border-l-4 p-4 mt-6 max-w-md w-full rounded-lg">
      <h1 className="text-[#EB9B64] text-5xl font-bold">
        <SplitText
          text={`Bidang ${bidang}`} 
          delay={delay? delay : 100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="start"
        />
      </h1>
      <p className="text-white text-lg font-medium">
        Tahun Ajaran {tahunAwal}/{tahunAkhir}
      </p>
    </div>
  );
}