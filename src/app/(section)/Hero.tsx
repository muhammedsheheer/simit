import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, {
    amount: 0.5,
    once: false,
  });

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
        <motion.h1
          ref={headingRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center font-open_sans text-6xl font-[800] lowercase text-[#fff] md:text-[150px] md:leading-[120px]"
        >
          <span className="text-[#76101E]">s</span>IMIT. <br />
          <span className="text-[#76101E]">pa</span>lac
          <span className="text-[#76101E]">e</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="pt-4 md:pt-6"
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

export default Hero;
