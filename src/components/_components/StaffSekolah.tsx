import TitleStaffSekolah from "../StaffSekolah/TitleStaffSekolah";
import BodyStaffSekolah from "../StaffSekolah/BodyStaffSekolah";

export default function StaffSekolahSection(){
  return(
    <section className="relative w-full h-[530px] bg-image mt-10">
      <TitleStaffSekolah/>
      <BodyStaffSekolah/>
    </section>
  )
}