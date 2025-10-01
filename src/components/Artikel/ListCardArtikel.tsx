import Link from "next/link";
import CardArtikelBeranda from "./CardArtikelBeranda";

const ArtikelBeranda = [
  {
    title: "Aku Seorang Kapiten Mempunyai Pedang Panjang",
    tanggal: new Date("2019-08-24T14:15:22Z"),
    image: "/galeriBeranda/gambar1.png",
  },
  {
    title: "Aku Seorang Kapiten Mempunyai Pedang Panjang",
    tanggal: new Date("2019-08-24T14:15:22Z"),
    image: "/galeriBeranda/gambar2.png",
  },
  {
    title: "Aku Seorang Kapiten Mempunyai Pedang Panjang",
    tanggal: new Date("2019-08-24T14:15:22Z"),
    image: "/galeriBeranda/gambar3.png",
  },
];

export default function ListCardArtikel() {
  return (
    // Perubahan ada di `className` div di bawah ini
    <div className="w-full p-4 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
      {ArtikelBeranda.map((item, index) => (
        <Link href="/artikel" key={index}>
          <CardArtikelBeranda
            key={index}
            title={item.title}
            tanggal={item.tanggal}
            image={item.image}
          />
        </Link>
      ))}

      <Link href="/artikel">
        <CardArtikelBeranda
          title="Ayo Liat Lebih Lanjut Artikel Artikel Kami dengan klik disini"
          tanggal={new Date("2019-08-24T14:15:22Z")}
          image="/logo_smp2.png"
        />
      </Link>
    </div>
  );
}
