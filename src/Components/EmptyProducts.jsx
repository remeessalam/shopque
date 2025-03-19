import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";
//eslint-disable-next-line
const EmptyProducts = ({ title, redirect }) => {
  return (
    <div>
      {" "}
      <div className="flex flex-col items-center justify-center h-64 text-gray-600">
        <CgShoppingCart size={48} className="mb-4 text-gray-400" />
        <h2 className="text-xl font-semibold">Your {title} is empty</h2>
        <p className="text-gray-500">
          Browse our products and add items to your {title}.
        </p>
        <Link to={redirect}>
          <button
            type="button"
            className="w-full bg-gray-900 border border-transparent rounded-md py-2 mt-4 px-4 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyProducts;
