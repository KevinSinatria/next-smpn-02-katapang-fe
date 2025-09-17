"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavItems = [
    {
      name: "Kesiswaan",
      link: "/kesiswaan",
      page: [
        {
          name: "Ekstrakurikuler",
          link: "/kesiswaan/ekstrakurikuler",
          hover: [
            { name: "PRAMUKA", link: "/kesiswaan/ekstrakurikuler/pramuka" },
            { name: "PASKIBRA", link: "/kesiswaan/ekstrakurikuler/paskibra" },
            { name: "PMR", link: "/kesiswaan/ekstrakurikuler/pmr" },
            { name: "PADUS", link: "/kesiswaan/ekstrakurikuler/padus" },
            { name: "ROHIS", link: "/kesiswaan/ekstrakurikuler/rohis" },
            { name: "FUTSAL", link: "/kesiswaan/ekstrakurikuler/futsal" },
            { name: "VOLLY", link: "/kesiswaan/ekstrakurikuler/volly" },
            { name: "UKS", link: "/kesiswaan/ekstrakurikuler/uks" },
            { name: "LITERASI", link: "/kesiswaan/ekstrakurikuler/literasi" },
            { name: "KARAWITAN", link: "/kesiswaan/ekstrakurikuler/karawitan" },
            { name: "SENI TARI", link: "/kesiswaan/ekstrakurikuler/seni-tari" },

          ],
        },
      ],
    },
    {
      name: "Sarana Prasarana",
      link: "/sapras"
    },
    {
      name: "Hubungan Masyarakat",
      link: "/humas"
    },
    {
      name: "aAl",
      link: "/artikel"
    },
    {
      name: "Galeri",
      link: "/galeri"
    }
  ];
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white p-5 ${
        scrolled ? "shadow-lg bg-white/10" : ""
      }`}
    >
      SMPN 2 KATAPANG
    </nav>
  );
}
