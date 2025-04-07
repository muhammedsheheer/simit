"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({}) => {
  return (
    <footer className="h-full w-full bg-[#F2F2F2] px-4 pt-12 md:px-20 md:pt-20">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="md:ml-[3%] md:pb-10">
          <Image
            src={"/images/home/hero/logo.png"}
            width={160}
            height={160}
            alt="logo"
            className="w-28 md:w-32"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-4 md:mr-[4%] md:flex-row md:items-start md:gap-36 md:pb-20 2xl:gap-56">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="font-poppins text-center text-sm font-[400] uppercase tracking-[2px] text-[#76101E] md:text-base">
              Contact
            </h1>
            <Link className="text-center" href={""} target="_blank">
              <span className="font-poppins text-center text-sm font-[400] uppercase tracking-[2px] text-[#76101E] md:text-base">
                275 High Street
              </span>
            </Link>
            <Link href={""}>
              <span className="font-poppins text-center text-sm font-[400] uppercase tracking-[2px] text-[#76101E] md:text-base">
                +44 1992 610557{" "}
              </span>
            </Link>
            <Link href={""}>
              <span className="font-poppins text-center text-sm font-[400] uppercase tracking-[2px] text-[#76101E] md:text-base">
                marlosbrasserie@yahoo.com{" "}
              </span>
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              className="font-poppins text-center text-sm font-[400] uppercase tracking-[2px] text-[#76101E] md:text-base"
              href={"/"}
            >
              Home
            </Link>
            <Link
              className="font-poppins text-center text-sm font-[400] uppercase tracking-[2px] text-[#76101E] md:text-base"
              href={"/menu"}
            >
              Order Online
            </Link>
            <Link
              className="font-poppins text-center text-sm font-[400] uppercase tracking-[2px] text-[#76101E] md:text-base"
              href={"/table-booking"}
            >
              Reservation
            </Link>
            <Link
              className="font-poppins text-center text-sm font-[400] uppercase tracking-[2px] text-[#76101E] md:text-base"
              href={"/contact"}
            >
              Contact us
            </Link>
            <Link
              className="font-poppins text-center text-sm font-[400] uppercase tracking-[2px] text-[#76101E] md:text-base"
              href={"/menu"}
            >
              Menu
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-poppins text-center text-sm font-[400] uppercase tracking-[2px] text-[#76101E] md:text-base">
              Opening HOURS
            </h1>
            <p className="font-poppins text-center text-sm font-[400] uppercase tracking-[2px] text-[#76101E] md:text-base">
              Mon - Sun : 8am-5pm
            </p>
          </div>
        </div>
        <div className="w-full border-t-2 border-[rgba(255,246,235,0.13)]"></div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-full border-b-[1px] border-b-[#D6D0D0]" />
        <div className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row md:gap-0">
          <p className="text-center font-inter text-sm font-[400] text-[#76101E]">
            © All Rights Reserved by simit{" "}
          </p>
          <div className="flex flex-row items-center justify-center gap-3 md:mr-[8%]">
            <Link
              className="rounded-full px-1 py-1 ring-1 ring-[#76101E]"
              href={""}
              target="_blank"
            >
              <Icons.facebook className="h-7 w-7 text-[#76101E]" />
            </Link>
            <Link
              className="rounded-full px-1 py-1 ring-1 ring-[#76101E]"
              href={""}
              target="_blank"
            >
              <Icons.instagram className="h-7 w-7 text-[#76101E]" />
            </Link>
          </div>
          <Link href={"https://foodo.ai"} target="_blank">
            <span className="text-center font-inter text-sm font-[400] text-[#76101E]">
              Foodo
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
