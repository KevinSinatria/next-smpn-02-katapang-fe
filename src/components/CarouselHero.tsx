import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import CountUp from "./CountUp";

export default function CarouselHero() {
  return (
    <div className="relative z-20 flex justify-center items-center mt-15">
      <Carousel className=" relative z-20 lg:w-120 md:w-90 sm:w-80 w-80 sm:ml-5">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1 ">
                <Card>
                  <CardContent className="flex items-center justify-center w-full lg:h-150 md:h-100 h-auto">
                    <Image
                      src={"/rijal.png"}
                      width={600}
                      height={600}
                      alt="Rijal"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
      <CarouselNext /> */}
        <div className="absolute z-30 flex flex-col justify-center items-center lg:w-35 lg:h-35 md:w-25 md:h-25 sm:w-26 sm:h-26  w-20 h-20 mr-5 bg-white border-3 border-[#67866B] lg:top-20 sm:top-4 top-0 -right-5 rotate-15 rounded-2xl ">
          <h1 className="text-[#4D6450] font-bold text-xl lg:text-3xl">
            <CountUp
              from={0}
              to={1.419}
              separator=","
              direction="up"
              duration={2}
              className="count-up-text"
            />
          </h1>
          <h1 className="text-[#4D6450] font-bold lg:text-xl">SISWA</h1>
        </div>
        <div className="absolute z-30 lg:w-35 lg:h-35 md:w-25 md:h-25 w-20 sm:w-26 sm:h-26 flex flex-col justify-center items-center h-20 mr-5 bg-white border-3 border-[#67866B] lg:top-64 sm:top-40 top-30 -right-6 -rotate-15 rounded-2xl ">
          {" "}
          <h1 className="text-[#4D6450] font-bold text-xl lg:text-3xl">
            <CountUp
              from={0}
              to={56}
              separator=","
              direction="up"
              duration={2}
              className="count-up-text"
            />
          </h1>
          <h1 className="text-[#4D6450] font-bold lg:text-xl">GURU</h1>
        </div>
        <div className="absolute z-30 lg:w-35 lg:h-35 md:w-25 md:h-25 sm:w-26 sm:h-26 w-20 h-20 mr-5 flex flex-col justify-center items-center bg-white border-3 border-[#67866B] lg:top-107 sm:top-80 top-60 -right-7 rotate-10 rounded-2xl ">
          {" "}
          <h1 className="text-[#4D6450] font-bold text-xl lg:text-3xl">
            <CountUp
              from={0}
              to={50}
              separator=","
              direction="up"
              duration={2}
              className="count-up-text"
            />
          </h1>
          <h1 className="text-[#4D6450] font-bold lg:text-xl">Ruang Kelas</h1>
        </div>
      </Carousel>
    </div>
  );
}
