import BodyGaleri from "../BodyGaleri";
import TitleGaleri from "../TitleGaleri";

export default function GaleriSection(){
  return (
    <section className="bg-image min-h-screen pb-5">
      <TitleGaleri />
      <BodyGaleri/>
    </section>
  )
}