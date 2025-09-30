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
    image: "/kevin.png",
    name: "Kevin Sinatria Budiman S.Pd",
    jabatan: "Guru Matematika", 
  },
  {
    image: "/nazmi.png",
    name: "Nazmi Ramadhani S.Pd",
    jabatan: "Wakasek Kesiswaan",
  },
  {
    image: "/daffa.png",
    name: "Daffa Al-Sabri S.Pd",
    jabatan: "Guru PJOK",
  },
  {
    image: "/rian.png",
    name: "M. Rian Fauzan S.Pd",
    jabatan: "Wakasek Kurikulum",
  },
  {
    image: "/waqqir.png",
    name: "Waqqir Humaid Al Qais S.Pd",
    jabatan: "Wakasek sarana prasarana",
  },
  {
    image: "/rijal.png",
    name: "Rijal Kurniawan s.Pd",
    jabatan: "Guru Sejarah",
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
            <div className="group relative h-[370px] w-full cursor-pointer">
              <Card className="absolute inset-0 z-10 h-full w-full transform transition-all duration-500 ease-in-out group-hover:-translate-y-15 border-0">
                <CardContent className="flex h-full items-center justify-center p-0">
                  <Image
                    src={item.image}
                    alt={`Foto ${item.name}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded-lg text-2xl text-black font-bold bg-white "
                  />
                </CardContent>
              </Card>

              <div className="absolute inset-0 z-0 flex h-full w-full flex-col items-center justify-end rounded-lg text-center pb-8 ">
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