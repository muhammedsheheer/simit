"use client";
import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import Image from "next/image";

const Reviews = ({}) => {
  const { reviews } = useRestaurant();
  return (
    <section className="md:px-[350px]md:mp-10 relative flex h-full w-full justify-center bg-[#ffff] bg-[url('/images/home/hero/bg1.png')] bg-cover px-6 pb-20 pt-6 md:pb-0 2xl:px-[440px]">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-t-full border border-[#fff] bg-[#fff] py-12 md:py-44 md:pt-24">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 lg:gap-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="font-open_sans text-sm font-[400] uppercase tracking-[3px] text-[#C0A58A]">
              WHAT THEY SAY{" "}
            </span>
            <h6 className="text-center font-open_sans text-2xl font-[400] uppercase tracking-[7px] text-[#323232] md:text-3xl md:tracking-[10px]">
              TESTIMONIALS{" "}
            </h6>
            <Image
              src={"/images/home/story/line.svg"}
              width={281}
              height={74}
              alt="image1"
              className="w-20"
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          {reviews && (
            <Carousel className="ml-6 mr-0 w-full md:ml-0 md:mr-12">
              <CarouselContent className="flex w-full justify-center gap-4 md:ml-4">
                {reviews.map((review, index) => (
                  <CarouselItem
                    key={index}
                    className="flex w-full basis-full flex-col items-center justify-center gap-6 rounded-none"
                  >
                    <div className="flex flex-col gap-6 bg-transparent px-6 pb-4">
                      <div className="flex w-full justify-center">
                        {Array.from({ length: review.rating }).map(
                          (_, index) => (
                            <Icons.star
                              key={index}
                              className="text-[#050505]"
                            />
                          ),
                        )}
                      </div>
                      <div className="flex flex-col gap-4">
                        <p className="font-cormorant line-clamp-6 max-w-[450px] text-center text-sm font-[500] uppercase text-[#817263] md:px-4 lg:leading-[120%]">
                          {review.text}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full flex-col items-center justify-center gap-2">
                      <Image
                        src={
                          review.profile_photo_url ||
                          "/images/home/reviews/pictures/anna-mathew.svg"
                        }
                        width={64}
                        height={64}
                        alt={review.author_name}
                      />
                      <p className="font-cormorant text-center text-sm font-[600] uppercase leading-[120%] text-[#323232]">
                        Gerrin Tom
                      </p>
                      <p className="font-cormorant text-center text-xs font-[600] uppercase text-[#8A8A8A]">
                        {review.relative_time_description}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 transition-transform duration-300 ease-in-out">
                <CarouselPrevious className="border-[#fff] text-[#fff] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-[#fff] text-[#fff] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
