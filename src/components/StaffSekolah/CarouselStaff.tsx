"use client";
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
import { useEffect, useState } from "react";
import axios from "axios";
type Guru = {
  image_url: string;
  name: string;
  position: string;
};

export function CarouselStaff() {
  const [dataStaff , setDataStaff] = useState<Guru[]>([]);

  const featchData = async () => {
    try {
      const response = await axios.get('https://api.smpn2katapang.sch.id/personnel/staffs');
      setDataStaff(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    featchData();
  }, []);
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-6xl m-5"
    >
      <CarouselContent className="-ml-4 py-10">
        {dataStaff.map((item: Guru, index: number) => (
          <CarouselItem
            key={index}
            className="pl-4 md:basis-1/3 lg:basis-1/5  "
          >
            <div className="group relative h-[300px] w-full cursor-pointer">
              <Card className="absolute inset-0 z-10 h-full w-full transform transition-all duration-500 ease-in-out group-hover:-translate-y-15 border-0">
                <CardContent className="flex h-full items-center justify-center p-0">
                  <Image
                    src={item.image_url}
                    alt={`Foto ${item.image_url}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded-lg text-2xl text-black font-bold bg-white "
                  />
                </CardContent>
              </Card>

              <div className="absolute inset-0 z-0 flex h-full w-full flex-col items-center justify-end rounded-lg text-center pb-8 ">
                <h3 className="text-sm font-bold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.position}</p>
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
