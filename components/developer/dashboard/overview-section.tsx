import { projectsSummary } from "@/constants/developer/dashboard-consts";
import React from "react";
import SummaryCard from "../shared/summary-card";

function OverviewSection() {
  return (
    <section className="w-full   px-8 py-3 bg-white rounded-[14px] shadow min-h-[270px] ">
      <h1 className="text-primary-dark-blue-color font-semibold text-xl ">
        Overview
      </h1>
      <p className="text-primary-gray text-sm py-1">Summary of projects</p>

      <div className="w-full pt-5 flex justify-between items-center gap-2">
        {projectsSummary &&
          projectsSummary.map((summary, idx) => (
            <SummaryCard
              key={idx}
              title={summary.title}
              record={summary.record}
              borderColor={summary.borderColor}
            />
          ))}
      </div>
    </section>
  );
}

export default OverviewSection;
