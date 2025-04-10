import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#fff] p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#fff]">
        <h2 className="font-oswald text-center text-8xl text-[#323232] md:left-[15%] md:text-8xl">
          The Simit
          <br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#fff] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/image3.jpg"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="font-oswald max-w-[500px] text-center text-6xl text-[#323232] sm:text-7xl md:text-start">
              From Passion
              <br />
              to Perfection
            </h1>
            <p className="max-w-[450px] text-center font-light leading-[160%] text-[#323232] md:text-start">
              What started as a simple dream—to reimagine the dining journey—has
              blossomed into Simit, a culinary destination where flavor,
              creativity, and heart come together. Driven by a deep-rooted love
              for excellence, Simit was born not just to serve food, but to
              craft stories on a plate. <br />
              From humble origins to becoming a haven for food enthusiasts, our
              dedication to quality, innovation, and heartfelt hospitality has
              remained unwavering. Every ingredient is carefully chosen, each
              dish prepared with passion, and every bite is a tribute to flavor.{" "}
              <br />
              At Simit, we go beyond serving meals—we create lasting memories.
              As we grow, our vision stays true: to blend culinary artistry with
              soul and deliver a dining experience that lingers in your heart.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
