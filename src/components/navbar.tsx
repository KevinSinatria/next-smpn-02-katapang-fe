"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const menuItems = [
  { name: "Beranda", href: "/" },
  {
    name: "Profil Sekolah",
    subItems: [
      { name: "Sambutan kepala sekolah", href: "/profile", idlink: "sambutan" },
      { name: "Sejarah", href: "/profile", idlink: "sejarah" },
      { name: "Visi Misi", href: "/profile", idlink: "visimisi" },
      { name: "identitas", href: "/profile", idlink: "identitas" },
    ],
  },
  {
    name: "Bidang Wakasek",
    subItems: [
      { name: "Kesiswaan", href: "/kesiswaan", idlink: "" },
      { name: "Sarana Prasarana", href: "/sapras", idlink: "" },
      { name: "Hubungan Masyarakat", href: "/humas", idlink: "" },
    ],
  },
  {
    name: "Lainnya",
    subItems: [
      { name: "Artikel", href: "/artikel", idlink: "" },
      { name: "Galeri", href: "/galeri", idlink: "" },
      { name: "Agenda", href: "/agenda", idlink: "" },
    ],
  },
];

const ChevronDownIcon = ({ className }: { className: string }) => (
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

type MenuItem = {
  name: string;
  href?: string;
  subItems?: { name: string; href: string; idlink?: string }[];
};
type DropdownMenuItem = Required<Pick<MenuItem, "subItems">> &
  Omit<MenuItem, "href">;

const DesktopNavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);
  return (
    <div className="group text-[#9D9D9D] cursor-pointer">
      <Link href={href} className="flex flex-col items-center">
        <h1
          className={`transition-colors duration-300 ${
            isActive ? "text-[#4D6450] font-bold" : "group-hover:text-[#4D6450]"
          }`}
        >
          {children}
        </h1>
        <span
          className={`mt-1 h-0.5 transition-all duration-300 ${
            isActive
              ? "w-10 bg-[#4D6450]"
              : "w-0 group-hover:w-10 group-hover:bg-[#4D6450]"
          }`}
        />
      </Link>
    </div>
  );
};

const DesktopDropdown = ({ item }: { item: DropdownMenuItem }) => {
  const pathname = usePathname();
  const isParentActive = item.subItems.some(
    (sub) => pathname === sub.href.split("#")[0]
  );

  return (
    <div className="relative group">
      <button
        className={`flex items-center gap-1 mb-2 transition-colors duration-300 ${
          isParentActive
            ? "text-[#4D6450] font-semibold"
            : "text-[#9D9D9D] group-hover:text-[#4D6450]"
        }`}
      >
        <span>{item.name}</span>
        <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
      </button>
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max bg-white border border-gray-200 rounded-lg shadow-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-1 transition-all duration-300">
        {item.subItems.map((subItem) => {
          const isActive = pathname === subItem.href.split("#")[0];
          return (
            <Link
              key={subItem.name}
              href={
                subItem.idlink
                  ? `${subItem.href}#${subItem.idlink}`
                  : subItem.href
              }
              className={`block w-full text-left px-4 py-2 rounded-md text-base transition-colors duration-300 ${
                isActive && !subItem.idlink
                  ? "text-white bg-[#4D6450]"
                  : "text-gray-700 hover:bg-gray-100 hover:text-[#4D6450]"
              }`}
            >
              {subItem.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

// --- KOMPONEN UTAMA NAVBAR ---

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 font-poppins h-17 transition-all duration-300 ${
        scrolled || isMenuOpen
          ? "shadow-lg bg-white mx-5 rounded-2xl border-2 border-gray-400/50 mt-2"
          : "shadow-sm bg-white"
      }`}
    >
      <div className="w-full flex justify-between items-center px-4 md:px-15 py-2">
        {/* Logo */}
        <Link
          href={"/"}
          onClick={closeMenu}
          className="flex gap-3 md:gap-5 items-center"
        >
          <Image
            src={"/logo_smp2.png"}
            alt="LogoSMPN2Katapang"
            width={50}
            height={50}
            className="w-[50px] h-auto"
          />
          <p className="text-md md:text-2xl font-bold font-inter text-black">
            SMPN 2 KATAPANG
          </p>
        </Link>

        <div className="hidden md:flex items-center text-sm gap-5">
          {menuItems.map((item) =>
            item.subItems ? (
              <DesktopDropdown key={item.name} item={item} />
            ) : (
              <DesktopNavItem key={item.name} href={item.href!}>
                {item.name}
              </DesktopNavItem>
            )
          )}
        </div>

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
      <MobileMenuPanel isOpen={isMenuOpen} closeMenu={closeMenu} />
    </nav>
  );
}

function MobileMenuPanel({
  isOpen,
  closeMenu,
}: {
  isOpen: boolean;
  closeMenu: () => void;
}) {
  const pathname = usePathname();
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  return (
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white  ${
        isOpen ? "max-h-screen py-4 shadow-md rounded-2xl mt-2" : "max-h-0"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        {menuItems.map((item) => {
          if (item.subItems) {
            const isAccordionOpen = openAccordion === item.name;
            return (
              <div key={item.name} className="w-full text-center"> 
                <button
                  onClick={() =>
                    setOpenAccordion(isAccordionOpen ? null : item.name)
                  }
                  className="flex justify-center items-center w-full text-lg text-[#9D9D9D] hover:text-[#4D6450]"
                >
                  <span>{item.name}</span>
                  <ChevronDownIcon
                    className={`w-5 h-5 ml-1 transition-transform duration-300 ${
                      isAccordionOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isAccordionOpen ? "max-h-96 mt-2" : "max-h-0"
                  }`}
                >
                  <div className="flex flex-col items-center gap-3 pt-2 bg-gray-50/50">
                    {item.subItems.map((subItem) => (
                      <Link
                        href={subItem.href}
                        key={subItem.name}
                        onClick={closeMenu}
                        className={`text-base transition-colors duration-300 ${
                          pathname.startsWith(subItem.href)
                            ? "text-[#4D6450] font-semibold"
                            : "text-gray-600 hover:text-[#4D6450]"
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          } else {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname.startsWith(item.href);
            return (
              <Link
                href={item.href!}
                key={item.name}
                onClick={closeMenu}
                className={`text-lg transition-colors duration-300 ${
                  isActive
                    ? "text-[#4D6450] font-bold"
                    : "text-[#9D9D9D] hover:text-[#4D6450]"
                }`}
              >
                {item.name}
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}
