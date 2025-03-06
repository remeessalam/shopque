import { BiChevronRight } from "react-icons/bi";
import { IoIosLogOut } from "react-icons/io";

const AdminPageHeader = () => {
  return (
    <header className="  p-4 flex items-center justify-between">
      <div className="flex items-center">
        <span className="text-gray-500">Admin</span>
        <BiChevronRight className="h-5 w-5 mx-1" />
        <span className="font-medium">Dashboard</span>
      </div>
      <div>
        <IoIosLogOut size={20} className="text-gray-500" />
      </div>
    </header>
  );
};

export default AdminPageHeader;
