import { useState } from "react";
import { CiDeliveryTruck, CiHeart, CiUser } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { IoIosLogOut } from "react-icons/io";
import { RiKey2Line } from "react-icons/ri";
import { TfiBackLeft } from "react-icons/tfi";
import OrderDetails from "../Components/ProfileComponents/OrderDetails";
import Wishlist from "../Components/ProfileComponents/Wishlist";
// import ShippingAddress from "../Components/ProfileComponents/ShippingAddress";
import AccountDetails from "../Components/ProfileComponents/AccountDetails";
import ChangePassword from "../Components/ProfileComponents/ChangePassword";
import SectionHeader from "../Components/SectionHeader";
import ShippingAddressAll from "../Components/ProfileComponents/ShippingAddressAll";
import ShowOdersPage from "../Components/ReturnOrderComponents/ShowOrdersPage";
function ProfilePage() {
  const [selectedTab, setSelectedTab] = useState("orders");

  const order = false;
  const profileTabs = [
    { id: "orders", label: "Orders", icon: <GiShoppingCart size={20} /> },
    { id: "return", label: "Return", icon: <TfiBackLeft size={20} /> },
    { id: "wishlist", label: "Wishlist", icon: <CiHeart size={20} /> },
    // { id: "address", label: "Address", icon: <CiDeliveryTruck size={20} /> },
    { id: "password", label: "Password", icon: <RiKey2Line size={20} /> },
    {
      id: "account detail",
      label: "Account Detail",
      icon: <CiUser size={20} />,
    },
    {
      id: "shipping address",
      label: "Shipping Address",
      icon: <CiDeliveryTruck size={20} />,
    },
    { id: "logout", label: "Logout", icon: <IoIosLogOut size={20} /> },
  ];
  const handleTabs = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div className=" bg-gray-50">
      {/* Header Section */}
      <SectionHeader section="My Account" />
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="w-full md:w-1/4">
            <div className=" rounded-md ">
              <nav className="flex flex-col">
                {profileTabs?.map(({ id, label, icon }) => (
                  <button
                    key={id}
                    onClick={() => handleTabs(id)}
                    className={`flex items-center rounded-lg gap-3 px-6 py-4 hover:bg-gray-100 text-left ${
                      selectedTab === id ? "bg-gray-100" : ""
                    }`}
                  >
                    {icon}
                    <span className="font-medium">{label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          {selectedTab === "orders" && <OrderDetails isOrders={order} />}
          {selectedTab === "wishlist" && <Wishlist />}
          {/* {selectedTab === "address" && <ShippingAddress />} */}
          {selectedTab === "shipping address" && <ShippingAddressAll />}
          {selectedTab === "account detail" && <AccountDetails />}
          {selectedTab === "password" && <ChangePassword />}
          {selectedTab === "return" && <ShowOdersPage />}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
