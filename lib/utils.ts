import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// check them out for later
// const orangeBorder = "border-[#fa9999] shadow--[#fa9999]";
// const pinkBorder = "border-[#fa99fa] shadow--[#fa99fa]";
// const grayBorder = "border-[#f0f0f0] shadow--[#f0f0f0]";
