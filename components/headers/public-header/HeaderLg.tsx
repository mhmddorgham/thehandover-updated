// import React, { useMemo } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// import Image from "next/image";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { GiHamburgerMenu } from "react-icons/gi";

// export default function HeaderLg() {
//   const router = useRouter();
//   const postButtonStlye =
//     "tw-w-[150px] tw-rounded-full tw-border tw-outline-none tw-border-[#B9B9B9] tw-px-4 tw-text-[14px] tw-py-2   hover:tw-text-white tw-duration-150 hover:tw-border-[#5457D9] hover:!tw-bg-[#5457D9] hover:!tw-shadow-sm hover:!tw-shadow-primary-purple-color";
//   const activeNav =
//     "tw-border-b-2 tw-border-solid tw-border-[#797979]  tw-font-[600]";

//   // const filteredLinks = useMemo(() => {
//   //   return headerLinks.filter((link) => {
//   //     if (isAuthenticated() && user?.userType.toLowerCase() === "developer") {
//   //       return link.title !== "Marketplace";
//   //     } else {
//   //       return true;
//   //     }
//   //   });
//   // }, [isAuthenticated, user?.userType]);

//   // const handleSignout = () => {
//   //   logout();
//   //   router.push("/");
//   // };

//   return (
//     <div
//       className={`tw-w-full tw-flex tw-justify-between tw-items-center tw-max-w-[1310px] tw-mx-auto`}
//     >
//       <div>
//         <Link href="/" className="header-links">
//           <Image
//             src="/Assets/icons/white-logo-3.svg"
//             width={220}
//             height={220}
//             alt="logo"
//           />
//         </Link>
//       </div>

//       <div className="tw-flex tw-justify-center tw-items-center tw-gap-4">
//         {filteredLinks &&
//           filteredLinks.map((link, index) => {
//             return (
//               <Link
//                 href={link.href}
//                 key={index}
//                 className={`mb-0 tw-mx-2  tw-text-[12px]  ${
//                   link.href === router.pathname ? activeNav : ""
//                 }`}
//               >
//                 {link.title}
//               </Link>
//             );
//           })}
//       </div>
//       <div className="tw-flex tw-justify-end tw-items-center tw-pr-2 ">
//         {isAuthenticated() ? (
//           <div className="tw-flex tw-justify-end tw-items-center tw-pr-2">
//             {user.userType.toLowerCase() === "developer" ? (
//               <button
//                 onClick={(e) => postListingFunction(e)}
//                 className={`${postButtonStlye}`}
//               >
//                 Post a project
//               </button>
//             ) : null}
//             <div>
//               <Image
//                 src="/Assets/icons/idle_bell.svg"
//                 width={24}
//                 height={24}
//                 alt="bell"
//                 className="tw-w-[20px] tw-h-[20px] tw-mx-5"
//               />
//             </div>

//             <Popover>
//               <PopoverTrigger>
//                 {headerType === "supportHeader" ? (
//                   <GiHamburgerMenu className="tw-w-[25px] tw-h-[25px] tw-min-h-[25px] tw-min-w-[25px] tw-text-white  " />
//                 ) : (
//                   <Image
//                     className="tw-w-[25px] tw-h-[25px] "
//                     width={25}
//                     height={25}
//                     alt="menu_icon"
//                     src="/Assets/images/menu_img.png"
//                   />
//                 )}
//               </PopoverTrigger>
//               <PopoverContent className="tw-max-w-[220px] tw-flex tw-flex-col tw-gap-2 ">
//                 {developerLinks &&
//                   developerLinks.map((devLink, idx) => {
//                     return (
//                       <Link
//                         key={idx}
//                         href={`/${user.userType?.toLowerCase()}/${
//                           devLink.href
//                         }/${user?._id}`}
//                         className="tw-text-[15px]  tw-text-black tw-px-0 tw-py-2 tw-text-center   tw-border-b tw-border-solid tw-duration-150 tw-border-white hover:tw-bg-gray-100 tw-w-full tw-pb-3"
//                       >
//                         {devLink.title}
//                       </Link>
//                     );
//                   })}

//                 <button
//                   onClick={handleSignout}
//                   className="tw-w-full tw-text-[12px]  tw-h-10 tw-rounded-md tw-text-white tw-bg-primary-purple-color tw-mt-3 "
//                 >
//                   Sign out
//                 </button>
//               </PopoverContent>
//             </Popover>

//             {/* <>
//             <div
//               ref={notificationRef}
//               className={` tw-top-[72px]   tw-min-w-full tw-w-[600px] tw-absolute  tw-right  tw-z-[100] tw-duration-500 ${
//                 showNotification ? "semi-sm:tw-block" : "tw-hidden"
//               }`}
//             >
//               <Notifications
//                 closeNotificationPanel={closeNotificationPanel}
//                 ref={notificationRef}
//                 className={"!tw-max-w-[700px]"}
//               />
//             </div>
//           </> */}
//           </div>
//         ) : (
//           <div className=" tw-flex tw-justify-end tw-items-center tw-pr-2">
//             <button
//               onClick={postListingFunction}
//               className={`${postButtonStlye} tw-mr-9 `}
//             >
//               Post a project
//             </button>

//             <Popover>
//               <PopoverTrigger>
//                 {headerType === "supportHeader" ? (
//                   <GiHamburgerMenu className="tw-w-[25px] tw-h-[25px] tw-min-h-[25px] tw-min-w-[25px] tw-text-white  " />
//                 ) : (
//                   <Image
//                     className="tw-w-[25px] tw-h-[25px] "
//                     width={25}
//                     height={25}
//                     alt="menu_icon"
//                     src="/Assets/images/menu_img.png"
//                   />
//                 )}
//               </PopoverTrigger>
//               <PopoverContent className="tw-max-w-[220px] tw-flex tw-flex-col tw-gap-2 ">
//                 <button
//                   className="tw-w-full  tw-text-[15px] tw-z-[100]  tw-text-black tw-px-0 tw-py-2 tw-text-center   tw-border-b tw-border-solid tw-duration-150 tw-border-white hover: tw-pb-3  hover:tw-bg-gray-100 "
//                   onClick={() => setModalShowSignIn(true)}
//                 >
//                   Sign In
//                 </button>

//                 <Link href="/sign-up">
//                   <button className="tw-w-full  tw-text-[14px] tw-h-10 tw-rounded-md tw-text-white tw-bg-primary-purple-color hover:!tw-bg-primary-purple-dark hover:!tw-shadow-sm hover:!tw-shadow-primary-purple-color tw-duration-200 ">
//                     Join Now
//                   </button>
//                 </Link>
//               </PopoverContent>
//             </Popover>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
