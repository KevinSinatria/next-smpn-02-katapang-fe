"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

export default function VisiMisiSection() {
  const [visi, setVisi] = useState("");
  const [misi, setMisi] = useState("");

  const featchData = async () => {
    try{
      const response = await axios.get('https://api.smpn2katapang.sch.id/school-informations');
      console.log(response.data.data);
      setVisi(response.data.data.vision);
      setMisi(response.data.data.missions);
    }catch (error){
      console.error('Error fetching data:', error);
    } 
  }

  useEffect(() => {
    featchData();
  }, []);



  return (
    <section className="relative w-full min-h-screen mt-15 ">
      <div className="absolute w-500 -left-90 md:-left-30 h-123 rotate-2 z-10 ">
        <Image src="/visimisi.png" alt="Kotak Dekorasi" fill priority />
      </div>
      <div className="relative w-full h-auto z-20  P-5 md:p-10 ">
        <Image
          src={"/visilogo.png"}
          alt="logo visi misi"
          width={1000}
          height={1000}
          className="max-w-[70px]  left-10 md:left-20  "
        />
        <h2 className="text-sm font-bold text-white">
          {visi}
        </h2>
      </div>
      <div className="relative w-full h-auto z-20  P-5 md:p-10 ">
        <Image
          src={"/misilogo.png"}
          alt="logo visi misi"
          width={1000}
          height={1000}
          className="max-w-[70px] left-10 md:-mt-16  md:left-20  "
        />
        <div className="text-sm font-bold text-white">
          <Markdown>{misi}</Markdown>
          
        </div>
      </div>
    </section>
  );
}
