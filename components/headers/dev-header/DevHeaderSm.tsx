"use client";
// import PrimaryButton from "../buttons/PrimaryButton";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BeakerIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { signOut } from "next-auth/react";
import { IHeaderProps } from "@/types";

function DevHeaderSm({ loading, session, status }: IHeaderProps) {
  return (
    <Sheet>
      <div className="w-full flex justify-end items-end">
        <SheetTrigger className="border-none" asChild>
          <Button variant="outline">
            <Bars3Icon className="w-6 h-6" />
          </Button>
        </SheetTrigger>
      </div>
      <SheetContent className="bg-white flex flex-col">
        <div className="flex-1">
          <SheetHeader className="text-start">
            <SheetTitle className="font-bold  text-pink-primary ">
              StylishAI
            </SheetTitle>
            <SheetDescription>Discover Your Perfect Style.</SheetDescription>
          </SheetHeader>

          {!loading && (
            <div className=" flex flex-col justify-center items-start gap-3 mt-5">
              <button className="w-full text-pink-primary border-b border-white  hover:bg-pink-bg  py-2 duration-200 ">
                {status === "authenticated" ? (
                  <Link href={`/dashboard`}>Dashboard</Link>
                ) : (
                  <Link href={`/sign-in`}>Login</Link>
                )}
              </button>

              {status === "authenticated" ? (
                <button
                  onClick={() => signOut()}
                  className="w-full bg-pink-primary rounded-2xl px-4 py-2 text-white hover:bg-pink-secondary hover:scale-105 duration-200  "
                >
                  Sign Out
                </button>
              ) : (
                <button className="w-full bg-pink-primary rounded-2xl px-4 py-2 text-white hover:bg-pink-secondary hover:scale-105 duration-200  ">
                  <Link href={`/sign-up`}>Sign Up</Link>
                </button>
              )}
            </div>
          )}
        </div>

        <SheetFooter>
          {/* privace and terms &conditions */}
          <div className="w-full flex flex-col items-center gap-2 mt-4">
            <Link
              className="text-gray-primary text-sm hover:text-pink-primary duration-100"
              href="/privacy-privacy"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-gray-primary text-sm hover:text-pink-primary duration-100"
              href="/terms-conditions"
            >
              Terms & Conditions
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default DevHeaderSm;
