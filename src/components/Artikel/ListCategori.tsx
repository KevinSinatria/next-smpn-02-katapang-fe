import { categories } from "@/app/lib/artikel-data";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function ListCategori() {
  return (
    <div className="mt-5 flex flex-col gap-2 -space-y-7">
      {categories.map((item) => (
        <Link
          href={`/artikel/kategori/${item.slug}`}
          key={item.id} 
          className="group p-3 rounded-lg flex justify-start items-center cursor-pointer transition-colors duration-200 "
        >
          <h1 className="text-lg text-[#5E8964] font-semibold transition-colors duration-300 group-hover:text-[#F96701]">
            {item.name}
          </h1>
          <span className="text-3xl text-[#F96701] opacity-0 transition-opacity duration-300 ml-3 group-hover:opacity-100">
            <MoveRight size={20} />
          </span>
        </Link>
      ))}
    </div>
  );
}