import BentoIcon from "../assets/Icons/loading.png";
import DragHandleIcon from "../assets/Icons/handling.png";
import WarehouseIcon from "../assets/Icons/storage.png";
import DeleteIcon from "../assets/Icons/delete.png";
import EditIcon from "../assets/Icons/compose.png";

export const CardsData = [
  {
    title: "Container Loading",
    img: BentoIcon,
    cateogry: "Loading/Unloading",
    required_skills: "Container Handling",
    min_dockers: "4",
    max_dockers: "12",
    duration: "8 hours",
    used: "Used 45 times",
    edit: EditIcon,
    del: DeleteIcon,
    color: "#fef1e0",
    status: "Active",
  },
  {
    title: "Bulk Handling",
    img: DragHandleIcon,
    cateogry: "Handling",
    required_skills: "Bulk Operations",
    min_dockers: "6",
    max_dockers: "15",
    duration: "6 hours",
    used: "Used 28 times",
    edit: EditIcon,
    del: DeleteIcon,
    color: "#f6edfe",
    status: "Active",
  },
  {
    title: "Cargo Storage",
    img: WarehouseIcon,
    cateogry: "Storage",
    required_skills: "General Labor",
    min_dockers: "2",
    max_dockers: "8",
    duration: "4 hours",
    used: "Used 12 times",
    edit: EditIcon,
    del: DeleteIcon,
    color: "#ddfcf6",
    status: "Active",
  },
];
