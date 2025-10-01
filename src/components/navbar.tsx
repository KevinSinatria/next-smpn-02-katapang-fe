"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type icon = {
  className : string;
}

// Komponen ikon chevron untuk dropdown
const ChevronDownIcon = ({ className }: icon) => (
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


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWakasekOpen, setIsWakasekOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsWakasekOpen(false); 
  };
  
  const NavItems = [
    { name: "Artikel", link: "/artikel" },
    { name: "Galeri", link: "/galeri" },
  ];

  const Kesiswaan = {
    name: "Bidang Wakasek",
    body: [
      { name: "Kesiswaan", link: "/kesiswaan" },
      { name: "Sarana Prasarana", link: "/sapras" },
      { name: "Hubungan Masyarakat", link: "/humas" },
      { name: "Kurikulum", link: "/kurikulum" },
    ],
  };

  const pathname = usePathname();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 font-poppins h-17 transition-all duration-300 ${
        scrolled || isMenuOpen ? "shadow-lg bg-white" : "shadow-sm bg-white"
      }`}
    >
      <div className="w-full flex justify-between items-center px-4 md:px-10 py-2">
        {/* Logo */}
        <Link href={"/"} onClick={handleLinkClick} className="flex gap-3 md:gap-5 items-center">
          <Image
            src={"/logo_smp2.png"}
            alt="LogoSMPN2Katapang"
            width={500}
            height={500}
            className="w-[50px]"
          />
          <p className="text-xl md:text-2xl font-bold font-inter text-black">
            SMPN 2 KATAPANG
          </p>
        </Link>

        {/* --- Navigasi Desktop (Tampil di layar > md) --- */}
        <div className="hidden md:flex items-center text-lg gap-5">
          {/* Dropdown Wakasek */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-[#9D9D9D] group-hover:text-[#4D6450] transition-colors duration-300">
              <span>{Kesiswaan.name}</span>
              <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max bg-white border border-gray-200 rounded-lg shadow-lg p-2
                            opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-1
                            transition-all duration-300">
              {Kesiswaan.body.map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  className={`block w-full text-left px-4 py-2 rounded-md text-base transition-colors duration-300 ${
                    pathname.startsWith(item.link)
                      ? "text-white bg-[#4D6450]"
                      : "text-gray-700 hover:bg-gray-100 hover:text-[#4D6450]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

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

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
\
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white ${
          isMenuOpen ? "max-h-screen py-4 shadow-md" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          {/* Accordion Wakasek untuk Mobile */}
          <div className="w-full text-center">
            <button
              onClick={() => setIsWakasekOpen(!isWakasekOpen)}
              className="flex justify-center items-center w-full text-lg text-[#9D9D9D] hover:text-[#4D6450]"
            >
              <span>{Kesiswaan.name}</span>
              <ChevronDownIcon className={`w-5 h-5 ml-1 transition-transform duration-300 ${isWakasekOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isWakasekOpen ? 'max-h-96 mt-2' : 'max-h-0'}`}>
               <div className="flex flex-col items-center gap-3 pt-2 bg-gray-50/50">
                {Kesiswaan.body.map((item, i) => (
                  <Link
                    href={item.link} key={i} onClick={handleLinkClick}
                    className={`text-base transition-colors duration-300 ${
                      pathname.startsWith(item.link)
                        ? "text-[#4D6450] font-semibold"
                        : "text-gray-600 hover:text-[#4D6450]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
               </div>
            </div>
          </div>
          
          {/* Menu Mobile Lainnya */}
          {NavItems.map((item, i) => (
            <Link
              href={item.link} key={i} onClick={handleLinkClick}
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