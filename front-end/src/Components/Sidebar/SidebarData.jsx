import React from "react";
import DashboardIcon from "../../assets/Icons/earth-globe.png";
import GroupsIcon from "../../assets/Icons/multiple-users-silhouette.png";
import PersonIcon from "../../assets/Icons/insurance.png";
import AssessmentIcon from "../../assets/Icons/chart-bars.png";
import AdminPanelSettingsIcon from "../../assets/Icons/building-silhouette.png";
import BrowseGalleryIcon from "../../assets/Icons/time.png";
import AttachMoneyIcon from "../../assets/Icons/dollar-symbol.png";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: DashboardIcon,
    link: "/dashboard",
  },
  {
    title: "Users",
    icon: GroupsIcon,
    link: "/users",
  },
  {
    title: "Roles",
    icon: PersonIcon,
    link: "/roles",
  },
];

export const SidebarData1 = [
  {
    title: "Reports",
    icon: AssessmentIcon,
    link: "/reports",
  },
  {
    title: "Providers",
    icon: AdminPanelSettingsIcon,
    link: "/providers",
  },
  {
    title: "Shifts",
    icon: BrowseGalleryIcon,
    link: "/shifts",
  },
  {
    title: "Billing",
    icon: AttachMoneyIcon,
    link: "/biling",
  },
];
