import Link from "next/link";
import CardArtikelBeranda from "./CardArtikelBeranda";
import { ArtikelData } from "@/app/lib/artikel-data";

export default function ListCardArtikel() {
  return (
    // Perubahan ada di `className` div di bawah ini
    <div className="w-full p-4 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
      {ArtikelData.map((item, index) => (
        <Link href={`/artikel/${item.slug}`} key={index}>
          <CardArtikelBeranda
            key={index}
            title={item.title}
            tanggal={new Date(item.published_at)}
            image={item.thumbnail_url}
          />
        </Link>
      ))}

      <Link href="/artikel">
        <CardArtikelBeranda
          title="Ayo Liat Lebih Lanjut Artikel Artikel Kami dengan klik disini"
          tanggal={new Date("2019-08-24T14:15:22Z")}
          image="/bgFooter.png"
        />
      </Link>
    </div>
  );
}
