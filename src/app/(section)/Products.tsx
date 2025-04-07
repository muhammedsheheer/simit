import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Products: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#F5DFD8] py-12 md:py-20">
      <div className="flex flex-col items-center justify-center gap-4 md:gap-12">
        <div className="mb-8 md:mb-14 md:ml-[23%]">
          <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-40">
            <h6 className="text-center font-open_sans text-3xl font-[700] uppercase tracking-[7px] text-[#76101E] md:text-5xl md:tracking-[10px]">
              our products
            </h6>
            <div>
              <Button className="font-poppins rounded-none bg-[#76101E] px-4 py-6 text-center text-xs font-[400] uppercase tracking-[2px] text-[#fff] hover:bg-[#af1d30] md:px-6 md:py-7 md:text-sm">
                <Link
                  className="flex flex-row items-center justify-center gap-1"
                  href={"/menu"}
                >
                  <ArrowRight /> View Menu
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 px-2 md:flex-row md:gap-6 md:px-[150px]">
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src={"/images/home/products/image1.png"}
              width={281}
              height={74}
              alt="image1"
              className="h-[300px] w-full md:h-[350px]"
            />
            <span className="text-center font-open_sans text-sm font-[400] uppercase tracking-[6px] text-[#323232] underline-offset-4 hover:underline hover:decoration-[#C0A58A] md:text-base">
              Brioche
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src={"/images/home/products/image2.png"}
              width={281}
              height={74}
              alt="image2"
              className="h-[300px] w-full md:h-[350px]"
            />
            <span className="text-center font-open_sans text-sm font-[400] uppercase tracking-[6px] text-[#323232] underline-offset-4 hover:underline hover:decoration-[#C0A58A] md:text-base">
              BAGELS
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src={"/images/home/products/image3.png"}
              width={281}
              height={74}
              alt="image3"
              className="h-[300px] w-full md:h-[350px]"
            />
            <span className="text-center font-open_sans text-sm font-[400] uppercase tracking-[6px] text-[#323232] underline-offset-4 hover:underline hover:decoration-[#C0A58A] md:text-base">
              BAKLAVA
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src={"/images/home/products/image4.png"}
              width={281}
              height={74}
              alt="image4"
              className="h-[300px] w-full md:h-[350px]"
            />
            <span className="text-center font-open_sans text-sm font-[400] uppercase tracking-[6px] text-[#323232] underline-offset-4 hover:underline hover:decoration-[#C0A58A] md:text-base">
              CAKES
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
