"use client";
// import PrimaryButton from "@/components/buttons/PrimaryButton";
import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
import { IHeaderProps } from "@/types";
import Image from "next/image";

import { usePathname } from "next/navigation";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { developerLinks, devNavLinks } from "@/constants/developer";

export function DevHeaderLg({ loading, session, status }: IHeaderProps) {
  const pathname = usePathname();

  const postButtonStlye =
    "w-[150px] rounded-full border outline-none border-[#B9B9B9] px-4 text-[14px] py-2   hover:text-white duration-150 hover:border-[#5457D9] hover:!bg-[#5457D9] hover:!shadow-sm hover:!shadow-primary-purple-color";
  const activeNav = "border-b-2 border-solid border-[#797979]  font-[600]";

  return (
    <div
      className={`w-full flex justify-between my-1 items-center  mx-auto py-3 px-2 container bg-white sticky top-0  `}
    >
      <div>
        <Link href="/" className="header-links">
          <Image
            src="/assets/icons/logo-v3.svg"
            width={220}
            height={220}
            alt="logo"
          />
        </Link>
      </div>

      <div className="flex justify-center items-center gap-4">
        {devNavLinks &&
          devNavLinks.map((link, index) => {
            return (
              <Link
                href={link.href}
                key={index}
                className={`mb-0 mx-2  text-[12px]  ${
                  link.href === pathname ? activeNav : ""
                }`}
              >
                {link.title}
              </Link>
            );
          })}
      </div>
      <div className="flex justify-end items-center pr-2 ">
        <div className="flex justify-end items-center pr-2">
          <button
            // onClick={(e) => postListingFunction(e)}
            className={`${postButtonStlye}`}
          >
            Post a project
          </button>
          <div>
            <Image
              src="/assets/icons/idle_bell.svg"
              width={24}
              height={24}
              alt="bell"
              className="w-[20px] h-[20px] mx-5"
            />
          </div>

          <Popover>
            <PopoverTrigger>
              <Image
                className="w-[25px] h-[25px] "
                width={25}
                height={25}
                alt="menu_icon"
                src="/assets/images/menu_img.png"
              />
            </PopoverTrigger>
            <PopoverContent className="max-w-[220px] flex flex-col gap-2 ">
              {developerLinks &&
                developerLinks.map((devLink, idx) => {
                  return (
                    <Link
                      key={idx}
                      href={`/dashboard/${devLink.href}`}
                      className="text-[15px]  text-black px-0 py-2 text-center   border-b border-solid duration-150 border-white hover:bg-gray-100 w-full pb-3"
                    >
                      {devLink.title}
                    </Link>
                  );
                })}

              <button
                // onClick={handleSignout}
                className="w-full text-[12px]  h-10 rounded-md text-white bg-primary-purple-color mt-3 "
              >
                Sign out
              </button>
            </PopoverContent>
          </Popover>

          {/* <>
          <div
            ref={notificationRef}
            className={` top-[72px]   min-w-full w-[600px] absolute  right  z-[100] duration-500 ${
              showNotification ? "semi-sm:block" : "hidden"
            }`}
          >
            <Notifications
              closeNotificationPanel={closeNotificationPanel}
              ref={notificationRef}
              className={"!max-w-[700px]"}
            />
          </div>
        </> */}
        </div>
      </div>
    </div>
  );
}

export default DevHeaderLg;
