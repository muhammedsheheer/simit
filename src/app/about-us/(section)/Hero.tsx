import Image from "next/image";

const Hero = ({}) => {
  return (
    <section
      id="hero"
      className="flex w-full items-center justify-center bg-[#fff] py-6 lg:py-12"
    >
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="flex w-full flex-col gap-6 px-4 lg:flex-row lg:gap-0 lg:px-0">
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="mt-20 flex flex-col items-start gap-6 lg:mt-0 lg:w-8/12">
              <h1 className="font-oswald text-5xl font-semibold text-[#323232] md:leading-[66px] lg:text-6xl">
                Welcome to Simit <br />A Symphony of Flavors
              </h1>
              <p className="font-manrope font-normal text-[#323232]">
                At Simit, every dish is a harmonious blend of tradition and
                creativity. From the finest handpicked ingredients to
                thoughtfully crafted recipes, we offer a dining experience where
                passion meets precision. Whether you`re enjoying a signature
                delight or a sweet indulgence, every bite reflects our
                commitment to quality, innovation, and unforgettable taste.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:mt-16 lg:w-1/2">
            <Image
              src="/images/about-us/image2.jpg"
              width={951}
              height={975}
              alt="hero"
              className="h-full max-h-[600px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
