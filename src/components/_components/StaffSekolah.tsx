import TitleStaffSekolah from "../TitleStaffSekolah";
import BodyStaffSekolah from "../BodyStaffSekolah";

export default function StaffSekolahSection(){
  return(
    <section className="relative w-full h-[450px] bg-image">
        <TitleStaffSekolah/>
      <BodyStaffSekolah/>
    </section>
  )
}