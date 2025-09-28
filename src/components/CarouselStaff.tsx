import * as React from "react"
import Image from "next/image" // Menggunakan Image dari Next.js untuk optimisasi, atau gunakan <img> biasa

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const DataGuru = [
  {
    image: "/rijal.png",
    name: "Rijal",
    jabatan: "Guru Sejarah",
  },
  {
    image: "/kevin.png",
    name: "Kevin",
    jabatan: "Guru Matematika", // Koreksi: "Bahasa Matematika" sepertinya typo
  },
  {
    image: "/nazmi.png",
    name: "Nazmi",
    jabatan: "Wakasek Kesiswaan",
  },
  {
    image: "/rijal.png", // Ganti dengan data yang berbeda agar lebih bervariasi
    name: "Rijal 2",
    jabatan: "Guru Sejarah",
  },
  {
    image: "/kevin.png",
    name: "Kevin 2",
    jabatan: "Guru Matematika",
  },
  {
    image: "/nazmi.png",
    name: "Nazmi 2",
    jabatan: "Wakasek Kesiswaan",
  },
]

export function CarouselStaff() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4 py-10">
        {DataGuru.map((item, index) => (
          <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/5">
            {/* 1. Kontainer utama dibuat relative untuk menjadi acuan posisi elemen di dalamnya */}
            <div className="group relative h-[350px] w-full cursor-pointer">
              
              {/* 2. Kartu untuk gambar. Diberi z-index lebih tinggi (z-10) dan efek transisi */}
              <Card className="absolute inset-0 z-10 h-full w-full transform transition-all duration-500 ease-in-out group-hover:-translate-y-20 border-2 border-gray-300">
                <CardContent className="flex h-full items-center justify-center p-0">
                  {/* Pastikan path gambar benar dan ada di folder /public */}
                  <Image
                    src={item.image}
                    alt={`Foto ${item.name}`}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </CardContent>
              </Card>

              {/* 3. Teks yang berada di belakang. Diberi z-index lebih rendah (z-0) */}
              <div className="absolute inset-0 z-0 flex h-full w-full flex-col items-center justify-end rounded-lg bg-gray-100 pb-4">
                <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.jabatan}</p>
              </div>

            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}