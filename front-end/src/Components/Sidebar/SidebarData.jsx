import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import BrowseGalleryIcon from "@mui/icons-material/BrowseGallery";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    title: "Users",
    icon: <GroupsIcon />,
    link: "/users",
  },
  {
    title: "Roles",
    icon: <PersonIcon />,
    link: "/roles",
  },
];

export const SidebarData1 = [
  {
    title: "Reports",
    icon: <AssessmentIcon />,
    link: "/reports",
  },
  {
    title: "Providers",
    icon: <AdminPanelSettingsIcon />,
    link: "/providers",
  },
  {
    title: "Shifts",
    icon: <BrowseGalleryIcon />,
    link: "/shifts",
  },
  {
    title: "Billing",
    icon: <AttachMoneyIcon />,
    link: "/biling",
  },
];
