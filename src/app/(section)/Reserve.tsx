import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Reserve: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const imageVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, delay: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[url('/images/home/reserve/bg.png')] bg-cover pb-12 pt-12 md:h-full md:pb-0 md:pt-24"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:gap-8">
        <motion.div
          variants={imageVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative h-[400px] w-full rounded-t-full border border-[#fff] bg-[#fff] md:h-[800px] md:w-1/2"
        >
          <div className="absolute inset-0 flex items-center justify-center px-8 pt-8 md:px-16 md:pt-16">
            <Image
              src={"/images/home/reserve/image.png"}
              width={281}
              height={74}
              alt="image4"
              className="h-full w-full"
            />
          </div>
        </motion.div>

        <motion.div
          variants={textVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex h-[400px] w-full flex-col items-center justify-center gap-6 rounded-t-full border border-[#fff] bg-[#fff] md:h-[800px] md:w-1/2 md:gap-7"
        >
          <motion.h1
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-4 text-center font-open_sans text-2xl font-[700] uppercase tracking-[4px] text-[#76101E] md:mt-20 md:text-4xl md:tracking-[7px]"
          >
            RESERVE TABLE
          </motion.h1>

          <motion.p
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full max-w-[450px] px-2 text-center font-poppins text-sm font-[300] uppercase text-[#373636] md:text-base"
          >
            Simit is dedicated to delivering high-quality dishes with
            outstanding customer service. Our extensive menu is designed to
            delight every palate — from comforting homemade British favorites to
            vibrant, Mediterranean-infused specialties.
          </motion.p>

          <motion.div
            variants={buttonVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-4"
          >
            <Button className="rounded-none bg-[#76101E] px-4 py-6 text-center font-poppins text-xs font-[400] uppercase tracking-[2px] text-[#fff] hover:bg-[#af1d30] md:mt-3 md:px-6 md:py-7 md:text-sm">
              <Link
                className="flex flex-row items-center justify-center gap-1"
                href={"/table-booking"}
              >
                <ArrowRight /> Book now
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reserve;
