import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  const pages = [
    { name: "Kesiswaan", link: "/kesiswaan" },
    { name: "Sarana Prasarana", link: "/sapras" },
    { name: "Hubungan Masyarakat", link: "/humas" },
    { name: "Artikel", link: "/artikel" },
    { name: "Galeri", link: "/galeri" },
  ];

  const contacts = [
    {
      icon: <MapPin size={20} />,
      text: "Komplek Gading Junti Asri, Sangkanhurip, Kec. Katapang, Kabupaten Bandung, Jawa Barat 40921",
      href: "https://maps.app.goo.gl/PzSfY8F4R7gAnpXv7",
    },
    {
      icon: <Instagram size={20} />,
      text: "smpn2katapangoffcial",
      href: "https://www.instagram.com/smpn2katapangoffcial",
    },
    {
      icon: <Mail size={20} />,
      text: "smpn02katapang@gmail.com",
      href: "mailto:smpn02katapang@gmail.com",
    },
    {
      icon: <Phone size={20} />,
      text: "(022) 85871015",
      href: "tel:02285871015",
    },
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

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-49">
          <div className="flex flex-col">

            <div className="flex items-center w-100 gap-4 mb-4">
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
                <p className="text-sm opacity-90">
                  Bangkit Berprestasi
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-bold ">Halaman</p>
            <ul className="space-y-2">
              {pages.map((page) => (
                <li key={page.name}>
                  <Link href={page.link} className="hover:text-gray-300 transition-colors">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div >
            <p className="font-bold ">Hubungi Kami</p>
            <ul className="space-y-3 w-100">
              {contacts.map((contact) => (
                <li key={contact.text} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0">{contact.icon}</span>
                  <a href={contact.href} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                    {contact.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <div className=" bg-opacity-20 py-4">
        <p className="text-sm text-center text-gray-300">
          Developed by{" "}
          <Link
            href="https://nexsbe.biz.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white hover:underline"
          >
            © {currentYear} Nexsbe
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