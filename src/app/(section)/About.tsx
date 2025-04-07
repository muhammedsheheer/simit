import Image from "next/image";
import React from "react";

const About: React.FC = () => {
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
          <div className="flex h-[250px] w-full items-center justify-center">
            <p className="font-poppins w-full max-w-[450px] text-center text-sm font-[300] uppercase text-[#373636] md:text-base">
              Marlo’s strives to serve high quality dishes whilst giving
              exceptional customer service. Our wide menu has been created to
              offer everyone something which they will love. From homemade
              British classics to infused Mediterranean dishes.
            </p>
          </div>
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
