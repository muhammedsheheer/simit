import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const About: React.FC = () => {
  const paragraphRef = useRef(null);
  const isInView = useInView(paragraphRef, { once: false, amount: 0.3 });

  return (
    <section className="h-full w-full bg-[#fff] px-4 py-8 md:px-0 md:py-0">
      <div className="flex flex-col gap-4 md:flex-row md:gap-0">
        <div className="w-full md:w-[25%]">
          <Image
            src={"/images/home/about/image1.png"}
            width={281}
            height={74}
            alt="bun"
            className="h-[300px] w-full object-cover md:h-[700px]"
          />
        </div>

        <div className="flex w-full flex-col md:w-[50%]">
          <Image
            src={"/images/home/about/image2.png"}
            width={281}
            height={74}
            alt="bun"
            className="h-[300px] w-full object-cover md:h-[450px]"
          />

          <motion.div
            ref={paragraphRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex h-[250px] w-full items-center justify-center"
          >
            <p className="w-full max-w-[450px] text-center font-poppins text-sm font-[300] uppercase text-[#373636] md:text-base">
              At Simit, we’re passionate about serving high-quality dishes
              complemented by exceptional customer service. Our diverse menu is
              thoughtfully crafted to offer something everyone will love — from
              comforting homemade British classics to flavorful
              Mediterranean-inspired creations.
            </p>
          </motion.div>
        </div>

        <div className="w-full md:w-[25%]">
          <Image
            src={"/images/home/about/image3.png"}
            width={281}
            height={74}
            alt="bun"
            className="h-[300px] w-full object-cover md:h-[700px]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
