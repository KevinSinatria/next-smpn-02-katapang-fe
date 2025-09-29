import BodyGaleri from "../BodyGaleri";
import TitleGaleri from "../TitleGaleri";

export default function GaleriSection(){
  return (
    <div className="bg-image min-h-screen">
      <TitleGaleri />
      <BodyGaleri/>
    </div>
  )
}