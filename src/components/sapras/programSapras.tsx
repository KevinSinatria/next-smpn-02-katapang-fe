"use client";
import { useState } from "react";

// Tipe untuk props ikon
type IconProps = {
  className: string;
};

// Komponen ikon chevron untuk dropdown
const ChevronDownIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
      clipRule="evenodd"
    />
  </svg>
);
const ProgramCard = ({ title, items }: { title: string; items: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full lg:w-1/2 bg-white p-6 md:p-8 rounded-xl shadow-2xl transition-all duration-300">
      <button
        onClick={handleToggle}
        className="flex w-full items-center justify-between text-left"
        aria-expanded={isOpen}
      >
        <h2 className="text-2xl font-bold text-gray-800">
          {title}
        </h2>
        <ChevronDownIcon
          // 3. Rotasi ikon bergantung pada state 'isOpen'
          className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
      <div
        // 4. Animasi buka-tutup yang halus menggunakan max-height
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px] mt-6' : 'max-h-0'}`}
      >
        <ol className="space-y-4 list-decimal list-inside text-gray-700 leading-relaxed border-t-2 border-gray-200 pt-6">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};


// 2. KOMPONEN UTAMA MENJADI LEBIH BERSIH
export default function ProgramSapras() {
  const programUmumItems = [
    "Membantu tugas kepala sekolah di dalam penyelenggaraan kegiatan sekolah sehari-harinya terutama menyangkut urusan penyediaan dan pemeliharaan sarana dan prasarana.",
    "Menyediakan, mengatur, dan memelihara sarana dan prasarana sekolah agar kegiatan belajar mengajar berjalan dengan tertib dan lancar.",
    "Mengupayakan kesadaran seluruh warga sekolah (guru, karyawan, siswa) untuk ikut memelihara keindahan dan kebersihan lingkungan sekolah.",
    "Mengusahakan pengadaan sarana dan prasarana yang belum ada, serta memperbaiki yang telah rusak.",
    "Menyusun rencana kebutuhan sarana dan prasarana sekolah.",
    "Mengkoordinasikan pendayagunaan sarana dan prasarana sekolah.",
    "Mengelola pembiayaan alat-alat pengajaran.",
    "Menyusun laporan pelaksanaan urusan sarana dan prasarana sekolah.",
  ];

  const programKhususItems = [
    "Pemeliharaan kebersihan dan keindahan sekolah serta lingkungan secara teratur dengan meningkatkan kinerja karyawan.",
    "Menyediakan sarana dan prasarana yang dibutuhkan dalam penyelenggaraan sekolah seperti ATK, kertas, dan lain-lain.",
    "Mencatat dan mengawasi penggunaan sarana dan prasarana sekolah secara teratur.",
    "Pembinaan tenaga karyawan (kebersihan & pemeliharaan) agar mampu meningkatkan partisipasi sesuai tugasnya.",
    "Mengikutsertakan pamong, karyawan, serta siswa untuk ikut memelihara sarana dan prasarana, kebersihan, serta keindahan sekolah.",
    "Mengkoordinir kebersihan semua ruangan (kelas, TU, guru, masjid, dll) setiap hari.",
    "Mengkoordinir kebersihan halaman, taman, kamar kecil, serta ketersediaan air setiap hari.",
  ];

  return (
    <div className="w-full font-sans p-4 sm:p-6 md:p-10 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-10 drop-shadow-lg">
          Program Kerja Sarana & Prasarana
        </h1>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <ProgramCard title="PROGRAM UMUM" items={programUmumItems} />
          <ProgramCard title="PROGRAM KHUSUS" items={programKhususItems} />
        </div>
      </div>
    </div>
  );
}