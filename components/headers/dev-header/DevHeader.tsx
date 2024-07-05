"use client";
import React from "react";

import { useSession } from "next-auth/react";
import DevHeaderLg from "./DevHeaderLg";
import DevHeaderSm from "./DevHeaderSm";

function DevHeader() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  return (
    <section>
      <div className="hidden md:block bg-white">
        {/* large screen header  */}

        <DevHeaderLg status={status} session={session} loading={loading} />
      </div>
      <div className="block md:hidden">
        {/* small screen header  */}
        <DevHeaderSm status={status} session={session} loading={loading} />
      </div>
    </section>
  );
}

export default DevHeader;
