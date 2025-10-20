import Image from "next/image";
import EditorJsRenderer from "../EditorJsRenderer";

type HeadMasters = {
  name: string;
  image_url: string;
  welcoming_sentence: string;
};

async function GetHeadmasters(): Promise<HeadMasters | null> {
  try {
    const res = await fetch(
      "https://api.smpn2katapang.sch.id/headmasters/current",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.error("Gagal mengambil data headmaster:", res.statusText);
      return null;
    }

    const responseJson = await res.json();
    console.log(responseJson.data);
    return responseJson.data || null;
  } catch (error) {
    console.error("Terjadi error di GetHeadmasters:", error);
    return null;
  }
}

export default async function   BodyKepalaSekolah() {
  const datakepalaSekolahh = await GetHeadmasters();

  if (!datakepalaSekolahh) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        Data Kepala Sekolah tidak dapat dimuat.
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex items-center  ">
      <div className=" absolute w-[2000px] -left-[13.75rem] h-screen ">
        <Image
          src={"/kotak2.png"}
          alt="Kotak dekorasi"
          fill
          className="-right-20 m-0 -rotate-5"
          priority
        />
      </div>

      <div className="min-h-screen w-full flex flex-col lg:flex-row justify-center items-center p-4 sm:p-8 gap-8 z-10">
        <div className="w-full max-w-md lg:w-1/2 flex justify-center items-center">
          <Image
            src={datakepalaSekolahh.image_url}
            alt={`Foto ${datakepalaSekolahh.name}`}
            width={1200}
            height={1200}
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
        <div className="w-full max-w-xl lg:w-1/2">
          <div className="bg-white w-full text-md rounded-2xl border-4 border-[#FA6602] text-black flex flex-col px-5 ">
            <EditorJsRenderer data={datakepalaSekolahh.welcoming_sentence} />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
