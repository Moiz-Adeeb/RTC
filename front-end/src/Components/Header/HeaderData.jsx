import React from "react";
import AccountCircleIcon from "../../assets/Icons/profile-picture.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";

export const HeaderData = [
  {
    name: "Admin User",
    role: "Administrator",
    picture: AccountCircleIcon,
    bell: (
      <NotificationsIcon
        color='disabled'
        sx={{ color: "gray", width: "100%", height: "100%" }}
      />
    ),
    belloff: (
      <NotificationsOffIcon
        color='disabled'
        sx={{ color: "gray", width: "100%", height: "100%" }}
      />
    ),
    arrow: <ArrowDropDownIcon />,
  },
];
