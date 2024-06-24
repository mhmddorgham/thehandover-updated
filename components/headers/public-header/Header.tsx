// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// import HeaderLg from "./HeaderLg";
// import HeaderSm from "./HeaderSm";

// export default function Header() {
//   const router = useRouter();

//   const [userEmail, setUserEmail] = useState("");

//   // useEffect(() => {
//   //   if (user) {
//   //     window.Intercom("boot", {
//   //       api_base: "https://api-iam.intercom.io",
//   //       app_id: "zzqatq0y",
//   //       name: user.name,
//   //       email: user.email,
//   //       created_at: user.createdAt,
//   //     });
//   //   } else {
//   //     window.Intercom("boot", {
//   //       api_base: "https://api-iam.intercom.io",
//   //       app_id: "zzqatq0y",
//   //     });
//   //   }
//   // }, [user]);

//   // useEffect(() => {
//   //   const handleRouteChange = () => {
//   //     window.Intercom("update");
//   //   };
//   //   router.events.on("routeChangeComplete", handleRouteChange);
//   //   return () => {
//   //     router.events.off("routeChangeComplete", handleRouteChange);
//   //   };
//   // }, [router.events]);

//   // const VerifyEmail = (email) => {
//   //   setUserEmail(email);
//   //   setModalShowEmailVerification(true);
//   // };

//   // const onSwitchModal = (modalName) => {
//   //   switch (modalName) {
//   //     case "signIn":
//   //       setModalShowSignIn(true);
//   //       setModalShowSignUp(false);
//   //       setShowSignupRequired(false);
//   //       break;
//   //     case "signUp":
//   //       setModalShowSignUp(true);
//   //       setModalShowSignIn(false);
//   //       setShowSignupRequired(false);
//   //       break;
//   //     default:
//   //       break;
//   //   }
//   // };

//   // const postListingFunction = (e) => {
//   //   e.preventDefault();

//   //   if (isAuthenticated()) {
//   //     if (
//   //       user?.userType.toLowerCase() === "developer" &&
//   //       user?.status === "active"
//   //     ) {
//   //       router.push(
//   //         `/${user.userType?.toLowerCase()}/bids/add-auction/${user?._id}`
//   //       );
//   //     } else {
//   //       setShowPostActiveModal(true);
//   //     }
//   //   } else {
//   //     setShowSignupRequired(true);
//   //     setWantToPost(true);
//   //   }
//   // };

//   return (
//     <nav className="bg-white w-100 px-2  py-2 sticky-top d-flex flex-column ">
//       <div className=" relative">
//         <div className=" w-full  hidden semi-sm:block">
//           <HeaderLg />
//         </div>
//         <div className={`w-full  block semi-sm:hidden`}>
//           <HeaderSm />
//         </div>
//       </div>

//     </nav>
//   );
// }
