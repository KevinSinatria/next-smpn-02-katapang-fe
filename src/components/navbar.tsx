"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk hamburger menu

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menutup menu saat navigasi di mobile
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const NavItems = [
    {
      name: "Kesiswaan",
      link: "/kesiswaan",
    },
    { name: "Sarana Prasarana", link: "/sapras" },
    { name: "Hubungan Masyarakat", link: "/humas" },
    { name: "Artikel", link: "/artikel" },
    { name: "Galeri", link: "/galeri" },
  ];
  const pathname = usePathname();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 font-poppins transition-all duration-300 ${
        scrolled || isMenuOpen ? "shadow-lg bg-white" : "shadow-sm bg-white"
      }`}
    >
      {/* --- Bagian Navbar Utama --- */}
      <div className="w-full flex justify-between items-center px-4 md:px-10 py-2">
        {/* Logo */}
        <Link href={"/"} className="flex gap-3 md:gap-5 items-center">
          <Image
            src={"/logo_smp2.png"}
            alt="LogoSMPN2Katapang"
            width={60}
            height={60}
          />
          <p className="text-xl md:text-2xl font-bold font-inter text-black">
            SMPN 2 KATAPANG
          </p>
        </Link>

        {/* --- Navigasi Desktop (Tampil di layar > md) --- */}
        <div className="hidden md:flex text-lg gap-5">
          {NavItems.map((item, i) => (
            <div className="group text-[#9D9D9D] cursor-pointer" key={i}>
              <Link href={item.link} className="flex flex-col items-center">
                <h1
                  className={`transition-colors duration-300 ${
                    pathname.startsWith(item.link)
                      ? "text-[#4D6450]"
                      : "text-[#9D9D9D] group-hover:text-[#4D6450]"
                  }`}
                >
                  {item.name}
                </h1>
                <span
                  className={`mt-1 h-0.5 transition-all duration-300 ${
                    pathname.startsWith(item.link)
                      ? "w-10 bg-[#4D6450]"
                      : "w-0 group-hover:w-10 group-hover:bg-[#4D6450]"
                  }`}
                />
              </Link>
            </div>
          ))}
        </div>

        {/* --- Tombol Hamburger (Tampil di layar < md) --- */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* --- Menu Mobile (Tampil saat hamburger diklik) --- */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white ${
          isMenuOpen ? "max-h-screen py-4 shadow-md" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          {NavItems.map((item, i) => (
            <Link
              href={item.link}
              key={i}
              onClick={handleLinkClick}
              className={`text-lg transition-colors duration-300 ${
                pathname.startsWith(item.link)
                  ? "text-[#4D6450] font-bold"
                  : "text-[#9D9D9D] hover:text-[#4D6450]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}