import BavetteStory from "@/app/about-us/(section)/BavetteStory";
import Hero from "@/app/about-us/(section)/Hero";
import JoinUs from "@/app/about-us/(section)/JoinUs";
import Review from "@/app/about-us/(section)/Review";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const page = ({}) => {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#000]">
        <Navbar position="absolute" />
        <Hero />
        <BavetteStory />
        <JoinUs />
        {/* <Review /> */}
        <Footer />
      </div>
    </main>
  );
};

export default page;
