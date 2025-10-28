// Footer.tsx

import { InstagramIcon, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// 1. Definisikan tipe data yang diharapkan dari API
type SchoolInfo = {
  address: string;
  instagram: string;
  instagram_url: string;
  email: string;
  phone: string;
};

// 2. Buat fungsi terpisah untuk mengambil data di server
async function getSchoolInfo(): Promise<SchoolInfo> {
  try {
    const response = await fetch(
      "https://api.smpn2katapang.sch.id/school-informations",
      {
        next: { revalidate: 3600 }, // Cache data selama 1 jam
      }
    );

    if (!response.ok) {
      console.error("Failed to fetch footer data:", response.statusText);
      // Kembalikan data default jika API error
      return {
        address: "",
        instagram: "",
        instagram_url: "",
        email: "",
        phone: "",
      };
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching footer data:", error);
    // Kembalikan data default jika ada error jaringan
    return {
      address: "",
      instagram: "",
      instagram_url: "",
      email: "",
      phone: "",
    };
  }
}

// 3. Ubah komponen utama menjadi 'async'
export default async function Footer() {
  // 4. Panggil fungsi dan dapatkan data langsung di server
  const schoolInfo = await getSchoolInfo();

  const pages = [
    { name: "Kesiswaan", link: "/kesiswaan" },
    { name: "Sarana Prasarana", link: "/sapras" },
    { name: "Hubungan Masyarakat", link: "/humas" },
    { name: "Kurikulum", link: "/kurikulum" },
    { name: "Artikel", link: "/artikel" },
    { name: "Galeri", link: "/galeri" },
  ];

  return (
    <footer className="bg-[#5E8964] text-white w-full">
      <div
        className="w-full h-5"
        style={{
          backgroundImage: "url('/garisFooter.png')",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 py-12 w-full">
        {/*
         * PERBAIKAN GRID:
         * 1. Mengganti grid-cols-4 -> grid-cols-3 di layar besar (lg)
         * 2. Mengganti gap-49 (typo) -> lg:gap-8
         */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Kolom 1: Logo */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/logo_smp2.png"
                alt="Logo SMPN 2 Katapang"
                width={100}
                height={100}
                className="object-contain"
              />
              <div>
                <h2 className="font-bold text-lg leading-tight">
                  SMPN 2 KATAPANG
                </h2>
                <p className="text-sm opacity-90">Bangkit Berprestasi</p>
              </div>
            </div>
          </div>

          {/* Kolom 2: Halaman */}
          <div>
            <p className="font-bold">Halaman</p>
            <ul className="space-y-2">
              {pages.map((page) => (
                <li key={page.name}>
                  <Link
                    href={page.link}
                    className="hover:text-gray-300 transition-colors"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <p className="font-bold">Hubungi Kami</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 w-full">
                <span className="mt-1 flex-shrink-0">
                  <MapPin size={20} />
                </span>
                <Link
                  href={"https://maps.app.goo.gl/sGJHw1SGpMgBmoJU7"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  {schoolInfo.address}
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0">
                  <InstagramIcon size={20} />
                </span>
                <Link
                  href={schoolInfo.instagram_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  {schoolInfo.instagram}
                </Link>
              </li>

              {/*
               * ======================================
               * INI PERBAIKAN UTAMANYA
               * 1. Hapus 'max-w-10' dari <li>
               * 2. Tambah 'break-all' ke <Link>
               * ======================================
               */}
              <li className="flex items-start gap-3"> {/* 1. Hapus max-w-10 */}
                <span className="mt-1 flex-shrink-0">
                  <Mail size={20} />
                </span>
                <Link
                  href={`mailto:${schoolInfo.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors break-all" // 2. Tambah break-all
                >
                  {schoolInfo.email}
                </Link>
              </li>
              {/* ====================================== */}

              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0">
                  <Phone size={20} />
                </span>
                <Link
                  href={`tel:${schoolInfo.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  {schoolInfo.phone}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-opacity-20 py-4">
        <p className="text-sm text-center text-gray-300">
          Developed by{" "}
          <Link
            href="https://nexvibe.biz.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white hover:underline"
          >
            ©Nexvibe
          </Link>
        </p>
      </div>
      <div
        className="w-full h-5"
        style={{
          backgroundImage: "url('/garisFooter.png')",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
        }}
        aria-hidden="true"
      />
    </footer>
  );
}