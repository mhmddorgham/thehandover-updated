import React from "react";

function SummaryCard({
  title,
  record,
  borderColor,
}: {
  title: string;
  record: string;
  borderColor: string;
}) {
  const redBorder = "border-[#fa9999] shadow-[#fa9999]";
  const blueBorder = "border-[#99A3FA] shadow-[#99A3FA]";
  const greenBorder = "border-[#8EDF71] shadow-[#8EDF71]";
  const yellowBorder = "border-[#FAD999] shadow-[#FAD999]";
  const purpleBorder = "border-[#BE99FA] shadow-[#BE99FA]";

  const boxBorder =
    borderColor === "red"
      ? redBorder
      : borderColor === "blue"
      ? blueBorder
      : borderColor === "green"
      ? greenBorder
      : borderColor === "yellow"
      ? yellowBorder
      : purpleBorder;
  return (
    <div
      className={`min-w-[150px] min-h-[145px] bg-white border rounded-xl flex flex-col justify-center items-center ${boxBorder}`}
    >
      <h1 className="text-primary-dark-blue-color font-semibold text-xl py-1">
        {record}
      </h1>
      <p className="text-xs text-primary-dark-blue-color py-1 mt-3">{title}</p>
    </div>
  );
}

export default SummaryCard;
