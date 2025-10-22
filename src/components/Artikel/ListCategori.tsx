import { MoveRight } from "lucide-react";
import Link from "next/link";

// Tipe untuk Kategori yang akan kita buat
type Category = {
  id: number; // Kita akan buat ID sementara
  name: string;
  slug: string;
};


// Fungsi ini mengambil artikel, lalu mengekstrak kategori unik

export default  async function ListCategori() {
  async function getUniqueCategoriesFromArticles() {
    try {
      const res = await fetch(`https://api.smpn2katapang.sch.id/article-categories`);
  
      if (!res.ok) {
        console.error("Gagal mengambil data artikel:", res.statusText);
        return null;
      }
  
      const result = await res.json();
      const category: Category[] = result.data;
  
      const categoryMap = new Map<string, Category>();
  
      category.forEach((item) => {
        if (!categoryMap.has(item.name)) {
          categoryMap.set(item.name, item);
        }
      });
      return Array.from(categoryMap.values());
  
    } catch (error) {
      console.error("Error saat memproses kategori:", error);
      return null;
    }
  }

  const categories = await getUniqueCategoriesFromArticles();

  if (!categories || categories.length === 0) {
    return <div className="mt-5 p-3 text-gray-500">Kategori tidak ditemukan.</div>;
  }

  return (
    <div className="mt-5 flex flex-col gap-2 -space-y-7">
      {categories.map((item) => (
        <Link
          href={`/artikel/kategori/${item.slug }`}
          key={item.id}
          className="group p-3 rounded-lg flex justify-start items-center cursor-pointer transition-colors duration-200"
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