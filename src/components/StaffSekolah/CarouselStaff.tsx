import * as React from "react";
import Image from "next/image";
import { guruData } from "../../app/lib/guru-data"; 
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
type Guru = {
  image: string;
  name: string;
  jabatan: string;
};

export function CarouselStaff() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-6xl m-5"
    >
      <CarouselContent className="-ml-4 py-10">
        {guruData.map((item: Guru, index: number) => (
          <CarouselItem
            key={index}
            className="pl-4 md:basis-1/3 lg:basis-1/5  "
          >
            <div className="group relative h-[300px] w-full cursor-pointer">
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
                <h3 className="text-sm font-bold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.jabatan}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="ml-3" />
      <CarouselNext className="mr-3" />
    </Carousel>
  );
}
