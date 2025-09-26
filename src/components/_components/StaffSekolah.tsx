import TitleStaffSekolah from "../TitleStaffSekolah";
import BodyStaffSekolah from "../BodyStaffSekolah";

export default function StaffSekolahSection(){
  return(
    <section className="relative w-full min-h-screen h-280 bg-image">
        <TitleStaffSekolah/>
      <BodyStaffSekolah/>
    </section>
  )
}