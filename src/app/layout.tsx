import type { Metadata } from "next";
import { Poppins,Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "700", ],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Beranda - SMPN 2 Katapang",
  description: "SMPN 2 Katapang - Sekolah Menengah Pertama Negeri 2 Katapang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${poppins.className} antialiased`}>
        <Navbar />
        <div className="mt-10 font-poppins">{children}</div>
      </body>
    </html>
  );
}
