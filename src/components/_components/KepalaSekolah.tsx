import BodyKepalaSekolah from "../KepalaSekolah/BodyKepalaSekolah";
import TitleSambutan from "../KepalaSekolah/TitleSambutan";
export default function KepalaSekollah(){
  return(
    <section className="relative w-full min-h-screen p-5 bg-image">
      <TitleSambutan/>
      <BodyKepalaSekolah/>
    </section>
  )
}