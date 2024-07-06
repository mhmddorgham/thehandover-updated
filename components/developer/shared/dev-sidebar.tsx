"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { sidebarItems } from "@/constants/developer";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
function DevSidebar() {
  const pathname = usePathname();
  const params = useParams();
  console.log("params:: ", params);
  console.log("pathname: ", pathname);

  return (
    <div className="w-full h-full  ">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="dev-sidebar"
      >
        <AccordionItem value="dev-sidebar">
          <AccordionTrigger className="text-primary-dark-blue-color font-semibold text-lg py-2">
            Developer&apos;s Dashboard
          </AccordionTrigger>
          <AccordionContent className="h-full flex flex-col ">
            {sidebarItems &&
              sidebarItems.map((item, idx) => {
                return item.submenu ? (
                  <Accordion
                    key={idx}
                    className={`${
                      pathname?.includes(item.path!) ? "ml-1" : "ml-8"
                    }`}
                    type="single"
                    collapsible
                    defaultValue={
                      pathname?.includes(item.keyword) ? item.keyword : ""
                    }
                  >
                    <AccordionItem value={item.keyword}>
                      <AccordionTrigger
                        className={` hover:!no-underline ${
                          pathname?.includes(item.path!)
                            ? "text-p-dark-color"
                            : "text-gray-400"
                        } `}
                      >
                        {item.label}
                      </AccordionTrigger>
                      <AccordionContent>
                        {item.submenu.map((subItem, subIdx) => (
                          <SidebarItem
                            key={subIdx}
                            pathname={pathname}
                            item={subItem}
                            params={params}
                          />
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <SidebarItem
                    key={idx}
                    pathname={pathname}
                    item={item}
                    params={params}
                  />
                );
              })}
            {/* <div
                className={`create-listing tw-cursor-pointer`}
                onClick={handleUserStatus}
              >
                <p className="mb-0">Create Listing</p>
              </div> */}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default DevSidebar;

const SidebarItem = ({
  pathname,
  item,
  params,
}: {
  pathname: string;
  item: { path: string; label: string; submenu?: { label: string }[] };
  params: Params;
}) => {
  return (
    <div
      className={`py-3 flex items-center gap-2 ${
        pathname?.includes(item.path)
          ? "text-p-dark-color font-semibold"
          : "text-gray-400"
      } `}
    >
      {pathname?.includes(item.path) && (
        <div className="inline-flex items-center">
          <label
            className="relative flex items-center  rounded-full cursor-pointer"
            htmlFor="blue"
          >
            <input
              type="checkbox"
              className=" peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all checked:border-blue-500 checked:bg-blue-500"
              id="blue"
              checked
            />
            <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
        </div>
      )}

      <Link
        className={`${pathname?.includes(item.path) ? "ml-1" : "ml-8"}`}
        href={`
      ${item.path}/${params?.userId}`}
      >
        {item.label}
      </Link>
    </div>
  );
};
