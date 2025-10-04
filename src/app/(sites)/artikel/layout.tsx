import type { Metadata } from "next";
import "../../globals.css";

export const metadata: Metadata = {
  title: "Artikel - SMPN 2 Katapang",
  description: "SMPN 2 Katapang - Sekolah Menengah Pertama Negeri 2 Katapang",
};

export default function ArtikelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative min-h-screen bg-image h-auto pb-10 overflow-x-hidden">
      {children}
    </main>
  );
}