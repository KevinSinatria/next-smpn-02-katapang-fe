import { MoveRight } from "lucide-react";
import Image from "next/image";
import ListCardArtikel from "./ListCardArtikel";
import { link } from "fs";
import Link from "next/link";

const categoriArtikel = [
  {
    id: 0,
    category: "Kesiswaan",
    link:"/artikel/kesiswaan",
    created_at: "2019-08-24T14:15:22Z",
    updated_at: "2019-08-24T14:15:22Z",
  },
  {
    id: 2,
    category: "Hubungan Masyarakat",
    link:"/artikel/hubungan-masyarakat",
    created_at: "2019-08-24T14:15:22Z",
    updated_at: "2019-08-24T14:15:22Z",
  },
  {
    id: 0,
    category: "Kurikulum",
    link:"/artikel/kurikulum",
    created_at: "2019-08-24T14:15:22Z",
    updated_at: "2019-08-24T14:15:22Z",
  },
];

export default function BodyArtikel() {
  return (
    <div className="w-full p-10 flex ">
      <div className="max-w-xl p-5 ">
        <div className="w-full ">
          <Image
            src="/kategoriartikel.png"
            alt="Kotak Dekorasi"
            width={900}
            height={400}
            className="h-auto w-full transition duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <div className="mt-5">
          {categoriArtikel.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="group my-5 flex cursor-pointer items-center transition-transform duration-300 ease-in-out hover:-translate-y-1"
            >
              <h1 className="text-4xl text-[#5E8964] font-semibold transition-colors duration-300 group-hover:text-[#F96701]">
                {item.category}
              </h1>
              <span className="ml-4 text-3xl text-[#F96701] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <MoveRight />
              </span>
            </Link>
          ))}
        </div>
      </div>
      <ListCardArtikel />
    </div>
  );
}
