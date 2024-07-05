// developer sidebar items:
// - Developer
export const sidebarItems = [
  {
    label: "Dashboard",
    path: "/developer/dashboard",
  },
  {
    label: "Profile",
    path: "/developer/profile",
  },
  {
    label: "Bids Received",
    keyword: "bids",
    submenu: [
      {
        label: "Active Bids",
        path: "/developer/active-bids",
      },
      {
        label: "Accepted Bids",
        path: "/developer/accepted-bids",
      },
      {
        label: "Declined Bids",
        path: "/developer/declined-bids",
      },
      {
        label: "Withdrawn Bids",
        path: "/developer/withdrawn-bids",
      },
    ],
  },
  {
    label: "My Projects",
    keyword: "projects",
    submenu: [
      {
        label: "Active Projects",
        path: "/developer/active-projects",
      },
      {
        label: "Pending Projects",
        path: "/developer/pending-projects",
      },
      {
        label: "Declined Projects",
        path: "/developer/declined-projects",
      },
      {
        label: "Withdrawn Projects",
        path: "/developer/withdrawn-projects",
      },
      {
        label: "Drafts",
        path: "/developer/draft-projects",
      },
    ],
  },
  // {
  //   label: "Messages",
  //   path: "/developer/messages",
  // },
  {
    label: "Notifications",
    path: "/developer/notifications",
  },
];

export const devNavLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "How it works",
    href: "/how-it-works",
  },
];

export const developerLinks = [
  {
    title: "Dashboard",
    href: "dashboard",
  },
  {
    title: "Profile",
    href: "profile",
  },
  {
    title: "Active Projects",
    href: "active-projects",
  },
];
