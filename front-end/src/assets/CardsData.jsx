import BentoIcon from "@mui/icons-material/Bento";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const CardsData = [
  {
    title: "Container Loading",
    img: <BentoIcon />,
    cateogry: "Loading/Unloading",
    required_skills: "Container Handling",
    min_dockers: "4",
    max_dockers: "12",
    duration: "8 hours",
    used: "Used 45 times",
    edit: <EditIcon />,
    del: <DeleteIcon />,
    color: "rgba(255, 201, 100, 0.336)",
    status: "active",
  },
  {
    title: "Bulk Handling",
    img: <DragHandleIcon />,
    cateogry: "Handling",
    required_skills: "Bulk Operations",
    min_dockers: "6",
    max_dockers: "15",
    duration: "6 hours",
    used: "Used 28 times",
    edit: <EditIcon />,
    del: <DeleteIcon />,
    color: "rgba(183, 153, 255, 0.336)",
    status: "active",
  },
  {
    title: "Cargo Storage",
    img: <WarehouseIcon />,
    cateogry: "Storage",
    required_skills: "General Labor",
    min_dockers: "2",
    max_dockers: "8",
    duration: "4 hours",
    used: "Used 12 times",
    edit: <EditIcon />,
    del: <DeleteIcon />,
    color: "rgba(179, 255, 189, 0.336)",
    status: "active",
  },
];
