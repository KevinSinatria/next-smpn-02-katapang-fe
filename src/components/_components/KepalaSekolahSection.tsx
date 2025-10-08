import BodyKepalaSekolahSection from "../KepalaSekolah/BodyKepalaSekolahSection";
import TitleSambutanSection from "../KepalaSekolah/TitleSambutanSection";
export default function KepalaSekolahSection(){
  return(
    <section className=" w-full p-5 bg-image">
      <TitleSambutanSection />
      <BodyKepalaSekolahSection/>
    </section>
  )
}