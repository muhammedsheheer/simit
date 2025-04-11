"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const d = localStorage.getItem("positiond");
    if (d !== null) {
      setPositiond(d);
    }
  }, []);
  const [positiond, setPositiond] = useState<string>("");
  useEffect(() => {
    if (positiond) {
      localStorage.setItem("positiond", positiond);
    }
  }, [positiond]);
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={cn(
        `${position} top-0 z-50 h-[10vh] w-full pt-4`,
        pathname === "/" ? "bg-transparent" : "bg-transparent",
      )}
    >
      {/*big screen */}
      <div className="hidden px-4 md:block md:px-32">
        <div className="flex flex-row items-center justify-end">
          <div className="flex flex-row items-start justify-center gap-28">
            <Link
              href={"/"}
              className={
                pathname === "/" || pathname === "/table-booking"
                  ? "pt-4 text-center font-poppins text-xs font-[400] uppercase tracking-[2px] text-[#F4F4F4]"
                  : "pt-4 text-center font-poppins text-xs font-[400] uppercase tracking-[2px] text-[#000]"
              }
            >
              Home
            </Link>
            <Link
              href={"/menu"}
              className={
                pathname === "/" || pathname === "/table-booking"
                  ? "pt-4 text-center font-poppins text-xs font-[400] uppercase tracking-[2px] text-[#F4F4F4]"
                  : "pt-4 text-center font-poppins text-xs font-[400] uppercase tracking-[2px] text-[#000]"
              }
            >
              Order Online
            </Link>
            <Link href={"/"}>
              <Image
                src={"/images/home/hero/logo.png"}
                width={281}
                height={74}
                alt="logo"
                className="w-24"
              />
            </Link>
            <Link
              href={"/table-booking"}
              className={
                pathname === "/" || pathname === "/table-booking"
                  ? "pt-4 text-center font-poppins text-xs font-[400] uppercase tracking-[2px] text-[#F4F4F4]"
                  : "pt-4 text-center font-poppins text-xs font-[400] uppercase tracking-[2px] text-[#000]"
              }
            >
              Reservation
            </Link>

            <Link
              href={"/contact"}
              className={
                pathname === "/" || pathname === "/table-booking"
                  ? "pt-4 text-center font-poppins text-xs font-[400] uppercase tracking-[2px] text-[#F4F4F4]"
                  : "pt-4 text-center font-poppins text-xs font-[400] uppercase tracking-[2px] text-[#000]"
              }
            >
              Contact Us
            </Link>
            <Link
              href={"/about-us"}
              className={
                pathname === "/" || pathname === "/table-booking"
                  ? "pt-4 text-center font-poppins text-xs font-[400] uppercase tracking-[2px] text-[#F4F4F4]"
                  : "pt-4 text-center font-poppins text-xs font-[400] uppercase tracking-[2px] text-[#000]"
              }
            >
              About
            </Link>
          </div>
        </div>
      </div>

      {/*mobile screen */}
      <div className="block px-4 md:hidden md:px-20">
        <div className="flex flex-row items-center justify-between">
          <div>
            <Link href={"/"}>
              <Image
                src={"/images/home/hero/logo.png"}
                width={281}
                height={74}
                alt="logo"
                className="w-16"
              />
            </Link>
          </div>
          <div>
            <Sidebar>
              <Button
                variant="ghost"
                className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
              >
                <div className="flex flex-row gap-2">
                  <EqualizerIcon />
                </div>
              </Button>
            </Sidebar>{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  const pathname = usePathname();
  const barColor = pathname === "/" ? "#fff" : "#000";

  return (
    <div className="equalizer-icon rotate text-[#C0A58A]">
      <div className="bar" style={{ backgroundColor: barColor }}></div>
      <div className="bar" style={{ backgroundColor: barColor }}></div>
      <div className="bar" style={{ backgroundColor: barColor }}></div>
    </div>
  );
};
