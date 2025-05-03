"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Simit: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.4 });

  return (
    <section
      ref={sectionRef}
      className="relative h-full w-full bg-[#F5DFD8] px-2 pb-12 pt-64 md:pb-16 md:pt-56"
    >
      <div className="absolute left-2 right-2 top-6 z-40 md:left-1/2 md:top-16 md:ml-[8%] md:-translate-x-1/2">
        <Image
          src={"/images/home/hero/bun.png"}
          width={281}
          height={74}
          alt="bun"
          className="z-40 h-[300px] w-full md:w-[450px]"
        />
      </div>

      <div className="relative z-50 flex flex-col items-center justify-center gap-4 md:gap-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center font-open_sans text-6xl font-[800] lowercase text-[#fff] md:text-[180px] md:leading-[120px]"
        >
          <span>s</span>IMI
          <span>t</span>
        </motion.h1>

        <p className="w-full max-w-[450px] text-center font-poppins text-sm font-[300] text-[#4E4E4E] md:text-base">
          Simit is nestled in the heart of leafy Cockfosters, North London — a
          brasserie where relaxed, all-day dining meets comfort, warm ambiance,
          and effortless sophistication.
        </p>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <Button className="rounded-none bg-[#76101E] px-4 py-6 text-center font-poppins text-xs font-[400] uppercase tracking-[2px] text-[#fff] hover:bg-[#af1d30] md:px-6 md:py-7 md:text-sm">
            <Link
              className="flex flex-row items-center justify-center gap-1"
              href={"/menu"}
            >
              <ArrowRight /> order now
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Simit;
