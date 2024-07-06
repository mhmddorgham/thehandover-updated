import Image from "next/image";
import Link from "next/link";
import React from "react";

function ActivitiesSection() {
  return (
    <section className="w-full  p-4 bg-white   min-h-[280px] mt-4 ">
      <h1 className="text-primary-dark-blue-color font-semibold text-2xl ">
        Activities
      </h1>

      <div className="flex flex-col justify-center items-center w-full">
        <Image
          className="mx-auto mb-3"
          src="/assets/icons/pending_icon.svg"
          alt="pending_icon"
          width={270}
          height={270}
        />
        <p className="mt-3  ">
          Please complete your profile to post a project{" "}
          <span className="underline text-primary-blue-color">
            {/* <Link href={`/developer/profile/${user?._id}`}>
                        Complete profile
                      </Link> */}
          </span>
        </p>
      </div>
    </section>
  );
}

export default ActivitiesSection;
