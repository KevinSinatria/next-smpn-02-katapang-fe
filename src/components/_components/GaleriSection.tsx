import BodyGaleri from "../BodyGaleri";
import TitleGaleri from "../TitleGaleri";

export default function GaleriSection(){
  return (
    <section className="h-auto pb-5">
      <TitleGaleri />
      <BodyGaleri/>
    </section>
  )
}