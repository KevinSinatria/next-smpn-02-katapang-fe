import BodyArtikel from "../Artikel/BodyArtikel";
import TitleArtikel from "../TitleArtikel";

export default function ArtikelSection() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center">
      <TitleArtikel/>
      <BodyArtikel />
    </section>
  );
}
