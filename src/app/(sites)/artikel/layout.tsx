import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../../globals.css";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Artikel - SMPN 2 Katapang",
  description: "SMPN 2 Katapang - Sekolah Menengah Pertama Negeri 2 Katapang",
};


const categoriArtikel = [
  {
    id: 0,
    category: "Informasi Umum",
    link: "/artikel",
    created_at: "2019-08-24T14:15:22Z",
    updated_at: "2019-08-24T14:15:22Z",
  },
  {
    id: 2,
    category: "Prestasi",
    link: "/artikel",
    created_at: "2019-08-24T14:15:22Z",
    updated_at: "2019-08-24T14:15:22Z",
  },
  {
    id: 1,
    category: "Agenda Sekolah",
    link: "/artikel",
    created_at: "2019-08-24T14:15:22Z",
    updated_at: "2019-08-24T14:15:22Z",
  },
  {
    id: 3,
    category: "Pengunguman Siswa",
    link: "/artikel",
    created_at: "2019-08-24T14:15:22Z",
    updated_at: "2019-08-24T14:15:22Z",
  },
  {
    id: 4,
    category: "Karya Siswa",
    link: "/artikel",
    created_at: "2019-08-24T14:15:22Z",
    updated_at: "2019-08-24T14:15:22Z",
  },
];


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative min-h-screen bg-image h-auto pt-20 pb-10 overflow-hidden">
      <div className="absolute right-0 ">
        <div className="m-full max-w-sm p-5 mr-5 border-l-3 border-gray-500/70">
          <div className="w-full max-w-lg">
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
                <h1 className="text-lg text-[#5E8964] font-semibold transition-colors duration-300 group-hover:text-[#F96701]">
                  {item.category}
                </h1>
                <span className="ml-4 text-3xl text-[#F96701] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <MoveRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-4xl">
      {children}
      </div>
    </main>
  );
}
