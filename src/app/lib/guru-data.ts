// lib/guru-data.ts

// 1. Definisikan "bentuk" atau "tipe" dari satu objek guru
export type Guru = {
  image: string;
  name: string;
  jabatan: string;
};

// 2. Terapkan tipe tersebut ke array datamu
// Tanda ": Guru[]" berarti "ini adalah sebuah array yang setiap isinya harus sesuai dengan tipe Guru"
export const guruData: Guru[] = [
  {
    image: "/guru/kevin.png",
    name: "Kevin Sinatria Budiman, S.Pd.",
    jabatan: "Guru Matematika",
  },
  {
    image: "/guru/nazmi.png",
    name: "Nazmi Ramadhani, S.Pd.",
    jabatan: "Wakasek Kesiswaan",
  },
  {
    image: "/guru/daffa.png",
    name: "Daffa Al-Sabri, S.Pd.",
    jabatan: "Guru PJOK",
  },
  {
    image: "/guru/rian.png",
    name: "M. Rian Fauzan, S.Pd.",
    jabatan: "Wakasek Kurikulum",
  },
  {
    image: "/guru/waqqir.png",
    name: "Waqqir Humaid Al Qais, S.Pd.",
    jabatan: "Wakasek Sarana & Prasarana",
  },
  {
    image: "/guru/rijal.png",
    name: "Rijal Kurniawan, S.Pd.",
    jabatan: "Guru Sejarah",
  },
];