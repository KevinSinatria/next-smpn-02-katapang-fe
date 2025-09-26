import * as React from "react"

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
  }
]

export function CarouselStaff() {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1 h-[600px] pt-40">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/5 hover:-translate-y-30 transition-all duration-300">
            <div className="p-2">
              <Card className="border-3 border-[#67866B] bg-amber-600 ">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
