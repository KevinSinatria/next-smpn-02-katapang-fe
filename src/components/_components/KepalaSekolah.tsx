import BodyKepalaSekolah from "../KepalaSekolah/BodyKepalaSekolah";
import TitleSambutan from "../KepalaSekolah/TitleSambutan";
export default function KepalaSekollah(){
  return(
    <section className="relative w-full min-h-screen">
      <TitleSambutan/>
      <BodyKepalaSekolah/>
    </section>
  )
}