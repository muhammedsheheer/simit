// "use client";
// import { Icons } from "@/components/Icon";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { useRestaurant } from "@/context/RestaurantContext";
// import Image from "next/image";

// const Reviews = ({}) => {
//   const { reviews } = useRestaurant();
//   return (
//     <section className="md:px-[350px]md:mp-10 relative flex h-full w-full justify-center bg-[#ffff] bg-[url('/images/home/hero/bg1.png')] bg-cover px-6 pb-20 pt-6 md:pb-0 2xl:px-[440px]">
//       <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-t-full border border-[#fff] bg-[#fff] py-12 md:py-44 md:pt-24">
//         <div className="flex h-full w-full flex-col items-center justify-center gap-2 lg:gap-4">
//           <div className="flex flex-col items-center justify-center gap-2">
//             <span className="font-open_sans text-sm font-[400] uppercase tracking-[3px] text-[#C0A58A]">
//               WHAT THEY SAY{" "}
//             </span>
//             <h6 className="text-center font-open_sans text-2xl font-[400] uppercase tracking-[7px] text-[#323232] md:text-3xl md:tracking-[10px]">
//               TESTIMONIALS{" "}
//             </h6>
//             <Image
//               src={"/images/home/story/line.svg"}
//               width={281}
//               height={74}
//               alt="image1"
//               className="w-20"
//             />
//           </div>
//         </div>
//         <div className="flex w-full items-center justify-center">
//           {reviews && (
//             <Carousel className="ml-6 mr-0 w-full md:ml-0 md:mr-12">
//               <CarouselContent className="flex w-full justify-center gap-4 md:ml-4">
//                 {reviews.map((review, index) => (
//                   <CarouselItem
//                     key={index}
//                     className="flex w-full basis-full flex-col items-center justify-center gap-6 rounded-none"
//                   >
//                     <div className="flex flex-col gap-6 bg-transparent px-6 pb-4">
//                       <div className="flex w-full justify-center">
//                         {Array.from({ length: review.rating }).map(
//                           (_, index) => (
//                             <Icons.star
//                               key={index}
//                               className="text-[#050505]"
//                             />
//                           ),
//                         )}
//                       </div>
//                       <div className="flex flex-col gap-4">
//                         <p className="font-cormorant line-clamp-6 max-w-[450px] text-center text-sm font-[500] uppercase text-[#817263] md:px-4 lg:leading-[120%]">
//                           {review.text}
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex w-full flex-col items-center justify-center gap-2">
//                       <Image
//                         src={
//                           review.profile_photo_url ||
//                           "/images/home/reviews/pictures/anna-mathew.svg"
//                         }
//                         width={64}
//                         height={64}
//                         alt={review.author_name}
//                       />
//                       <p className="font-cormorant text-center text-sm font-[600] uppercase leading-[120%] text-[#323232]">
//                         Gerrin Tom
//                       </p>
//                       <p className="font-cormorant text-center text-xs font-[600] uppercase text-[#8A8A8A]">
//                         {review.relative_time_description}
//                       </p>
//                     </div>
//                   </CarouselItem>
//                 ))}
//               </CarouselContent>
//               <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 transition-transform duration-300 ease-in-out">
//                 <CarouselPrevious className="border-[#fff] text-[#fff] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
//                 <CarouselNext className="border-[#fff] text-[#fff] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
//               </div>
//             </Carousel>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Reviews;

// "use client";
// import { Icons } from "@/components/Icon";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { useRestaurant } from "@/context/RestaurantContext";
// import Image from "next/image";

// const mockReviews = [
//   {
//     author_name: "John Doe",
//     profile_photo_url: "/images/home/reviews/picture1.svg",
//     rating: 5,
//     text: "The food was absolutely amazing! Everything was cooked to perfection, and the service was top-notch.",
//   },
//   {
//     author_name: "Sarah Smith",
//     profile_photo_url: "/images/home/reviews/picture2.svg",
//     rating: 4,
//     text: "Great ambiance and delicious food. The staff was very friendly and welcoming.",
//   },
//   {
//     author_name: "Mike Johnson",
//     profile_photo_url: "/images/home/reviews/picture3.svg",
//     rating: 5,
//     text: "A must-visit restaurant! The quality of ingredients and flavors were beyond my expectations.",
//   },
//   {
//     author_name: "Emily Davis",
//     profile_photo_url: "/images/home/reviews/picture4.svg",
//     rating: 4,
//     text: "Loved the experience! The desserts were my favorite part of the meal.",
//   },
// ];

// const Reviews = ({}) => {
//   const reviews = mockReviews;
//   return (
//     <section className="md:px-[350px]md:mp-10 relative flex h-full w-full justify-center bg-[#ffff] bg-[url('/images/home/hero/bg1.png')] bg-cover px-6 pb-20 pt-6 md:pb-0 2xl:px-[440px]">
//       <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-t-full border border-[#fff] bg-[#fff] py-12 md:py-44 md:pt-24">
//         <div className="flex h-full w-full flex-col items-center justify-center gap-2 lg:gap-4">
//           <div className="flex flex-col items-center justify-center gap-2">
//             <h1 className="mt-4 text-center font-open_sans text-2xl font-[700] uppercase tracking-[4px] text-[#76101E] md:mt-20 md:text-4xl md:tracking-[10px]">
//               LISTEN TO OUR <br /> CUSTOMERS’ HEARTS
//             </h1>
//           </div>
//         </div>
//         <div className="flex w-full items-center justify-center">
//           {reviews && (
//             <Carousel className="ml-6 mr-0 w-full md:ml-0 md:mr-12">
//               <CarouselContent className="flex w-full justify-center gap-4 md:ml-4">
//                 {reviews.map((review, index) => (
//                   <CarouselItem
//                     key={index}
//                     className="flex w-full basis-full flex-col items-center justify-center gap-6 rounded-none bg-[#F7F7F7]"
//                   >
//                     <div className="flex flex-col gap-6 px-6 pb-4">
//                       <div className="flex flex-col gap-4">
//                         <p className="text-center font-open_sans text-xl font-[700] uppercase text-[#000] md:text-3xl">
//                           {review.author_name}
//                         </p>
//                         <p className="line-clamp-6 max-w-[450px] text-center font-poppins text-sm font-[300] uppercase text-[#373636] md:px-4 lg:leading-[120%]">
//                           {review.text}
//                         </p>
//                       </div>
//                     </div>
//                   </CarouselItem>
//                 ))}
//               </CarouselContent>
//               <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 transition-transform duration-300 ease-in-out">
//                 <CarouselPrevious className="border-[#76101E] text-[#76101E] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
//                 <CarouselNext className="border-[#76101E] text-[#76101E] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
//               </div>
//             </Carousel>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Reviews;

// "use client";
// import { Icons } from "@/components/Icon";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { useRestaurant } from "@/context/RestaurantContext";
// import Image from "next/image";

// const Reviews = ({}) => {
//   const { reviews } = useRestaurant();
//   return (
//     <section className="relative flex h-full w-full justify-center bg-[#070D0F] pb-8 md:px-20 lg:pb-0">
//       <div className="flex h-full w-full flex-col items-start justify-center gap-4 py-12 md:py-44 md:pt-24">
//         <div className="flex h-full w-full flex-col items-center justify-center gap-2 lg:gap-4">
//           <div className="flex flex-col items-center justify-center gap-2">
//             <span className="font-birthstone text-2xl font-[400] tracking-[0.76px] text-[#C9AB81]">
//               Testimonial{" "}
//             </span>
//             <h6 className="text-center font-open_sans text-2xl font-[400] uppercase text-[#C9AB81] md:text-3xl md:tracking-[10px]">
//               STORIES FROM OUR <br /> PEOPLE{" "}
//             </h6>
//           </div>
//         </div>
//         <div className="flex w-full items-center justify-center p-4">
//           {reviews && (
//             <Carousel className="w-full px-4">
//               <CarouselContent className="flex w-full justify-center gap-4 md:ml-4">
//                 {reviews.map((review, index) => (
//                   <CarouselItem
//                     key={index}
//                     className="flex w-full basis-full flex-col items-center justify-center gap-6 rounded-none md:basis-1/2"
//                   >
//                     <div className="flex h-[250px] flex-col gap-6 border border-[#C9AB81] bg-transparent px-6 py-8">
//                       <div className="flex w-full justify-center">
//                         {Array.from({ length: review.rating }).map(
//                           (_, index) => (
//                             <Icons.star
//                               key={index}
//                               className="text-[#C9AB81]"
//                             />
//                           ),
//                         )}
//                       </div>
//                       <div className="flex flex-col gap-4">
//                         <p className="line-clamp-6 text-center font-cormorant text-sm font-[500] uppercase text-[#BBB4AA] md:px-4 lg:leading-[120%]">
//                           {review.text}
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex w-full flex-col items-center justify-center gap-2">
//                       <Image
//                         src={
//                           review.profile_photo_url ||
//                           "/images/home/reviews/pictures/anna-mathew.svg"
//                         }
//                         width={64}
//                         height={64}
//                         alt={review.author_name}
//                       />
//                       <p className="text-center font-cormorant text-sm font-[600] uppercase leading-[120%] text-[#BBB4AA]">
//                         Gerrin Tom
//                       </p>
//                     </div>
//                   </CarouselItem>
//                 ))}
//               </CarouselContent>
//               <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 transition-transform duration-300 ease-in-out">
//                 <CarouselPrevious className="border-[#0E171A] text-[#0E171A] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
//                 <CarouselNext className="border-[#0E171A] text-[#0E171A] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
//               </div>
//             </Carousel>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Reviews;

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

const mockReviews = [
  {
    author_name: "John Doe",
    profile_photo_url: "/images/home/reviews/picture1.svg",
    rating: 5,
    text: "The food was absolutely amazing! Everything was cooked to perfection, and the service was top-notch. From the appetizers to the main course, every bite was full of rich flavors. The ambiance of the restaurant made the dining experience even more enjoyable. Highly recommended!",
  },
  {
    author_name: "Sarah Smith",
    profile_photo_url: "/images/home/reviews/picture2.svg",
    rating: 4,
    text: "Great ambiance and delicious food. The staff was very friendly and welcoming, making us feel at home right away. The menu had a wide variety of options, and everything we tried was well-prepared and flavorful. The only reason for 4 stars instead of 5 is that the waiting time was a bit longer than expected.",
  },
  {
    author_name: "Mike Johnson",
    profile_photo_url: "/images/home/reviews/picture3.svg",
    rating: 5,
    text: "A must-visit restaurant! The quality of ingredients and flavors were beyond my expectations. Every dish was beautifully presented, and the attention to detail was impressive. The staff was knowledgeable and recommended great pairings for our meal. Can't wait to come back and try more dishes!",
  },
  {
    author_name: "Emily Davis",
    profile_photo_url: "/images/home/reviews/picture4.svg",
    rating: 3,
    text: "Loved the experience! The desserts were my favorite part of the meal. The overall atmosphere was cozy and relaxing, but I felt the portion sizes could have been slightly bigger for the price. Nevertheless, the flavors and presentation were excellent. I will definitely return to try more from the menu.",
  },
];

const Reviews = () => {
  const reviews = mockReviews;

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
          {reviews.length > 0 && (
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
                            {review.author_name}
                          </p>
                          <div className="w-full border-b-[1px] border-b-[#D0CBCB]" />
                        </div>
                        <p className="line-clamp-6 text-center font-poppins text-sm font-[300] lowercase text-[#373636] md:mb-8 md:px-4">
                          {review.text}
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
