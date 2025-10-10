"use client";
import axios from "axios";
import { InstagramIcon, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [address, setAddress] = useState("");
  const [Instagram, setInstagram] = useState("");
  const [InstagramLink, setInstagramLink] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const feacthData = async () => {
      const res = await axios.get(
        "https://api.smpn2katapang.sch.id/school-informations"
      );
      setInstagram(res.data.data.instagram);
      setAddress(res.data.data.address);
      setInstagramLink(res.data.data.instagram_url);
      setEmail(res.data.data.email);
      setPhone(res.data.data.phone);
    };
    feacthData();
  }, []);

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
      text: address,
    },
    {
      icon: <Instagram />,
      link: InstagramLink,
    },
    {
      icon: <Mail size={20} />,
      text: email,
    },
    {
      icon: <Phone size={20} />,
      text: phone,
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

      <div className="container mx-auto px-6 py-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-49 gap-5">
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-4">
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
                <p className="text-sm opacity-90">Bangkit Berprestasi</p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-bold ">Halaman</p>
            <ul className="space-y-2">
              {pages.map((page) => (
                <li key={page.name}>
                  <Link
                    href={page.link}
                    className="hover:text-gray-300 transition-colors"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-130 w-100">
            <p className="font-bold ">Hubungi Kami</p>
            <ul className="space-y-3 ">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0">
                  <MapPin size={20} />
                </span>
                <Link
                  href={"https://maps.app.goo.gl/sGJHw1SGpMgBmoJU7"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  {address}
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0">
                  <InstagramIcon size={20} />
                </span>
                <Link
                  href={InstagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  {Instagram}
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0">
                  <Mail size={20} />
                </span>
                <Link
                  href={`mailto:${email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  {email}
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0">
                   <Phone size={20} />
                </span>
                <Link
                  href={`tel:${phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  {phone}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" bg-opacity-20 py-4">
        <p className="text-sm text-center text-gray-300">
          Developed by{" "}
          <Link
            href="https://nexvibe.biz.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white hover:underline"
          >
            © {currentYear} Nexvibe
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
