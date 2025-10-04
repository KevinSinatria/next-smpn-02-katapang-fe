// components/BodyGaleri.tsx

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { galeriData} from "../app/lib/galeri-data";

export default function BodyGaleri() {
  return (
    <section className="w-full px-3 py-12 md:px-50">
      <div className="mx-auto max-w-8xl">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galeriData.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={image.photo_url}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
        <div className="flex w-full justify-end items-center">
          <Link
            href={"/galeri"}
            className="bg-[#F96701] hover:bg-[#F94700] text-white px-4 py-2 rounded-md mt-8"
          >
            Lebih lanjut galeri
          </Link>
        </div>
      </div>
    </section>
  );
}
