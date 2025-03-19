import ordersuccess from "../assets/images/icons/order-success.png";
import orderfailed from "../assets/images/icons/order-failed.svg";
import { FaArrowRight } from "react-icons/fa";
import SectionHeader from "../Components/SectionHeader";
import { Link } from "react-router-dom";
//eslint-disable-next-line
function OrderStatusPage({ orderPlaced }) {
  return (
    <div className="min-h-screen ">
      {/* Header section */}
      <SectionHeader
        section={orderPlaced ? `Successful Order` : `Failed Order`}
        bgcolor={orderPlaced ? `bg-[#D5E5D7]` : `bg-[#FBD9D0]`}
      />

      {/* Main content */}
      <div className="container mx-auto px-4 flex flex-col items-center justify-center py-16">
        <div className="w-full max-w-md flex flex-col items-center">
          {/* Package icon with checkmark */}
          <div className="mb-8">
            <div className="relative">
              <img
                src={orderPlaced ? ordersuccess : orderfailed}
                alt="ordersuccess"
              />
            </div>
          </div>

          {/* Thank you message */}
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1a2e1a] mb-4">
            {orderPlaced
              ? "Thank you for shopping"
              : "Oops! There was an issue"}
          </h2>

          {/* Order confirmation text */}
          <p className="text-center text-gray-600 mb-8">
            {orderPlaced
              ? "Your order has been successfully placed and is now being processed."
              : "Oops! There was a problem processing your order. Please review the details and try again."}
          </p>

          {/* Go to account button */}
          <Link to={orderPlaced ? "/profile" : "/cartitems"}>
            <button className="bg-[#111827] text-white px-6 py-3 rounded flex items-center justify-center space-x-2 hover:bg-[#1f2937] transition-colors">
              <span>{orderPlaced ? "Go to my account" : "Reorder"}</span>
              <FaArrowRight size={18} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderStatusPage;
