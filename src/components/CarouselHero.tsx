import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import CountUp from "./CountUp";
export default function CarouselHero() {

  const cardHero = [
    {
      image: "/rijal.png",
      alt: "Rijal",
    },
    {
      image: "/rasioHeroCard.png",
      alt : "Rasio Hero Card",
    },
    {
      image: "/rasioHeroCard.png",
      alt : "Rasio Hero Card",
    },
    {
      image: "/rasioHeroCard.png",
      alt : "Rasio Hero Card",
    },
    {
      image: "/rasioHeroCard.png",
      alt : "Rasio Hero Card",
    }
]
  return (
    <div className="relative z-20 flex justify-center items-center lg:mt-15">
      <Carousel className=" relative z-20 lg:w-90 md:w-90 sm:w-80 w-80 sm:ml-5">
        <CarouselContent>
          {cardHero.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1 ">
                <Card>
                  <CardContent className="flex items-center justify-center w-full lg:h-150 md:h-100 h-auto">
                    <Image
                      src={item.image}
                      width={600}
                      height={600}
                      alt={item.alt}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
      <CarouselNext /> */}
        <div className="absolute z-30 flex flex-col justify-center items-center lg:w-25 lg:h-25 w-20 h-20 mr-5 bg-white border-3 border-[#67866B] lg:top-20 sm:top-4 top-0 -right-5 rotate-15 rounded-2xl ">
          <h1 className="text-[#4D6450] font-bold text-sm lg:text-3xl">
            <CountUp
              from={0}
              to={1419}
              separator=","
              direction="up"
              duration={2}
              className="count-up-text"
            />
          </h1>
          <h1 className="text-[#4D6450] font-bold lg:text-sm">SISWA</h1>
        </div>
        <div className="absolute z-30 lg:w-25 lg:h-25 w-20 h-20 flex flex-col justify-center items-center mr-5 bg-white border-3 border-[#67866B] lg:top-64 sm:top-40 top-30 -right-6 -rotate-15 rounded-2xl ">
          {" "}
          <h1 className="text-[#4D6450] font-bold text-sm lg:text-3xl">
            <CountUp
              from={0}
              to={56}
              separator=","
              direction="up"
              duration={2}
              className="count-up-text"
            />
          </h1>
          <h1 className="text-[#4D6450] font-bold lg:text-sm">GURU</h1>
        </div>
        <div className="absolute z-30 lg:w-25 lg:h-25 w-20 h-20 text-center mr-5 flex flex-col justify-center items-center bg-white border-3 border-[#67866B] lg:top-107 sm:top-80 top-60 -right-7 rotate-10 rounded-2xl ">
          {" "}
          <h1 className="text-[#4D6450] font-bold text-sm lg:text-3xl">
            <CountUp
              from={0}
              to={65}
              separator=","
              direction="up"
              duration={2}
              className="count-up-text"
            />
          </h1>
          <h1 className="text-[#4D6450] font-bold lg:text-sm">Ruang Kelas</h1>
        </div>
      </Carousel>
    </div>
  );
}
