import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
      </div>
    </section>
  );
};

export default Hero;
