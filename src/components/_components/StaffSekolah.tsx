import TitleStaffSekolah from "../StaffSekolah/TitleStaffSekolah";
import BodyStaffSekolah from "../StaffSekolah/BodyStaffSekolah";

export default function StaffSekolahSection(){
  return(
    <section className="relative w-full h-[450px] bg-image">
        <TitleStaffSekolah/>
      <BodyStaffSekolah/>
    </section>
  )
}