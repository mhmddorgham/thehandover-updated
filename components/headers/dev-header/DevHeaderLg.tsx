"use client";
// import PrimaryButton from "@/components/buttons/PrimaryButton";
import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
import { IHeaderProps } from "@/types";
import Image from "next/image";

function DevHeaderLg({ loading, session, status }: IHeaderProps) {
  // get user id from data._id from mongodb
  return (
    <div className="w-full container flex justify-between items-center min-h-[5rem]">
      <div className="flex items-center gap-2 font-bold text-2xl  text-pink-primary ">
        <Image
          src="/assets/icons/logo_v2.svg"
          alt="StylishAI"
          width={30}
          height={30}
        />
        <p>StylishAI</p>
      </div>
      {!loading && (
        <div className="flex justify-center items-center gap-6">
          {status === "authenticated" ? (
            <button className="text-pink-primary   border-b border-white  hover:border-pink-primary  px-4 py-3 duration-200 mr-4 ">
              <Link href={`/dashboard`}>Dashboard</Link>
            </button>
          ) : (
            <button className="text-pink-primary   border-b border-white  hover:border-pink-primary  px-4 py-3 duration-200 mr-4 ">
              <Link href={`/sign-in`}>Login</Link>
            </button>
          )}

          {status === "authenticated" ? (
            <button
              onClick={() => signOut()}
              className="bg-pink-primary rounded-2xl px-4 py-2 text-white hover:bg-pink-secondary hover:scale-105 duration-200  "
            >
              Sign Out
            </button>
          ) : (
            <button className="bg-pink-primary rounded-2xl px-4 py-2 text-white hover:bg-pink-secondary hover:scale-105 duration-200  ">
              <Link href={`/sign-up`}>Sign Up</Link>
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default DevHeaderLg;
