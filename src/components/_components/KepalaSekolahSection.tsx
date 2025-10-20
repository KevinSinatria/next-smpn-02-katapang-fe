import BodyKepalaSekolah from "../KepalaSekolah/BodyKepalaSekolah";
import TitleSambutanSection from "../KepalaSekolah/TitleSambutanSection";
export default function  KepalaSekolahSection(){
  return(
    <section className=" w-full p-5 bg-image">
      <TitleSambutanSection />
      <BodyKepalaSekolah/>
    </section>
  )
}