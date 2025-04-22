import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Products: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const topImageVariant = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const bottomImageVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const buttonArrowVariant = {
    animate: {
      x: [0, 10, 0],
      transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="h-full w-full bg-[#F5DFD8] py-12 md:py-20"
    >
      <motion.div
        variants={textVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col items-center justify-center gap-4 md:gap-12"
      >
        <motion.div
          variants={textVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 md:mb-14 md:ml-[23%]"
        >
          <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-40">
            <h6 className="text-center font-open_sans text-3xl font-[700] uppercase tracking-[7px] text-[#76101E] md:text-5xl md:tracking-[10px]">
              our products
            </h6>
            <div>
              <Button className="rounded-none bg-[#76101E] px-4 py-6 text-center font-poppins text-xs font-[400] uppercase tracking-[2px] text-[#fff] hover:bg-[#af1d30] md:px-6 md:py-7 md:text-sm">
                <Link
                  className="flex flex-row items-center justify-center gap-1"
                  href={"/menu"}
                >
                  <motion.div variants={buttonArrowVariant} animate="animate">
                    <ArrowRight />
                  </motion.div>
                  View Menu
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4 px-2 md:flex-row md:gap-6 md:px-[150px]"
          variants={textVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { src: "image1", label: "Brioche", position: "top" },
            { src: "image2", label: "Bagels", position: "bottom" },
            { src: "image3", label: "Baklava", position: "top" },
            { src: "image4", label: "Cakes", position: "bottom" },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              variants={
                item.position === "top" ? topImageVariant : bottomImageVariant
              }
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.8, delay: idx * 0.3 }}
              className="flex flex-col items-center justify-center gap-4"
            >
              <Image
                src={`/images/home/products/${item.src}.png`}
                width={281}
                height={74}
                alt={item.label}
                className="h-[300px] w-full md:h-[350px]"
              />
              <motion.span
                variants={textVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, delay: idx * 0.4 }}
                className="text-center font-open_sans text-sm font-[400] uppercase tracking-[6px] text-[#323232] underline-offset-4 hover:underline hover:decoration-[#C0A58A] md:text-base"
              >
                {item.label}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Products;
