import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Reserve: React.FC = () => {
  return (
    <section className="md: h-full w-full bg-[url('/images/home/reserve/bg.png')] bg-cover pb-12 pt-12 md:pb-0 md:pt-24">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:gap-8">
        <div className="relative h-[400px] w-full rounded-t-full border border-[#fff] bg-[#fff] md:h-[600px] md:w-1/2">
          <div className="absolute inset-0 flex items-center justify-center px-8 pt-8 md:px-16 md:pt-16">
            <Image
              src={"/images/home/reserve/image.png"}
              width={281}
              height={74}
              alt="image4"
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="flex h-[400px] w-full flex-col items-center justify-center gap-6 rounded-t-full border border-[#fff] bg-[#fff] md:h-[600px] md:w-1/2 md:gap-7">
          <h1 className="mt-4 text-center font-open_sans text-2xl font-[700] uppercase tracking-[4px] text-[#76101E] md:mt-20 md:text-4xl md:tracking-[7px]">
            RESERVE TABLE
          </h1>
          <p className="w-full max-w-[450px] px-2 text-center font-poppins text-sm font-[300] uppercase text-[#373636] md:text-base">
            Marlo’s strives to serve high quality dishes whilst giving
            exceptional customer service. Our wide menu has been created to
            offer everyone something which they will love. From homemade British
            classics to infused Mediterranean dishes.
          </p>
          <Button className="rounded-none bg-[#76101E] px-4 py-6 text-center font-poppins text-xs font-[400] uppercase tracking-[2px] text-[#fff] hover:bg-[#af1d30] md:mt-3 md:px-6 md:py-7 md:text-sm">
            <Link
              className="flex flex-row items-center justify-center gap-1"
              href={"/table-booking"}
            >
              <ArrowRight /> Book now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Reserve;
