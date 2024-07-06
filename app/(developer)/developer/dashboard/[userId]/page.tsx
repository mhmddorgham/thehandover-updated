import ActivitiesSection from "@/components/developer/dashboard/activities-section";
import OverviewSection from "@/components/developer/dashboard/overview-section";
import React from "react";

function page({ params }: { params: { userId: string } }) {
  return (
    <main className="px-7 py-10 ">
      <OverviewSection />
      <ActivitiesSection />
    </main>
  );
}

export default page;
