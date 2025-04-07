import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full">
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          poster="/images/simit.png"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-40 flex h-full flex-col items-center justify-center gap-3 text-white">
        <h1 className="text-center font-open_sans text-6xl font-[800] lowercase text-[#fff] md:text-[150px] md:leading-[120px]">
          <span className="text-[#76101E]">s</span>IMIT. <br />
          <span className="text-[#76101E]">pa</span>lac
          <span className="text-[#76101E]">e</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
