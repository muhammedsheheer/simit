import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";
import { useRestaurant } from "@/context/RestaurantContext";

const Reviews = () => {
  const { reviews } = useRestaurant();

  return (
    <section className="relative flex h-full w-full justify-center bg-[#fff] pb-8 md:px-20 lg:pb-0">
      <div className="flex h-full w-full flex-col items-start justify-center gap-4 py-12 md:py-44 md:pt-24">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 lg:gap-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="mt-4 text-center font-open_sans text-2xl font-[700] uppercase tracking-[4px] text-[#76101E] md:mt-20 md:text-4xl md:tracking-[10px]">
              LISTEN TO OUR <br /> CUSTOMERS’ HEARTS
            </h1>
          </div>
        </div>
        <div className="flex w-full items-center justify-center p-4">
          {reviews && (
            <Carousel className="w-full px-4">
              <CarouselContent className="flex w-full justify-center gap-4 md:ml-4">
                {reviews.map((review, index) => (
                  <CarouselItem
                    key={index}
                    className="flex w-full basis-full flex-col items-center justify-center gap-6 rounded-none md:basis-1/2"
                  >
                    <div className="flex h-[250px] flex-col justify-center gap-6 rounded-lg border border-[#F7F7F7] bg-[#F7F7F7] px-6 md:h-[350px] md:gap-2 md:rounded-2xl">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-4 md:mb-12 md:gap-8">
                          <p className="text-center font-open_sans text-xl font-[700] uppercase tracking-[5px] text-[#000] md:text-2xl md:tracking-[11px]">
                            {review.authorAttribution.displayName}
                          </p>
                          <div className="w-full border-b-[1px] border-b-[#D0CBCB]" />
                        </div>
                        <p className="line-clamp-6 text-center font-poppins text-sm font-[300] lowercase text-[#373636] md:mb-8 md:px-4">
                          {review.text.text}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="group absolute -bottom-8 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 pb-6 transition-transform duration-300 ease-in-out md:-bottom-[250px]">
                <CarouselPrevious className="border-[#0E171A] text-[#0E171A] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-[#0E171A] text-[#0E171A] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
