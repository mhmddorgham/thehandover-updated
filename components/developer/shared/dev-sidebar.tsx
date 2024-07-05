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

  const itemLinkStyle = `py-3 `;
  return (
    <div className="w-full h-full">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-primary-dark-blue-color font-semibold text-lg py-2">
            Developer&apos;s Dashboard
          </AccordionTrigger>
          <AccordionContent className="h-full flex flex-col ">
            {sidebarItems &&
              sidebarItems.map((item, idx) => {
                return item.submenu ? (
                  <Accordion key={idx} type="multiple">
                    <AccordionItem value={item.keyword}>
                      <AccordionTrigger
                        className={`${
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
      className={`py-3 ${
        pathname?.includes(item.path) ? "text-p-dark-color" : "text-gray-400"
      } `}
    >
      <Link
        href={`
      ${item.path}/${params?.userId}`}
      >
        {item.label}
      </Link>
    </div>
  );
};
