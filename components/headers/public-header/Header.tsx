"use client";
import React from "react";

import { useSession } from "next-auth/react";
import HeaderLg from "./HeaderLg";
import HeaderSm from "./HeaderSm";

function Header() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  return (
    <main>
      <div className="hidden md:block bg-white">
        {/* large screen header  */}
        <div>pulic header</div>
        <HeaderLg status={status} session={session} loading={loading} />
      </div>
      <div className="block md:hidden">
        {/* small screen header  */}
        <HeaderSm status={status} session={session} loading={loading} />
      </div>
    </main>
  );
}

export default Header;
