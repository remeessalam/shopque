import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import {
  FiGrid,
  FiBox,
  FiShoppingCart,
  FiUsers,
  FiStar,
  FiSettings,
} from "react-icons/fi";
const SideBar = () => {
  //   const [currentPage, setCurrentPage] = useState(1);
  const { pathname } = useLocation();
  const menuItems = [
    {
      icon: <FiGrid size={20} />,
      text: "Dashboard",
      active: true,
      link: "/admin",
    },
    {
      icon: <FiBox size={20} />,
      text: "Products",
      active: false,
      link: "/admin/products",
    },
    {
      icon: <FiShoppingCart size={20} />,
      text: "Orders",
      active: false,
      link: "/admin/orders",
    },
    {
      icon: <FiUsers size={20} />,
      text: "Customers",
      active: false,
      link: "/admin/customer-details",
    },
    {
      icon: <FiStar size={20} />,
      text: "Reviews",
      active: false,
      link: "/admin/reveiws",
    },
    {
      icon: <FiSettings size={20} />,
      text: "Settings",
      active: false,
      link: "/admin/settings",
    },
  ];
  return (
    <div>
      {/* Sidebar */}
      <div className="w-[216px] md:w-[216px] bg-white  flex-shrink-0">
        {/* Logo */}
        <div className="p-4 ">
          <img src={logo} alt="Shopque Nest LLP" className="h-12" />
        </div>

        {/* Menu Items */}
        <div className="py-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={`flex items-center px-4 py-3 cursor-pointer ${
                pathname === item.link ? "text-primary" : "text-gray-700"
              } hover:bg-gray-50`}
            >
              <div className="mr-3">{item.icon}</div>
              <span className="md:block hidden">{item.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
