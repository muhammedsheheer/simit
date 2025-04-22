"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";
import { motion } from "framer-motion";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({}) => {
  const { modelData } = useRestaurant();
  const headingVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };
  return (
    <section className="relative flex h-full w-full justify-center bg-[#76101E] py-12">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden"></div>
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12">
        <div className="flex w-full flex-col items-center justify-center gap-3 md:flex-row">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex flex-col items-center justify-center gap-2">
              <motion.h6
                className="text-center font-open_sans text-2xl font-[700] uppercase tracking-[7px] text-[#fff] md:text-5xl md:tracking-[12px]"
                variants={headingVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                SIGNATURES
              </motion.h6>
            </div>
          </div>
        </div>
        <div className="relative z-50 flex min-h-[400px] w-full flex-col justify-center px-2">
          {modelData && <EmblaCarousel slides={modelData} options={OPTIONS} />}
        </div>
      </div>
    </section>
  );
};

export default Special;
