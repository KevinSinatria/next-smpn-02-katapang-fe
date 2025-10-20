"use client";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import CountUp from "./CountUp";
import { constants } from "buffer";
import { useEffect, useState } from "react";
type State = {
  students: number;
  teachers: number;
  classes: number;
};

// Fungsi fetch data sudah benar
async function getDataState(): Promise<State[]> {
  try {
    const res = await fetch("https://api.smpn2katapang.sch.id/school-stats", {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error("Gagal mengambil data statistik:", res.statusText);
      return [];
    }

    const result = await res.json();
    return result.data || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default function CarouselHero() {
  // 3. State untuk menampung data dari API
  const [students, setStudents] = useState(0);
  const [teachers, setTeachers] = useState(0);
  const [classes, setClasses] = useState(0);

  // 4. Gunakan useEffect untuk mengambil data saat komponen dimuat (client-side)
  useEffect(() => {
    const fetchStats = async () => {
      const dataArray = await getDataState();
      // 5. Cek jika data ada dan ambil item pertama [0]
      if (dataArray && dataArray.length > 0) {
        const stats = dataArray[0];
        setStudents(stats.students);
        setTeachers(stats.teachers);
        setClasses(stats.classes);
      }
    };

    fetchStats();
  }, []); // [] berarti useEffect hanya berjalan sekali saat mount


  const cardHero = [
    {
      image: "/BuAiCarousell.png",
      alt: "Rijal",
    },
    {
      image: "/cardHero/rijal.png",
      alt : "Rasio Hero Card",
    },
    {
      image: "/cardHero/rasioHeroCard.png",
      alt : "Rasio Hero Card",
    },
    {
      image: "/cardHero/rasioHeroCard.png",
      alt : "Rasio Hero Card",
    },
    {
      image: "/cardHero/rasioHeroCard.png",
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
              to={students}
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
              to={teachers}
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
              to={classes}
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
