import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footersection from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});


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
      <body className={` ${poppins.className}  antialiased`}>
        <Navbar />
        <div className="font-poppins">{children}</div>
        <Footersection/>
      </body>
    </html>
  );
}
