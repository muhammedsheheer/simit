import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Simit: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#fff] px-2 pb-12 pt-64 md:pb-16 md:pt-56">
      <div className="absolute left-2 right-2 top-6 z-40 md:left-1/2 md:top-16 md:ml-[6%] md:-translate-x-1/2">
        <Image
          src={"/images/home/hero/bun.png"}
          width={281}
          height={74}
          alt="bun"
          className="z-40 h-[300px] w-full md:w-[450px]"
        />
      </div>
      <div className="relative z-50 flex flex-col items-center justify-center gap-4 md:gap-6">
        <h1 className="text-center font-open_sans text-6xl font-[800] lowercase text-[#fff] md:text-[180px] md:leading-[120px]">
          <span className="text-[#76101E]">s</span>IMI
          <span className="text-[#76101E]">t.</span>
        </h1>
        <p className="font-poppins w-full max-w-[450px] text-center text-sm font-[300] text-[#4E4E4E] md:text-base">
          Marlo’s is located in the heart of leafy Cockfosters, North London. A
          brasserie offering relaxed all day dining in comfort, ambiance and
          sophisticated style.
        </p>
        <div>
          <Button className="font-poppins rounded-none bg-[#76101E] px-4 py-6 text-center text-xs font-[400] uppercase tracking-[2px] text-[#fff] hover:bg-[#af1d30] md:px-6 md:py-7 md:text-sm">
            <Link
              className="flex flex-row items-center justify-center gap-1"
              href={"/menu"}
            >
              <ArrowRight /> order now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Simit;
