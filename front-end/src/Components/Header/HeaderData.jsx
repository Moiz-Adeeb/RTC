import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";

export const HeaderData = [
  {
    name: "Admin User",
    role: "Administrator",
    picture: <AccountCircleIcon sx={{ width: "100%", height: "100%" }} />,
    bell: (
      <NotificationsIcon
        color='disabled'
        sx={{ width: "100%", height: "100%" }}
      />
    ),
    belloff: (
      <NotificationsOffIcon
        color='disabled'
        sx={{ width: "100%", height: "100%" }}
      />
    ),
    arrow: <ArrowDropDownIcon />,
  },
];
